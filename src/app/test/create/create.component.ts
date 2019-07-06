import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  
  constructor() { }

  ngOnInit() {
  }

}
