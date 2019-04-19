import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { InvoiceList } from '../data_models/invoice-list'

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.page.html',
  styleUrls: ['./invoices.page.scss'],
})
export class InvoicesPage implements OnInit {

  invoiceLists: InvoiceList[];
  constructor () { 
    this.invoiceLists = [
      {
        id: 12,
        customer_id: 3334,
        generated_at: Date()
      },
      {
        id: 13,
        customer_id: 3546345,
        generated_at: Date()
      },
      {
        id: 14,
        customer_id: 36785985,
        generated_at: Date.now()
      }
    ]
  }

  ngOnInit() {
  }
}
