import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
    //variables a utilizar
    dato : any[]=[];
    datos : any [] = [];
  

  constructor(private storage: Storage) { 
    storage.create ();
  }


   //metodos del crud del storage

   async agregar (key:any,dato:any){
    this.datos = await this.storage.get(key) || [];
    

    this.dato = await this.getDato (key, dato.id);

    console.log(this.dato)
    if (this.dato == undefined) {
      console.log('hola')
      this.datos.push(dato);
      await this.storage.set(key, this.datos);
      return true;
    }
    return false;
    

   } 

   // FUnciones de carro

   async agregarCarro (key:any,dato:any){
    this.datos = await this.storage.get(key) || [];
    
    this.datos.push(dato);
    await this.storage.set(key, this.datos);
    return true;
    

   } 

   async getDatoCarro (key:any, identificador:any){
    this.datos = await this.storage.get (key) || [];
    this.dato = this.datos.find (Carro => Carro.id == identificador);
    console.log(key); 
    console.log(identificador); 
    console.log(this.datos); 

    return this.dato;
    
  }







   async getDato (key:any, identificador:any){
    this.datos = await this.storage.get (key) || [];
    this.dato = this.datos.find (persona => persona.id == identificador);
    console.log(key); 
    console.log(identificador); 
    console.log(this.datos); 

    return this.dato;
    
  }
  async getDatos (key:any): Promise<any[]>{
    this.datos = await this.storage.get (key) || [];
    
    return this.datos
    
  }
   async eliminar (key:any , dato:any){

    console.log(dato)
    this.datos = await this.storage.get (key) || [];
    this.datos.forEach ((value, index) => {
      if (value.username == dato) {
        this.datos.splice (index,1);
      }
    });
    await this.storage.set (key,this.datos);
    
  }
  async actualizar (key:any, dato:any) {
    this.datos = await this.storage.get (key) || [];

    var index = this.datos.findIndex (persona => persona.id == dato.id);
    console.log(this.datos);
    console.log(dato);
    console.log(index);
    this.datos [index] = dato ;

   await this.storage.set(key, this.datos);
  }

  
/* 
  getAuth () {
    return this.isAuthenticated.value;
  }

  logout(){
    this.isAuthenticated.next(false);
    this.router.navigate(['/login']);
  } */

  async validarUser ( email:any, pass:any){
    this.datos = await this.storage.get ("personas") || [];
    
    var usuario_login = this.datos.find(u => u.email == email && u.password == pass);

    if (usuario_login != undefined) {
      console.log(usuario_login.correo)
      //PARA CAMBIAR EL VALOR A UN BehaviorSubject SE UTILIZA EL METODO .next(valor);
      
      /* this.isAuthenticated.next(true); */
      return usuario_login;
    }

    
  }

  async validarID(id:any){
    this.datos = await this.storage.get ("logins") || [];
    return this.datos.find(u => u.id == id);  
    //return this.usuarios.find(u => u.email == email);
  }



}
