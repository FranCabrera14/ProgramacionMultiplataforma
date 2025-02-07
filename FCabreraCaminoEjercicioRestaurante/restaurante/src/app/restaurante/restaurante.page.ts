import { Component, OnInit } from '@angular/core';
import { Restaurante } from './restaurante.model';
import { RestauranteService } from './restaurante.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.page.html',
  styleUrls: ['./restaurante.page.scss'],
})
export class RestaurantePage implements OnInit {
titulo: string = "Restaurantes de Guarromán, Jaén"

public restaurante : Restaurante[] = [];
  constructor(private restauranteService : RestauranteService, private _router: Router) { }

  ngOnInit() {
    this.restaurante=this.restauranteService.getRestaurantes();
  }

}
