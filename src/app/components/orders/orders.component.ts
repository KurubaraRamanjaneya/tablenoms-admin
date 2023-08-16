import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  constructor() {}

  orderList = [
    {
      tableNo: 1,
      items: ['Mudde', 'Mutton Saaru', 'Mutton Palav', 'Lemon chicken'],
    },
    {
      tableNo: 10,
      items: ['Mudde', 'Mutton Saaru'],
    },
    {
      tableNo: 3,
      items: ['Mutton Palav'],
    },
    {
      tableNo: 9,
      items: ['Lemon chicken'],
    },
    
  ];
  ngOnInit(): void {}
}
