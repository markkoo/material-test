import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-small',
  templateUrl: './small.component.html',
  styleUrls: ['./small.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SmallComponent implements OnInit {
  myControl = new FormControl();
  email = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit() {
  }

}
