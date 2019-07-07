import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmallComponent } from './small.component';

const routes: Routes = [
  {
    path: '',
    component: SmallComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmallRoutingModule { }
