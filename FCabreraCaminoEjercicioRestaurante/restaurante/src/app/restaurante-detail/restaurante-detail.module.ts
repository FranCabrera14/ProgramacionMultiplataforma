import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestauranteDetailPageRoutingModule } from './restaurante-detail-routing.module';

import { RestauranteDetailPage } from './restaurante-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestauranteDetailPageRoutingModule
  ],
  declarations: [RestauranteDetailPage]
})
export class RestauranteDetailPageModule {}
