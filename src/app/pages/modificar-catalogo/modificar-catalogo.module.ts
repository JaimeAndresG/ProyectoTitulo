import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarCatalogoPageRoutingModule } from './modificar-catalogo-routing.module';

import { ModificarCatalogoPage } from './modificar-catalogo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarCatalogoPageRoutingModule
  ],
  declarations: [ModificarCatalogoPage]
})
export class ModificarCatalogoPageModule {}
