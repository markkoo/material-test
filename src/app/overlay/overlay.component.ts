import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ComponentPortal, TemplatePortalDirective, TemplatePortal } from '@angular/cdk/portal';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { RotiniPanelComponent } from './rotini-panel/rotini-panel.component';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent implements OnInit {

  @ViewChild('origin', { static: true }) originElem: ElementRef;
  @ViewChild('template', { static: true }) template: TemplatePortal;

  // @ViewChild('tortelliniTemplate', { static: true }) tortelliniTemplate: TemplatePortalDirective;

  constructor(
    public overlay: Overlay
  ) { }

  click() {
    const config = new OverlayConfig();

    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(this.originElem)
      // .withFlexibleDimensions(false)
      .withPositions([
        {
          originX: 'end',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'bottom'
        },
        {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top',
        },
        {
          originX: 'start',
          originY: 'top',
          overlayX: 'end',
          overlayY: 'bottom'
        },
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'end',
          overlayY: 'top'
        }
      ])
      .withPush(false);

    const scrollStrategy = this.overlay.scrollStrategies.reposition();

    config.minWidth = '300px';
    config.width = '300px';
    config.minHeight = '16px';
    config.positionStrategy = positionStrategy;
    config.scrollStrategy = scrollStrategy;
    config.hasBackdrop = false;
    config.backdropClass = 'transparent-backdrop';

    const overlayRef = this.overlay.create(config);
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });
    // const userProfilePortal = new ComponentPortal(RotiniPanelComponent);
    overlayRef.attach(this.template);
  }

  ngOnInit() {
  }

}
