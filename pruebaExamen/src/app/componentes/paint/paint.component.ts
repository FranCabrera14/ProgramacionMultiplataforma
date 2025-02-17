import { Component, OnInit, Input } from '@angular/core';
//importante importar el modelo de datos especifico nuestro
import {TimeSend} from './../../models/timesend'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.scss'],
})
export class PaintComponent  implements OnInit {
  //variables para no hardcodear en el html
  public tiempoen:string ="El tiempo en";
  public tmin:string="Temperatura minima:";
  public tmax:string="Temperatura máxima:";
 public humedad:string="Humead relativa:";
 public velocidad:string="Velocidad del viento:";

  //este es el input al que llamamos desde el time html y recoge los datos de la api
  //guardandolos en tiempo, dandole el modelo de datos de timesend
  @Input('tiempo') tiempo: TimeSend;
  url_icon:string="https://openweathermap.org/img/w/";
  

  constructor() {
    //aqui se guarda lo que nos da la api, y lo guardamos en cada una de estas variables
    this.tiempo= {nombre: "", icono: "", temp_min: 0, temp_max: 0, humedad: 0, velocidad: 0 };
   }

  ngOnInit() {
  }

  get_image()
  {
    return this.url_icon+this.tiempo.icono+".png";
  }

}
