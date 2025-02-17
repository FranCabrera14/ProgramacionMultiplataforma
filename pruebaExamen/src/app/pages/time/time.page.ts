import { Component, OnInit } from '@angular/core';
import { TimeserviceService } from 'src/app/services/timeservice.service';
import { Time } from './../../models/time';
import {TimeSend} from './../../models/timesend'

@Component({
  selector: 'app-time',
  templateUrl: './time.page.html',
  styleUrls: ['./time.page.scss'],
})
export class TimePage implements OnInit {
  //variables para no hardcodear en el html
  public titulo:string="EL TIEMPO";
  public tlatitud:string="Latitud";
  public tlongitud:string="Longitud";
  public enviar:string="Enviar";

  constructor(private time: TimeserviceService) { }
  public latitud: string = "";
  public longitud: string = "";
  //importante declarar el modelo en el page.
  private time_model: Time = {
    coord: {}, weather: [], base: "", limit: 0, main: {}, visibility: 0,
    wind: {}, clouds: {}, dt: "", sys: {}, timezone: 0, id: 0, name: "", cod: 0
  }


  //esto es pa guardar las cosas del modelo original del api a nuestro modelo
  public time_send: TimeSend = { nombre: "", icono: "", temp_min: 0, temp_max: 0, humedad: 0, velocidad: 0 };

  ngOnInit() {
  }

  /**
   * get_time: llama al servicio del tiempo pasándole los parámetos latitud y longitud:
   */
  get_weather() {
    this.time.get_weather(this.latitud, this.longitud).subscribe(data => {
      this.time_model = data;
      this.time_send.nombre=this.time_model.name;
      this.time_send.icono= this.time_model.weather[0].icon;
      this.time_send.temp_min=this.time_model.main?.temp_min;
      this.time_send.temp_max=this.time_model.main?.temp_max;
      this.time_send.humedad=this.time_model.main?.humidity;
      this.time_send.velocidad=this.time_model.wind?.speed;
    }
      , error => {
        alert('error');
        console.log(error);
      }
    );

  }

}
