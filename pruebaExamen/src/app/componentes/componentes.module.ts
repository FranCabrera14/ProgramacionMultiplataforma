import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
//importar el comoponente paint
import { PaintComponent } from './paint/paint.component';


//y exportarlo aquí
@NgModule({
  declarations: [PaintComponent],
  imports: [
    CommonModule
  ],
  exports: [PaintComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentesModule { }
