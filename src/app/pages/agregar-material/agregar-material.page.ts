import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../../storage.service'

@Component({
  selector: 'app-agregar-material',
  templateUrl: './agregar-material.page.html',
  styleUrls: ['./agregar-material.page.scss'],
})
export class AgregarMaterialPage implements OnInit {

//formulario de Material
  material = new FormGroup({
    nom_material: new FormControl(''),
    descripcion : new FormControl(),
    tipo: new FormControl(),
    precio: new FormControl ()
  });

  constructor(private http: HttpClient,private router : Router, private storageService: StorageService) { }

  KEY_LOGIN = 'logins';
  logeado:any=[];

  ngOnInit() {
  }

  //inicializacion de variable
  data: any[] = [
    {

    }

  ]


  //insersion de datos de Material
  insDatos(){
    this.data = [
      {
        nom_material: this.material.controls.nom_material.value,
        descripcion: this.material.controls.descripcion.value,
        tipo: this.material.controls.tipo.value,
        precio: this.material.controls.precio.value,
       
      }
  
    ]

    //Metodo HTTP POST que inserta la informacion de material
    this.http.post("http://localhost:3000/auth/creamaterial", this.data[0])
    .subscribe(data => {
      console.log('CORRECTO');
     }, error => {
      console.log(error);
    });
    this.router.navigate(['/admin'])  


}
async logOut(){
  this.storageService.eliminar(this.KEY_LOGIN,this.logeado.username)
   this.router.navigate(['/home'])  
 
 }

}
