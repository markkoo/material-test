import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmallRoutingModule } from './small-routing.module';
import { SmallComponent } from './small.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [SmallComponent],
  imports: [
    CommonModule,
    SmallRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SmallModule { }
