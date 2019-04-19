import { Component, ViewChild } from '@angular/core';
import { CRUDService } from '../services/crud.service';
import { CRUDItem } from '../data_models/crud-item';
import { Platform, ToastController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.scss'],
})
export class CRUDPage {

  items: CRUDItem[] = [];
 
  newItem: CRUDItem = <CRUDItem>{};
 
  @ViewChild('mylist')mylist: IonList;
 
  constructor(private crudService: CRUDService, private plt: Platform, private toastController: ToastController) {
    this.plt.ready().then(() => {
      this.loadItems();
    });
  }
 
  // CREATE
  addItem() {
    this.newItem.modified = Date.now();
    this.newItem.id = Date.now();
 
    this.crudService.addItem(this.newItem).then(item => {
      this.newItem = <CRUDItem>{};
      this.showToast('Item added!')
      this.loadItems(); // Or add it to the array directly
    });
  }
 
  // READ
  loadItems() {
    this.crudService.getItems().then(items => {
      this.items = items;
    });
  }
 
  // UPDATE
  updateItem(item: CRUDItem) {
    item.title = `UPDATED: ${item.title}`;
    item.modified = Date.now();
 
    this.crudService.updateItem(item).then(item => {
      this.mylist.closeSlidingItems(); // Fix or sliding is stuck afterwards
      this.showToast('Item updated!');
      this.loadItems(); // Or update it inside the array directly
    });
  }
 
  // DELETE
  deleteItem(item: CRUDItem) {
    this.crudService.deleteItem(item.id).then(item => {
      this.showToast('Item removed!');
      this.mylist.closeSlidingItems(); // Fix or sliding is stuck afterwards
      this.loadItems(); // Or splice it from the array directly
    });
  }
 
  // Helper
  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
