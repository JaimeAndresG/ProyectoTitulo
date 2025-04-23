import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {
  isMenuOpen =false;
  toggleMenu():void{
    this.isMenuOpen = !this.isMenuOpen;

  }
  to!: string;
  from!: string;
  subject!: string;
  text!: string;



  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  sendEmail() {
    const emailData = {
      to: this.to,
      from: this.from,
      subject: this.subject,
      text: this.text
      
    };


    this.http.post('http://localhost:3000/send-email', emailData)
    .subscribe(
      () => {
        console.log('Correo electrónico enviado exitosamente');
        // Aquí puedes mostrar una notificación o redirigir a una página de éxito
      },
      (error) => {
        console.error(error);
        // Aquí puedes mostrar una notificación de error o manejar el error de alguna manera
      }
    );


}

}
