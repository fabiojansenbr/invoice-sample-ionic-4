import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CRUDItem } from '../data_models/crud-item';
import { ITEMS_KEY } from '../data_models/crud-item';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {
  constructor(private storage: Storage) { }
 
  // CREATE
  addItem(item: CRUDItem): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: CRUDItem[]) => {
      if (items) {
        items.push(item);
        return this.storage.set(ITEMS_KEY, items);
      } else {
        return this.storage.set(ITEMS_KEY, [item]);
      }
    });
  }
 
  // READ
  getItems(): Promise<CRUDItem[]> {
    return this.storage.get(ITEMS_KEY);
  }
 
  // UPDATE
  updateItem(item: CRUDItem): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: CRUDItem[]) => {
      if (!items || items.length === 0) {
        return null;
      }
 
      let newItems: CRUDItem[] = [];
 
      for (let i of items) {
        if (i.id === item.id) {
          newItems.push(item);
        } else {
          newItems.push(i);
        }
      }
 
      return this.storage.set(ITEMS_KEY, newItems);
    });
  }
 
  // DELETE
  deleteItem(id: number): Promise<CRUDItem> {
    return this.storage.get(ITEMS_KEY).then((items: CRUDItem[]) => {
      if (!items || items.length === 0) {
        return null;
      }
 
      let toKeep: CRUDItem[] = [];
 
      for (let i of items) {
        if (i.id !== id) {
          toKeep.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    });
  }
}
