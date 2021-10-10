import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Speech2textComponent} from './speech2text.component';
import {MaterialModule} from '../shared/material/material.module';



@NgModule({
  declarations: [
    Speech2textComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class Speech2textModule {
}
