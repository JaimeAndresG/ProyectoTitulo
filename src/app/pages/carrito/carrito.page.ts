import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../storage.service'

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  isMenuOpen =false;
  toggleMenu():void{
    this.isMenuOpen = !this.isMenuOpen;

  }

  KEY_Carrito='detalle'
  carro: any=[]
  carrodata: any[]=[]


  constructor(private storage: StorageService) { }

  async ngOnInit(): Promise<void> {

    
    try {
      // Llamada asíncrona a una API o servicio
     this.carro=  await this.dataCarrito()
      console.log(this.carro);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
    
    this.carro.forEach((item:any) => {
      this.carrodata.push(item)
    });
    console.log(this.carrodata)
  }

async dataCarrito(){
   this.carro =await this.storage.getDatos(this.KEY_Carrito)
   return this.carro
}

}
