import { Component, Input, OnInit } from '@angular/core';
import { Forecast } from 'src/app/model/forecast';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from 'src/app/services/translate-config.service';

@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.scss'],
  standalone: false
})
export class PaintComponent implements OnInit {

  @Input('forecast') forecast: Forecast = {} as Forecast;

  constructor(private translate: TranslateConfigService) { }

  ngOnInit() { }

  getIcon() {
    return "https://openweathermap.org/img/w/" + this.forecast?.weather![0].icon + ".png";
  }

}
