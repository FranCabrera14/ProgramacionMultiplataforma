import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
//importar el comoponente hijo (en este caso paint)
import { PaintComponent } from './paint/paint.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
//tienes que importar esta clase en el time.module


@NgModule({
  declarations: [PaintComponent],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
  ],
  exports: [PaintComponent]
})
export class ComponentesModule { }
