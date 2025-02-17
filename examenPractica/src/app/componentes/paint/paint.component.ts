import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
//importante importar el modelo de datos especifico nuestro
import { TimePerso } from 'src/app/models/timePerso';
import { TranslateConfigService } from 'src/app/services/translate-config.service';
@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.scss'],
  //acuerdate de esto
  standalone: false
})
export class PaintComponent  implements OnInit {
 //este es el input al que llamamos desde el time html y recoge los datos de la api
  //guardandolos en tiempo, dandole el modelo de datos de timesend
  @Input('tiempo') tiempo: TimePerso;
  url_icon:string="https://openweathermap.org/img/w/";
  constructor(private translateConfigService: TranslateConfigService
  ) {
     //aqui se guarda lo que nos da la api, y lo guardamos en cada una de estas variables
     this.tiempo= {nombre: "", icono: "", temp_min: 0, temp_max: 0, humedad: 0, velocidad: 0 };
   }

  ngOnInit() {  
    this.translateConfigService.setLanguage('es')
  }
  get_icono(){
    return this.url_icon+this.tiempo.icono+".png";
  }
}
