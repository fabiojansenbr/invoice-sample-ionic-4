import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'developers',
    pathMatch: 'full'
  },
  // {
  //   path: 'home',
  //   loadChildren: './home/home.module#HomePageModule'
  // },
  // {
  //   path: 'list',
  //   loadChildren: './list/list.module#ListPageModule'
  // },

  // { path: 'invoices', loadChildren: './invoices/invoices.module#InvoicesPageModule' },
  // { path: 'customers', loadChildren: './customers/customers.module#CustomersPageModule' },
  // { path: 'items/:id', loadChildren: './items/items.module#ItemsPageModule' },
  // { path: 'products', loadChildren: './products/products.module#ProductsPageModule' },
  // { path: 'crud', loadChildren: './crud/crud.module#CRUDPageModule' },
  // { path: 'customer-detail', loadChildren: './customer-detail/customer-detail.module#CustomerDetailPageModule' },
  // { path: 'add-customer', loadChildren: './add-customer/add-customer.module#AddCustomerPageModule' },

  { path: 'developers', loadChildren: './developers/developers.module#DevelopersPageModule' },
  { path: 'developers/:id', loadChildren: './developer/developer.module#DeveloperPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
