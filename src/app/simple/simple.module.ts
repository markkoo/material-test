import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleRoutingModule } from './simple-routing.module';
import { SimpleComponent } from './simple.component';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
  declarations: [SimpleComponent],
  imports: [
    CommonModule,
    SimpleRoutingModule,
    MaterialModule,
    A11yModule
  ]
})
export class SimpleModule { }
