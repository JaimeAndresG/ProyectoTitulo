import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarManoObraPageRoutingModule } from './modificar-mano-obra-routing.module';

import { ModificarManoObraPage } from './modificar-mano-obra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarManoObraPageRoutingModule
  ],
  declarations: [ModificarManoObraPage]
})
export class ModificarManoObraPageModule {}
