import { ChipAutocompleteComponent } from './chip-autocomplete/chip-autocomplete.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverlayComponent } from './overlay/overlay.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'overlay' },
  {
    path: 'chip-autocomplete',
    component: ChipAutocompleteComponent
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then(mod => mod.TestModule)
  },
  {
    path: 'overlay',
    // loadChildren: () => import('./overlay/overlay.module').then(mod => mod.OverlayModule)
    component: OverlayComponent
  },
  {
    path: 'small',
    loadChildren: () => import('./small/small.module').then(mod => mod.SmallModule)
  },
  {
    path: 'simple',
    loadChildren: () => import('./simple/simple.module').then(mod => mod.SimpleModule)
  },
  {
    path: 'scroll-dispatcher',
    loadChildren: () => import('./scroll-dispatcher/scroll-dispatcher.module').then(mod => mod.ScrollDispatcherModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
