import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
//luego hay que importar el translatemodule en la pagina que queremos que se traduzca
@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {
  currentLang: any;
  constructor(private translate: TranslateService) { 
    this.currentLang = localStorage.getItem('lang') || 'es';
  }

   /**
   * getDefaultLanguage:  devuelve el lenguaje por defecto
   * @returns el idioma por defecto del navegador o de un dispositivo móvil
   */
 getDefaultLanguage(){
  if (this.currentLang) {
   this.translate.setDefaultLang(this.currentLang);
  } else {
   localStorage.setItem('lang', this.translate.getBrowserLang()!);
   this.currentLang = this.translate.getBrowserLang();
   this.translate.setDefaultLang(this.currentLang);
  }
  return this.currentLang;

}
setLanguage(setLang: string) {
  this.translate.use(setLang);
  localStorage.setItem('lang', setLang);
}
 /**
   * getCurrentLang: Devuelve el idioma actual almacenado en la caché local
   * @returns Devuelve el idioma actual
   */
 getCurrentLang() {
  return localStorage.getItem('lang');
 }
 //no te olvides que tienes que importar el translate module en el time.module y el componentes module
 //luego en el time.ts y paint.ts importar el translateservice y translate configservice
}