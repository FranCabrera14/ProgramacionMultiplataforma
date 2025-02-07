import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../restaurante/restaurante.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RestauranteService } from '../restaurante/restaurante.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restaurante-detail',
  templateUrl: './restaurante-detail.page.html',
  styleUrls: ['./restaurante-detail.page.scss'],
})
export class RestauranteDetailPage implements OnInit {
//Aquí defiminimos la variable mirestaurante que tendrá el restaurante que el usuario ha elegido
mirestaurante: Restaurante = {id: '', nombre: '', comentarios: []}
texto_sincomentarios: string = "No hay comentarios..."

  constructor(private _activatedRoute: ActivatedRoute,
    private _restauranteService: RestauranteService,
    private _router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get('restauranteId');
      this.mirestaurante = this._restauranteService.getRestaurante(recipeId!);
      this.texto_sincomentarios;
    })
  }

}
