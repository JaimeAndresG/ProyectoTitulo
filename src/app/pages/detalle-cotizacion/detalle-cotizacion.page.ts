import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { StorageService } from '../../storage.service'
import 'jspdf-autotable';

@Component({
  selector: 'app-detalle-cotizacion',
  templateUrl: './detalle-cotizacion.page.html',
  styleUrls: ['./detalle-cotizacion.page.scss'],
})
export class DetalleCotizacionPage implements OnInit {
  isMenuOpen =false;
  toggleMenu():void{
    this.isMenuOpen = !this.isMenuOpen;

  }
  // Variables de detalle de la cotizacion
  KEY_Carrito='detalle'
  carro: any=[]
  carrodata: any[]=[]
  totalfinal:number=0





  downloadPDF() {
    console.log('hola')
    const pdf = new jsPDF();   
    
    // Obtén el elemento pdf-content del DOM
    const pdfContent = document.getElementById('pdf-content') as HTMLElement;
    if (!pdfContent) {
      console.error('Element with id "pdf-content" not found in the DOM.');
      return;
    }
       // Agregar imagen del logo
      const logoWidth = 40; // Ancho de la imagen del logo
      const logoHeight = 20; // Alto de la imagen del logo     
    
      const logoImg = new Image();
      logoImg.src = '../../../assets/img/logo.png';
      
      // Esperar a que la imagen se cargue
      logoImg.onload = () => {
        // Insertar el logo en el documento PDF
      pdf.addImage(logoImg, 'PNG', 5, 5, logoWidth, logoHeight);
        
     
      // Agregar título del PDF
      pdf.setFontSize(14);
      pdf.setFont('Helvetica', 'bold');
      pdf.text('Solicitud cotización', 85, 13);


    //intento de tabla 
        // Obtener los datos de la tabla
        const table = document.getElementById('pdf-content') as HTMLTableElement;
        if (!table) {
          console.error('Table element not found in the DOM.');
          return;
        }
    
        const tableData = [];
    
        // Recorrer las filas de la tabla
        for (let i = 0; i < table.rows.length; i++) {
          const rowData = [];

           // Agregar el número de fila como primer elemento de cada fila de datos
          rowData.push(i + 1);
    
          // Recorrer las celdas de la fila actual
          for (let j = 0; j < table.rows[i].cells.length; j++) {
            const cellData = table.rows[i].cells[j].innerText;
            rowData.push(cellData);
          }
    
          tableData.push(rowData);
        }
    
        // Configurar las opciones de la tabla
        const tableOptions = {
          startY: 30, // Posición vertical inicial de la tabla
          margin: { top: 10 }, // Margen superior
        };
    
        // Dibujar la tabla en el documento PDF
        (pdf as any).autoTable({
          head: [['N','Ventana', 'Largo', 'Ancho', 'Instalacion', 'Cantidad', 'Precio']], // Encabezado de la tabla
          body:tableData, // Datos de la tabla
          ...tableOptions,
        });




       
    // Añade la imagen al PDF
 /*      html2canvas(pdfContent).then(canvas => {    
      
      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 5,30, 200, 50);    */ 


 /*      // Crea y llena la tabla con la información
      const tableData = [
        { name: 'John', age: 30 },
        { name: 'Jane', age: 25 },
        { name: 'Bob', age: 40 }
      ]; */

      /* // Añade la tabla al PDF
      const headers = [['Name', 'Age']];
      const data = tableData.map(row => [row.name, row.age]);
      pdf.autoTable({ head: headers, body: data, startY: 160 });
 */
      // Descarga el PDF generado
      
   /*  }); */

    pdf.save('cotizacion-folio.pdf');
      }
  }
  
  constructor(private storage: StorageService) { 

    
  } 
  
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
      this.totalfinal=this.totalfinal+item[0].total
      
    });
    console.log(this.carrodata)
  }

  async dataCarrito(){
    this.carro =await this.storage.getDatos(this.KEY_Carrito)
    return this.carro
 }

}
