import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeatherPageRoutingModule } from './weather-routing.module';

import { WeatherPage } from './weather.page';
import { TranslateModule } from '@ngx-translate/core';
import { WeatherService } from 'src/app/services/weather.service';
import { PaintComponent } from 'src/app/componentes/paint/paint.component';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeatherPageRoutingModule,
    TranslateModule,
    ComponentesModule
  ],
  declarations: [WeatherPage],
  providers: [WeatherService]
})
export class WeatherPageModule { }
