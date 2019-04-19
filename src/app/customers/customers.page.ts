import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { ModalController } from '@ionic/angular'
import { CustomerDetailPage } from '../customer-detail/customer-detail.page';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  public customers: [] = [];

  constructor(private customerService: CustomerService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.customerService.createPouchDB()

    this.customerService.getAllCustomers().then(customers => {
      this.customers = customers;
    }).catch((err) => console.log('ERROR: ',err))
  }

  async showDetails(customer) {
    const modal = await this.modalCtrl.create({
      component: CustomerDetailPage, 
      componentProps: {'customer': customer}
    });

    modal.onDidDismiss().then((returnedValue) => {
      if(returnedValue !== null) {
        console.log('Modal Returned Data: ', returnedValue)
      }
    });
    return await modal.present()
  }

}
