import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollDispatcherRoutingModule } from './scroll-dispatcher-routing.module';
import { ScrollDispatcherComponent } from './scroll-dispatcher.component'; 
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [ScrollDispatcherComponent],
  imports: [
    CommonModule,
    ScrollDispatcherRoutingModule,
    ScrollingModule
  ]
})
export class ScrollDispatcherModule { }
