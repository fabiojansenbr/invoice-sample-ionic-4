import { Injectable } from '@angular/core';

import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Dev } from '../data_models/dev';
import { DevelopersPage } from '../developers/developers.page';
// import { Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private database: SQLiteObject;   // To Make connection with database  
  private databaseReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  developers = new BehaviorSubject([]);
  products = new BehaviorSubject([]);

  constructor(
    public sqlitePorter: SQLitePorter,
    private storage: Storage,
    private sqlite: SQLite,
    private platform: Platform,
    public http: Http,
    public httpClient: HttpClient
  ) { 
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'developers.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        this.loadDatabase();
      })
    })
  }

  loadDatabase() {
    this.httpClient.get('assets/DATABASE.sql', {responseType: 'text'})
      .subscribe(sql => {
        this.sqlitePorter.importSqlToDb(this.database, sql)
          .then(_ => {
            this.loadDevelopers();
            this.loadProducts();
            this.databaseReady.next(true);
          })
          .catch(e => console.log(e));
      })
  }

  getDatabaseState() {
    return this.databaseReady.asObservable();
  }

  getDevs(): Observable<Dev[]> {
    return this.developers.asObservable();
  }

  getProducts(): Observable<any[]> {
    return this.products.asObservable();
  }

  loadDevelopers() {
    return this.database.executeSql('SELECT * FROM developer', [])
            .then(data => {
              let developers: Dev[] = [];

              if(data.rows.length>0) {
                for(var i=0; i<data.rows.length; i++) {
                  let skills = [];
                  if(data.rows.item(i).skills != '') {
                    skills = JSON.parse(data.rows.item(i).skills);
                  }

                  developers.push({
                    id: data.rows.item(i).id,
                    name: data.rows.item(i).name,
                    skills: skills,
                    img: data.rows.item(i).img
                  });
                }
              }
              this.developers.next(developers);
            });
  }

  addDeveloper(name, skills, img) {
    let data = [name, JSON.stringify(skills), img];
    return this.database.executeSql('INSERT INTO developer (name, skills, img) VALUES (?, ?, ?)', data)
      .then(data => {
        this.loadDevelopers();
      });
  }

  getDeveloper(id): Promise<Dev> {
    return this.database.executeSql('SELECT * FROM developer WHERE id = ?', [id])
      .then(data => {
        let skills = [];
        if(data.rows.item(0).skills != '') {
          skills =  JSON.parse(data.rows.item(0).skills);
        }

        return {
          id: data.rows.item(0).id,
          name: data.rows.item(0).name,
          skills: skills,
          img: data.rows.item(0).img
        }
      });
  }

  deleteDeveloper(id) {
    return this.database.executeSql('DELETE FROM developer WHERE id = ?', [id])
      .then(_ => {
        this.loadDevelopers();
        this.loadProducts();
      })
  }

  updateDeveloper(dev: Dev) {
    let data = [dev.name, JSON.stringify(dev.skills), dev.img];
    return this.database.executeSql(`UPDATE developer SET name = ?, skills = ?, img = ? WHERE id = ${dev.id}`, data)
      .then(data => {
        this.loadDevelopers();
      });
  }

}



// this.databaseReady = new BehaviorSubject(false);
// this.platform.ready().then(() => {
//   this.sqlite.create({
//     name: 'products.db',
//     location: 'default'
//   })
//   .then((db: SQLiteObject) => {
//     this.database = db;
//     this.storage.get('database filled').then(val => {
//       if(val) {
//         this.databaseReady.next(true)
//       } else {
//         this.fillDatabase();
//       }
//     })
//   });
// });
// }

// fillDatabase() {
// this.http.get('assets/productList.sql')
// .map(res => res.text())
// .subscribe(sql => {
//   this.sqlitePorter.importSqlToDb(this.database, sql)
//   .then(data => {
//     this.databaseReady.next(true)
//     this.storage.set('database_filled', true)
//   })
//   .catch(e => console.error(e))
// })
// }

// addproducts(id, product_name, price, tax) {
// let product_information = [id, product_name, price, tax]
// return this.database.executeSql('INSERT INTO product_list (product_name, price, tax) VALUES (?, ?, ?, ?)', product_information)
// .then(res => {return res})
// .catch(error => {console.log('Error: ', error);});
// }

// getAllProducts() {
// return this.database.executeSql('SELECT * FROM product_list', [])
// .then((data) => {
//   let products = [];
//     if(data.rows.length > 0) {
//       for(var i=0; i<data.rows.length; i++) {
//         products.push({
//           id: data.rows.item(i).id, 
//           product_name: data.rows.item(i).product_name, 
//           price: data.rows.item(i).price, 
//           tax: data.rows.item(i).tax
//         })
//       }
//     }
//   return products;
// }, error => {
//   console.log('Error: ', error); 
//   return [];
// })
// }

// updateProduct() {

// }

// deleteProduct() {

// }

// getDatabaseState() {
// return this.databaseReady.asObservable();
// }