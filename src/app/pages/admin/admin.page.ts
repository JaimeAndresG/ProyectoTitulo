import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit , OnDestroy } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { MenuController } from '@ionic/angular';
import { StorageService } from '../../storage.service'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit, OnDestroy {



  private httpSubscription: Subscription | undefined;
  
﻿//Variables a Utilizar
  data: any[] = [
    {
      
    }

  ]
  ingreso: any = {
    id: '',
    username: '',
    token: ''

  }
  KEY_LOGIN = 'logins';
 
  logeado:any=[];
  empresas:any=[];
  materiales:any=[];
  KEY_LOG='Userlog'

  esepera:any;

  KEY_CONSULTA:any=[];




 
  constructor(private router : Router,
     private activatedRoute: ActivatedRoute, private http: HttpClient,private storageService: StorageService
     ,private cdr: ChangeDetectorRef
     ) {
    
     }



 async ngOnInit() {

   
     this.esepera= await this.ObtLogeado()
     const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.logeado.token
      })
    };

    this.KEY_CONSULTA=httpOptions



    //Recibe datos de Empresas
     this.dataEmp(this.KEY_CONSULTA)
     this.dataMat(this.KEY_CONSULTA)

  }

  ngOnDestroy(): void {
    // Realiza tareas de limpieza o liberación de recursos aquí
    // antes de que el componente sea destruido.

     if (this.httpSubscription) {
      this.httpSubscription.unsubscribe();
    } 
  }


  //FUNCIONES DE SESION



  //DESTRUYE EL STORAGE DE SESION
  async logOut(){
    this.storageService.eliminar(this.KEY_LOGIN,this.logeado.username)
     this.router.navigate(['/home'])  
   
   
   }
   
  //Funcion para Obtener El usuario Logeado Del STORAGE
  async ObtLogeado(){
   
    this.logeado = await this.storageService.getDatos(this.KEY_LOGIN)
   this.logeado= this.logeado[0]
   this.data = [
     {
       username:this.logeado.username
       ,
       token: this.logeado.token  
     }
 
   ]

  
    return this.data  
 }





 //-----------------------------------------------------------------EMPRESAS----------------------------------------------------------------
 //bOTON slider de empresa
 botonEmpresas(){

  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + this.logeado.token
    })
  };
  this.dataEmp(httpOptions)
  
}

//)OBTIENE LA DATA DE LA EMPRESAS
  async dataEmp(httpOptions:any){

  this.httpSubscription=this.http.get('http://localhost:3000/empresas', httpOptions).subscribe(data => {
      this.empresas=data
      console.log(this.empresas)
      this.cdr.detectChanges();
    });
 }
//Elimina LA EMPRESA
DeleteEmp(id:any){
  this.http.delete('http://localhost:3000/modemp/'+ id).subscribe(data => {
  });
  this.http.get('http://localhost:3000/empresas', this.KEY_CONSULTA).subscribe(data => {
   
    this.empresas=data
  });
}
// --------------------------------------------------- fin empresas---------------------------------------------------------------



 //-----------------------------------------------------------------MATERIALES----------------------------------------------------------------
botonMateriales(){

  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + this.logeado.token
    })
  };
  this.dataMat(httpOptions)
  
}


async dataMat(httpOptions:any){

  this.httpSubscription=this.http.get('http://localhost:3000/materiales', httpOptions).subscribe(data => {
      this.materiales=data
      console.log(this.materiales)
     
    });
 }

 DeleteMat(id:any){
  this.http.delete('http://localhost:3000/modmat/'+ id).subscribe(data => {
  });
  this.http.get('http://localhost:3000/materiales', this.KEY_CONSULTA).subscribe(data => {
   
    this.materiales=data
  });
}


funciondeprueba(){
  console.log('HOLAMUNDO')
}







 
  }
