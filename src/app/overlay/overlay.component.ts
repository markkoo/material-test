import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ComponentPortal, TemplatePortalDirective, TemplatePortal } from '@angular/cdk/portal';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { RotiniPanelComponent } from './rotini-panel/rotini-panel.component';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {

  @ViewChild('origin', { static: true }) originElem: ElementRef;
  @ViewChild('template', { static: true }) template: TemplatePortal;

  // @ViewChild('tortelliniTemplate', { static: true }) tortelliniTemplate: TemplatePortalDirective;

  constructor(
    public overlay: Overlay,
  ) { }

  click() {
    const config = new OverlayConfig();

    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(this.originElem)
      .withPositions([
        {
          originX: 'center',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'bottom'
        },
        {
          originX: 'center',
          originY: 'bottom',
          overlayX: 'center',
          overlayY: 'top',
        }
      ])
      .withPush(true);

    const scrollStrategy = this.overlay.scrollStrategies.reposition();

    config.width = '200px';
    config.height = '200px';
    config.positionStrategy = positionStrategy;
    config.scrollStrategy = scrollStrategy;
    config.hasBackdrop = true;
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