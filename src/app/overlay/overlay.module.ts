import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverlayRoutingModule } from './overlay-routing.module';
import { OverlayComponent } from './overlay.component';
import { RotiniPanelComponent } from './rotini-panel/rotini-panel.component';
import { OverlayModule as NgOverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [OverlayComponent, RotiniPanelComponent],
  imports: [
    CommonModule,
    OverlayRoutingModule,
    MaterialModule,
    NgOverlayModule,
    PortalModule
  ],
  entryComponents: [
    RotiniPanelComponent
  ]
})
export class OverlayModule { }
