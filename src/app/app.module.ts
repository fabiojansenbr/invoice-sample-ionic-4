import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpModule } from '@angular/http';

import { DatabaseService } from './services/database.service';
import { CRUDService } from './services/crud.service';
import { CustomerService } from './services/customer.service';

import { IonicStorageModule } from "@ionic/storage";
import { SQLite } from "@ionic-native/sqlite/ngx";
import { SQLitePorter } from "@ionic-native/sqlite-porter/ngx";

import { CustomerDetailPageModule } from './customer-detail/customer-detail.module';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    CustomerDetailPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SQLite,
    SQLitePorter,
    // Storage
    DatabaseService,
    CRUDService,
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
