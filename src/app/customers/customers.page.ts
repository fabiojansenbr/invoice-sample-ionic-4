import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { ModalController } from '@ionic/angular'
import { CustomerDetailPage } from '../customer-detail/customer-detail.page';
import { AddCustomerPage } from '../add-customer/add-customer.page';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  public customers: any[] = [];

  constructor(private customerService: CustomerService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.customerService.createPouchDB()

    this.customerService.getAllCustomers().then(customer => {
      this.customers = [customer];
    }).catch((err) => console.log('ERROR: ',err))
  }

  async showDetails(customer) {
    const modal = await this.modalCtrl.create({
      component: CustomerDetailPage, 
      componentProps: {'customer': customer}
    });

    modal.onDidDismiss().then((data) => {
      if(data !== null) {
        console.log('Modal Returned Data: ', data)
        this.customerService.getAllCustomers().then(data => {
          this.customers = [data];
        }).catch((err) => console.log('ERROR: ',err))
      }
    });
    return await modal.present()
  }


  async addCustomer() {
    console.log("button clicked")
    const modal = await this.modalCtrl.create({
      component: AddCustomerPage
    });

    modal.onDidDismiss().then((data) => {
      if(data !== null) {
        console.log('Modal Returned Data: ', data)
        this.customerService.getAllCustomers().then(data => {
          this.customers = [data];
        }).catch((err) => console.log('ERROR: ',err))
      }
    });
    return await modal.present()
  }

}
