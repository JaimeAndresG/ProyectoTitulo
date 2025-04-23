import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuestros-trabajos',
  templateUrl: './nuestros-trabajos.page.html',
  styleUrls: ['./nuestros-trabajos.page.scss'],
})
export class NuestrosTrabajosPage implements OnInit {
  isMenuOpen =false;
  toggleMenu():void{
    this.isMenuOpen = !this.isMenuOpen;

  }


  constructor() { }

  ngOnInit() {
  }

}

