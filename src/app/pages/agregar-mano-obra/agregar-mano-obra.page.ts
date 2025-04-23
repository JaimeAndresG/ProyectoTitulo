import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-agregar-mano-obra',
  templateUrl: './agregar-mano-obra.page.html',
  styleUrls: ['./agregar-mano-obra.page.scss'],
})
export class AgregarManoObraPage implements OnInit {

  constructor(private storageService: StorageService) { }

  KEY_LOGIN = 'logins';
  logeado:any=[];

  ngOnInit() {
  }

}
