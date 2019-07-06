import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestComponent } from './test.component';
import { MaterialModule } from '../material/material.module';
import { TestRoutingModule } from './test-routing.module';

@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TestRoutingModule
  ]
})
export class TestModule { }
