import { NgModule } from '@angular/core';
import { TestComponent } from './test.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TestComponent,
    children: [
      {
        path: 'create',
        loadChildren: () => import('./create/create.module').then(mod => mod.CreateModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
