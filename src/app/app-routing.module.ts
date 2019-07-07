import { ChipAutocompleteComponent } from './chip-autocomplete/chip-autocomplete.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'small' },
  {
    path : 'chip-autocomplete',
    component : ChipAutocompleteComponent
  },
  {
    path : 'test',
    loadChildren: () => import('./test/test.module').then(mod => mod.TestModule)
  },
  {
    path : 'overlay',
    loadChildren: () => import('./overlay/overlay.module').then(mod => mod.OverlayModule)
  },
  {
    path : 'small',
    loadChildren: () => import('./small/small.module').then(mod => mod.SmallModule)
  },
  {
    path : 'simple',
    loadChildren: () => import('./simple/simple.module').then(mod => mod.SimpleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
