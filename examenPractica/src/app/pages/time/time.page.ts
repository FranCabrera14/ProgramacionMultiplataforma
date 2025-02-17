import { Component, OnInit } from '@angular/core';
import { TimeserviceService } from 'src/app/services/timeservice.service';
import { TimeOG } from 'src/app/models/timeOG';
import { TimePerso } from 'src/app/models/timePerso';
import { TranslateConfigService } from 'src/app/services/translate-config.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-time',
  templateUrl: './time.page.html',
  styleUrls: ['./time.page.scss'],
  //acuerdate de esto
  standalone: false
})
export class TimePage implements OnInit {
  //meter en el constructor los services de time y translate
  constructor(private time: TimeserviceService, 
    private translateConfigService: TranslateConfigService,
    private translate: TranslateService) { 
      this.translateConfigService.getDefaultLanguage();
    }
  
  public latitud: string = "";
  public longitud: string = "";
  
    //importante declarar el modelo en el page.
    //recuerda importarlo carajote
    private time_model: TimeOG = {
      coord: {}, weather: [], base: "", limit: 0, main: {}, visibility: 0,
      wind: {}, clouds: {}, dt: "", sys: {}, timezone: 0, id: 0, name: "", cod: 0
    }

    //esto es pa declarar nuestro modelo de datos personalizado
    public time_send: TimePerso = { nombre: "", icono: "", temp_min: 0, temp_max: 0, humedad: 0, velocidad: 0 };
  ngOnInit() {
    this.translateConfigService.setLanguage('es')
  }

  /**
   * get_weather: llama al servicio get weather pasándole los parámetos 
   * latitud y longitud que luego le eviaremos con un input
   * el metodo del servicio nos devolvera el modelo del json con esos parametros
   * que seria (data) y lo guardamos en nuestro modelo original para luego
   * atributo por atributo establecerle lo que nos interesa al modelo personalizado
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
