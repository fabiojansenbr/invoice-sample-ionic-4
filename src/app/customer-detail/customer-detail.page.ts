import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.page.html',
  styleUrls: ['./customer-detail.page.scss'],
})
export class CustomerDetailPage implements OnInit {

  customer: any = {};
  canDelete = false;
  canUpdate = false;

  constructor(public modalCtrl: ModalController, public navParams: NavParams, private custService: CustomerService) { }

  ngOnInit() {
    var sentValueFromCustomersPage = this.navParams.get('customer');
    if(sentValueFromCustomersPage) {
      this.customer = sentValueFromCustomersPage;
      this.canDelete = true;
      this.canUpdate = true;
    }
  }

  addOrUpdate() {
    if(this.canUpdate) {
      this.custService.updateCustomer(this.customer).catch(err => console.log('Error in Updating Customer: ',err))
    } else {
      this.custService.createCustomer(this.customer).catch(err => console.log('Error in Creating Customer: ',err))
    }

    this.modalCtrl.dismiss(this.customer);
  }

  delete() {
    this.custService.deleteCustomer(this.customer).catch(err => console.log('Error in Deleting Customer',err))

    this.modalCtrl.dismiss(this.customer);
  }

}
