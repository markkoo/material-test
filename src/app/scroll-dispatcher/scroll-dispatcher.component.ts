import { Component, OnInit, ElementRef } from '@angular/core';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-scroll-dispatcher',
  templateUrl: './scroll-dispatcher.component.html',
  styleUrls: ['./scroll-dispatcher.component.scss'],
})
export class ScrollDispatcherComponent implements OnInit {

  constructor(
    private scrollDispatcher: ScrollDispatcher,
  ) { }

  ngOnInit() {
    // this.scrollDispatcher.ancestorScrolled(this.asd.getElementRef()).subscribe((v) => {
    //   console.log(v);
    // });

    this.scrollDispatcher.scrolled(0).subscribe((v) => {
      console.log(v);
    });
  }
}
