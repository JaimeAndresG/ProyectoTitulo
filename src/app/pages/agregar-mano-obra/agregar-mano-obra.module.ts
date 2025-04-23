import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarManoObraPageRoutingModule } from './agregar-mano-obra-routing.module';

import { AgregarManoObraPage } from './agregar-mano-obra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarManoObraPageRoutingModule
  ],
  declarations: [AgregarManoObraPage]
})
export class AgregarManoObraPageModule {}
