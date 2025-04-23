import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StorageService } from '../../storage.service'

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.page.html',
  styleUrls: ['./cotizacion.page.scss'],
})
export class CotizacionPage implements OnInit {
  isMenuOpen =false;
  toggleMenu():void{
    this.isMenuOpen = !this.isMenuOpen;

  }
  KEY_Carrito='detalle'

  estructural :any = [
  ]

  vidrio :any = [
  ]
  largo!: number;
  ancho!: number;
  selectedOption!: {nombre:string,valor:number};
  selectedVidrio!: {nombre:string,valor:number};
  selectedInstalacion!: number;
  cantidad!: number;
  precioFinal!:number;
  precioInstalacionFinal: number = 0;
  precioInstalacion: number = 0;


  carro: any=[]


  constructor(private http: HttpClient, private storage: StorageService) { }
  private httpSubscription: Subscription | undefined;
  materiales:any=[];

  
  ngOnInit() {

    this.httpSubscription=this.http.get('http://localhost:3000/materiales').subscribe(data => {
      this.materiales=data
      this.materiales.forEach((items:any) =>{
        
        
        if(items.tipo == 'Estructural'){
          this.estructural.push(items)
          
        }else if(items.tipo == 'Vidrio'){
          this.vidrio.push(items)
          

        }
      
        
      
      })
      
    });
  
  }



/*   options = [
    { texto: 'Aluminio', valor: 1000 },
    { texto: 'Madera', valor: 1500 },
    { texto: 'PVC', valor: 1200 }
  ];

  options2 = [
    { texto: 'Simple', valor: 1800 },
    { texto: 'Termopanel', valor: 2500 }
  ]; */

  instalation = [
    { texto: 'SI', valor: 10000 },
    { texto: 'NO', valor: 0 }
  ];
 
  PrecioMateriales(materiales:any){
    materiales.array.forEach((item:any) => {
      console.log(item)
      
    });

    }


  calcular() {
    let vidrio=(this.largo/100*this.ancho/100) * this.selectedVidrio.valor
    let estructura = (((this.largo/100)*4 ) + ((this.ancho/100)*2) ) *  (Number(this.selectedOption.valor))
    this.precioFinal= ((estructura+vidrio*this.cantidad)+ Number(this.selectedInstalacion))

    
   

    
   /*  let area = this.largo * this.ancho;
    let precioMaterial = (this.selectedOption * area) / 350;
    let precioVidrio = (this.selectedVidrio * area) / 350;
    let precioTotal = (precioMaterial + precioVidrio);    
    let totalCantidad = this.cantidad;
    this.precioFinal =  precioTotal * totalCantidad;
    let instalacionSI = Number(this.selectedInstalacion);
    let precioInstalacion =instalacionSI + precioTotal ;
    this.precioInstalacion=precioInstalacion; */

  }


  agregarCarrito(){
    let AgrCarro=[]
    AgrCarro=[
      {

        'tipo' : 'Ventana de :'+this.selectedOption.nombre+' y '+this.selectedVidrio.nombre,
        'largo' : this.largo,
        'ancho' : this.ancho,
        'estructural' : (Number(this.selectedOption.valor)),
        'vidrio' : (Number(this.selectedVidrio.valor)),
        'instalacion': (Number(this.selectedInstalacion)),
        'cantidad': this.cantidad,
        'total' : this.precioFinal}
        
    ]

    this.storage.agregarCarro(this.KEY_Carrito, AgrCarro) 


  }

  

}
