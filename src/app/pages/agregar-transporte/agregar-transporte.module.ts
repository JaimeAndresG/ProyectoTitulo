import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarTransportePageRoutingModule } from './agregar-transporte-routing.module';

import { AgregarTransportePage } from './agregar-transporte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarTransportePageRoutingModule
  ],
  declarations: [AgregarTransportePage]
})
export class AgregarTransportePageModule {}
