import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Speech2textComponent} from './speech2text/speech2text.component';

const routes: Routes = [
  {
    path: '',
    component: Speech2textComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
