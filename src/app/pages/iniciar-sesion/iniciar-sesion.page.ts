import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router,NavigationExtras,ActivatedRoute } from '@angular/router';

import { StorageService } from '../../storage.service'

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage implements OnInit {
  isMenuOpen =false;
  toggleMenu():void{
    this.isMenuOpen = !this.isMenuOpen;

  }

  KEY_LOGIN = 'logins';
  ingreso: any = {
    id: '',
    username: '',
    token: ''

  }
  esepera:any;

  logeado : any =[{
    
  }];

  login = new FormGroup({
    rut: new FormControl('',[Validators.required,Validators.pattern('[0-9]{1,2}.[0-9]{3}.[0-9]{3}-[0-9kK]')]),
    contrasena: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(18)]),
  });
  

  constructor(private http: HttpClient,private router : Router,private storageService: StorageService) { }

  ngOnInit() {
  }


  data: any[] = [
    {

    }

  ]
  datalogin: any=[];


 
  


  async insDatos(){
    this.data = [
      {
        username: this.login.controls.rut.value,
        password: this.login.controls.contrasena.value,

        
      }
  
    ]
    

    console.log(this.data)
    this.http.post("http://localhost:3000/auth/signin", this.data[0])
    .subscribe((data:any )=> {

      this.datalogin= data


      this.ingreso.id = this.datalogin.user.id
      this.ingreso.username = this.datalogin.user.username;
      this.ingreso.token = this.datalogin.token 

      

    




      /* if(await this.storageService.getDato(this.KEY_LOGIN, this.ingreso.id) == undefined ){
        console.log('probando')
  
        await this.storageService.agregar(this.KEY_LOGIN, this.ingreso)
        
  
      }else{
        console.log('HOL222222222222A')
      };
 */
      
    this.storageService.agregar(this.KEY_LOGIN, this.ingreso) 

    
    setTimeout(() => {
      console.log('Han pasado 2 segundos, continuando con la acción...');
      // Aquí puedes agregar el código que deseas ejecutar después de la pausa de 3 segundos
      this.router.navigate(['/admin']) 
    }, 2000);
       
      
     }, error => {
      console.log(error);
    });
    
    

  }

  espera(){
    console.log('ESPERANDO')
  }
}
