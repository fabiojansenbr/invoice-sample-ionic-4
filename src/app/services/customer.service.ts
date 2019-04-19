import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as PouchDB from 'pouchdb';
import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public pdb;
  public customers;

  constructor() { }

  createPouchDB() {
    PouchDB.plugin(cordovaSqlitePlugin);
    this.pdb = new PouchDB('customers.db', {adapter: 'cordova-sqlite'})   // initialize the PouchDB database by setting the adapter to cordova-sqlite which instructs PouchDB to use SQLite for storage instead of browser's storage.
  }

  createCustomer(customer) {
    return this.pdb.post(customer);
  }

  updateCustomer(customer) {
    return this.pdb.put(customer);
  }
  
  deleteCustomer(customer) {
    return this.pdb.delete(customer);
  }

  getAllCustomers() {
    function allDocs() {
      this.pdb.allDocs({include_docs: true})
      .then(docs => {
        this.customers = docs.rows.map(row => {
          row.doc.Date = new Date(row.doc.Date)
          return row.doc
        });
      });
      return this.customers
    }
    this.pdb.changes({live: true, since: 'now', include_docs: true})
    .on('change', () => {
      allDocs().then((cust) => {
      this.customers = cust
      });
    });
    return allDocs();
  }
}
