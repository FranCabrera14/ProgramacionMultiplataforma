import { Injectable } from '@angular/core';
import { Restaurante } from './restaurante.model';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {
  private restaurantes: Restaurante[] = [
    {
      id: '1',
      logotipo: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZtzBPl5Guny5O5alc9jZhoVWI5PqH95ao9C1gTw8VW4ouIKLy7Ul2vtP8ekPJ7W0FD74xuD7iUFE-3nXoPls4PQiDiCM4ZeCjqMyH-oCwXu20h_spgCswCeUSjMrVqWSQJRAGH0TZ6KcH/w1200-h630-p-k-no-nu/Bar_Casa_Paco.jpg',
      nombre: 'Bar casa Paco',
      numTenedores: 2,
      comentarios: ['Comida reseca y congelada, malisima', 'WENO BONITO Y BARATO QUE MAS QUIERES?', 'El dueño de este bar es un usurero']

    },
    {
      id: '2',
      logotipo: 'https://www.lastinajas.org/wp-content/uploads/2019/03/IMG_20180906_174647-scaled.jpg',
      nombre: 'Las tinajas',
      numTenedores: 1,
      comentarios: ['Comida reseca y congelada, malisima', 'WENO BONITO Y BARATO QUE MAS QUIERES?', 'El dueño de este bar es un usurero']
    },
    {
      id: '3',
      logotipo: 'https://www.cervezascoleccion.com/wp-content/uploads/2020/02/CENTRO-ALFONSOGUARROMAN.-JAEN-31-3-scaled.jpg',
      nombre: 'Café bar Centro Alfonso',
      numTenedores: 2,
      comentarios: ['Comida reseca y congelada, malisima', 'WENO BONITO Y BARATO QUE MAS QUIERES?', 'El dueño de este bar es un usurero']
    },
    {
      id: '4',
      logotipo: 'https://multimedia.andalucia.org/media/30C5694873514DF5BFE17164EAF1B940/img/928594B00AC24B70844DFD061A66F8C5/1704983758421309436619_216222147415419_7636359989350525378_n3949354784734932172.jpg?responsive',
      nombre: 'Restaurante hotel yuma',
      numTenedores: 3,
      comentarios: ['Vendo Opel Corsa', 'nah increible la comida la verdad 10/10 chat', 'Hola']
    }
  ]

  constructor() { }
  /**
   * getRestaurantes: devuelve un listado de restaurantes
   * @returns  array de objetos de restaurantes
   */
  getRestaurantes() {
    return [...this.restaurantes]
  }
  getRestaurante(restauranteId?: string) :Restaurante {
    return {
      ...this.restaurantes.find (
        restaurante => {
          return restaurante.id===restauranteId
        }
      )
    }
  }
}
