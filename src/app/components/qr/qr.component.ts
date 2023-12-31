import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss']
})
export class QrComponent implements OnInit {

  constructor() { }

  qrData: string = '';
  numberOfTables: number = 0;
  hotelName: string = "Gowda Hotel";
  tableQrs: string[] = [];

  ngOnInit(): void {
    
  }

  generate(): void {
    this.tableQrs = [];
    for(let i=1; i <= this.numberOfTables; i++)
    {
      this.tableQrs.push(`http://app.tablenoms.com/tabs/tab1/${this.hotelName}/${i}`)
    }
  }

}
