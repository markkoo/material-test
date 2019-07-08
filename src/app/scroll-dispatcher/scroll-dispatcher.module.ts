import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollDispatcherRoutingModule } from './scroll-dispatcher-routing.module';
import { ScrollDispatcherComponent } from './scroll-dispatcher.component'; 

@NgModule({
  declarations: [ScrollDispatcherComponent],
  imports: [
    CommonModule,
    ScrollDispatcherRoutingModule
  ]
})
export class ScrollDispatcherModule { }
