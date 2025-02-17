import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeserviceService {
  //variables declaradas, una con la direccion y otra con la key
  private url_service: string = "https://api.openweathermap.org/data/2.5/weather?units=metric"
  private api_key: string = "774396eca2c42b768d4825df06754bc1"
  //importante el http client
  //importar el httpclient Module tambien el app.module
  constructor(private http: HttpClient) { }
  /**
   * get_time: Consigue el tiempo de la api de weatherobserved
   * @param lat   parámetro con la latitud de la ubicación para traer el tiempo
   * @param lon   parámetro con la longitud de la ubicación para traer el tiempo
   */
  //Cuando un método hace una petición HTTP (GET, POST, etc.), no obtiene la respuesta de inmediato. 
  // En su lugar, devuelve un Observable<any>
  //  que emite los datos cuando la respuesta está lista.
  get_weather(latitud: string, longitud:string):Observable<any>{
    //Montamos la dirección de la url del servicio completo con los parámetros de entrada:
    //por favor ten cuidado con la nomenclatura de lo que hay en "&lon=" LONGITUD PEDAZO DE SUBNORMAL APRENDE A ESCRIBIR
    return this.http.get(this.url_service + "&lat=" + latitud + "&lon=" + longitud + "&appid=" + this.api_key)
  }
}
