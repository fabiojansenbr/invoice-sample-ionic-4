import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NgForm } from "@angular/forms"

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.page.html',
  styleUrls: ['./add-customer.page.scss'],
})
export class AddCustomerPage implements OnInit {

  customer: any = {}
  // firstName: string = "";
  // lastName: string = "";

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  addCustomer(customerForm) {
    this.customer.firstName = customerForm.value.firstName;
    this.customer.lastName = customerForm.value.lastName;
    console.log('Entered Info: ',this.customer)

    this.modalCtrl.dismiss(this.customer);
  }
}
