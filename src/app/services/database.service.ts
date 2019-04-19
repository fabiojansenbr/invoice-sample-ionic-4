import { Injectable } from '@angular/core';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// import { Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  database: SQLiteObject;   // To Make connection with database  
  private databaseReady: BehaviorSubject<boolean>;

  constructor(
    public sqlitePorter: SQLitePorter,
    private storage: Storage,
    private sqlite: SQLite,
    private platform: Platform,
    public http: Http
  ) { 
    this.databaseReady = new BehaviorSubject(false);
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'products.db',
        location: 'default'
      }).then()
      .then((db: SQLiteObject) => {
        this.database = db;
        this.storage.get('database filled').then(val => {
          if(val) {
            this.databaseReady.next(true)
          } else {
            this.fillDatabase();
          }
        })
      });
    });
  }

  fillDatabase() {
    this.http.get('assets/productList.sql')
    .map(res => res.text())
    .subscribe(sql => {
      this.sqlitePorter.importSqlToDb(this.database, sql)
      .then(data => {
        this.databaseReady.next(true)
        this.storage.set('database_filled', true)
      })
      .catch(e => console.error(e))
    })
  }

  addproducts(id, product_name, price, tax) {
    let product_information = [id, product_name, price, tax]
    return this.database.executeSql('INSERT INTO product_list (product_name, price, tax) VALUES (?, ?, ?, ?)', product_information)
    .then(res => {return res})
    .catch(error => {console.log('Error: ', error);});
  }

  getAllProducts() {
    return this.database.executeSql('SELECT * FROM product_list', [])
    .then((data) => {
      let products = [];
        if(data.rows.length > 0) {
          for(var i=0; i<data.rows.length; i++) {
            products.push({
              id: data.rows.item(i).id, 
              product_name: data.rows.item(i).product_name, 
              price: data.rows.item(i).price, 
              tax: data.rows.item(i).tax
            })
          }
        }
      return products;
    }, error => {
      console.log('Error: ', error); 
      return [];
    })
  }
  
  updateProduct() {

  }

  deleteProduct() {
    
  }

  getDatabaseState() {
    return this.databaseReady.asObservable();
  }

}
