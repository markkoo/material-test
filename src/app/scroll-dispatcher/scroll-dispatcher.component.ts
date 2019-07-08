import { Component, OnInit } from '@angular/core';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-scroll-dispatcher',
  templateUrl: './scroll-dispatcher.component.html',
  styleUrls: ['./scroll-dispatcher.component.css']
})
export class ScrollDispatcherComponent implements OnInit {

  constructor(
    private scrollDispatcher: ScrollDispatcher,
    //private asd: CdkScrollable
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
