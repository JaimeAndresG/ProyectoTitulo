import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarCredencialPageRoutingModule } from './modificar-credencial-routing.module';

import { ModificarCredencialPage } from './modificar-credencial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarCredencialPageRoutingModule
  ],
  declarations: [ModificarCredencialPage]
})
export class ModificarCredencialPageModule {}
