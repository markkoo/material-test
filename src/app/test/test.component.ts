import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export interface PeriodicElement {
  partNumber: string;
  description: string;
  UOM: string;
  unitPrice: number;
  qty: number;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { partNumber: '10+20+30ABC', description: 'ABC BCA', UOM: 'PC', unitPrice: 10.80, qty: 6, status: 'waiting for soucing' },
  { partNumber: '10+20+30ABC', description: 'ABC BCA', UOM: 'PC', unitPrice: 10.80, qty: 6, status: 'waiting for processing' },
  { partNumber: '10+20+30ABC', description: 'ABC BCA', UOM: 'PC', unitPrice: 10.80, qty: 6, status: 'waiting for soucing' },
  { partNumber: '10+20+30ABC', description: 'ABC BCA', UOM: 'PC', unitPrice: 10.80, qty: 6, status: 'waiting for processing' },
  { partNumber: '10+20+30ABC', description: 'ABC BCA', UOM: 'PC', unitPrice: 10.80, qty: 6, status: 'waiting for soucing' },
  { partNumber: '10+20+30ABC', description: 'ABC BCA', UOM: 'PC', unitPrice: 10.80, qty: 6, status: 'waiting for processing' },
  { partNumber: '10+20+30ABC', description: 'ABC BCA', UOM: 'PC', unitPrice: 10.80, qty: 6, status: 'waiting for soucing' },
  { partNumber: '10+20+30ABC', description: 'ABC BCA', UOM: 'PC', unitPrice: 10.80, qty: 6, status: 'waiting for processing' },
  { partNumber: '10+20+30ABC', description: 'ABC BCA', UOM: 'PC', unitPrice: 10.80, qty: 6, status: 'waiting for soucing' },
  { partNumber: '10+20+30ABC', description: 'ABC BCA', UOM: 'PC', unitPrice: 10.80, qty: 6, status: 'waiting for processing' },
  { partNumber: '10+20+30ABC', description: 'ABC BCA', UOM: 'PC', unitPrice: 10.80, qty: 6, status: 'waiting for soucing' },
  { partNumber: '10+20+30ABC', description: 'ABC BCA', UOM: 'PC', unitPrice: 10.80, qty: 6, status: 'waiting for processing' },
  { partNumber: '10+20+30ABC', description: 'ABC BCA', UOM: 'PC', unitPrice: 10.80, qty: 6, status: 'waiting for soucing' },
  { partNumber: '10+20+30ABC', description: 'ABC BCA', UOM: 'PC', unitPrice: 10.80, qty: 6, status: 'waiting for processing' },
  { partNumber: '10+20+30ABC', description: 'ABC BCA', UOM: 'PC', unitPrice: 10.80, qty: 6, status: 'waiting for soucing' },
  { partNumber: '10+20+30ABC', description: 'ABC BCA', UOM: 'PC', unitPrice: 10.80, qty: 6, status: 'waiting for processing' },
];

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  displayedColumns: string[] = ['sort', 'index', 'partNumber', 'description', 'UOM', 'unitPrice', 'qty', 'subtotal', 'status', 'remove'];
  dataSource = ELEMENT_DATA;

  constructor() { }



  ngOnInit() {
    const a = new BehaviorSubject([]);
    a.subscribe(v => {
      console.log(v);
    });
    a.next(['asd']);
  }

}
