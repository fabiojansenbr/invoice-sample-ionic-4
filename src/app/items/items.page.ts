import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ItemData } from '../data_models/item-data';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  invoice_ID = null;
  items: ItemData[];
  total: number = 0;
  constructor(private activatedRoute: ActivatedRoute) { 
  }

  ngOnInit() {
    this.invoice_ID = this.activatedRoute.snapshot.paramMap.get('id');
    this.items = [
      {
        i_Product: 'asdfs',
        i_Product_ID: 45642,
        i_Quantity: 10,
        i_Latest_price: 500,
        i_Updated_tax: 100,
        i_Amount: 600,
      },
      {
        i_Product: 'asdfs',
        i_Product_ID: 45642,
        i_Quantity: 10,
        i_Latest_price: 500,
        i_Updated_tax: 100,
        i_Amount: 800,
      },
      {
        i_Product: 'asdfss',
        i_Product_ID: 45642,
        i_Quantity: 10,
        i_Latest_price: 500,
        i_Updated_tax: 100,
        i_Amount: 1400,
      }
    ]
    this.sum_amount();
  }

  sum_amount() {
    this.items.forEach((data) => {
      this.total = this.total + data.i_Amount
    })
  }



}
