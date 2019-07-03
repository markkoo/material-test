import { ChipAutocompleteComponent } from './chip-autocomplete/chip-autocomplete.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'test' },
  {
    path : 'chip-autocomplete',
    component : ChipAutocompleteComponent
  },
  {
    path : 'test',
    component : TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
