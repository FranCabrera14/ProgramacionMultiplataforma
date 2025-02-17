import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { WeatherService } from 'src/app/services/weather.service';
import { TranslateConfigService } from 'src/app/services/translate-config.service';
import { Forecast } from 'src/app/model/forecast';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: false
})
export class WeatherPage implements OnInit {

  latitud: string = "";
  longitud: string = "";
  forecast: Forecast | undefined;

  constructor(private translateConfigService: TranslateConfigService, private translate: TranslateService,
    private weatherService: WeatherService, private alert: AlertController) {

    this.translateConfigService.getDefaultLanguage();
  }

  ngOnInit() {
  }

  async getWeather(latitud: string, longitud: string) {
    if (latitud == "" || longitud == "") {
      this.presentAlert(this.translate.instant('WEATHER_PAGE.ERROR_TITLE'), this.translate.instant('WEATHER_PAGE.ERROR_MESSAGE'));
      return;
    } else if (isNaN(Number(latitud)) || isNaN(Number(longitud))) {
      this.presentAlert(this.translate.instant('WEATHER_PAGE.ERROR_TITLE'), this.translate.instant('WEATHER_PAGE.ERROR_MESSAGE'));
      return;
    }
    this.weatherService.getWeather(latitud, longitud).subscribe((data) => {
      this.forecast = data;
    },
      error => {
        this.presentAlert(this.translate.instant('WEATHER_PAGE.ERROR_FETCH'), this.translate.instant('WEATHER_PAGE.ERROR_FETCH_MESSAGE'));
      }
    );
  }

  async presentAlert(title: string, msg: string) {
    const alert = await this.alert.create({
      header: title,
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }

}
