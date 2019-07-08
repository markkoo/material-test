import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScrollDispatcherComponent } from './scroll-dispatcher.component';

const routes: Routes = [{
  path: '',
  component: ScrollDispatcherComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrollDispatcherRoutingModule { }
