import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//importarlo y ponerlo en el imports
import { HttpClientModule, HttpClient } from "@angular/common/http";
//importante, estos imports para el transalate
//dentro del proyecto instalar los translates para que nos salga los imports
//npm install @ngx-translate/core
//npm install @ngx-translate/http-loader
import { TranslateModule,TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TimeserviceService } from './services/timeservice.service';

//funcion pa que vaya el translate loader:
//despues de todo esto crear el translate service, y seguir los pasos

export function createTranslateLoader(http: HttpClient) {
  //cuidado con la ruta ../ pa salir de la carpeta
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json')
}
//CUIDADO NO METAS EN LOS IMPORT, EL HTTPCLIENT
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    HttpClientModule, IonicModule, TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }

    )],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, TimeserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
