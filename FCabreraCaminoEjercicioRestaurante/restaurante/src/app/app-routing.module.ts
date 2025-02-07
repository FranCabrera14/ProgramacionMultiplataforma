import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'restaurante',
    children: [
      {
        path: "",
        loadChildren: () => import('./restaurante/restaurante.module').then(m => m.RestaurantePageModule)
      },
      {
        path: ':restauranteId',
        loadChildren: () => import ('./restaurante-detail/restaurante-detail.module').then(m => m.RestauranteDetailPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
