import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './pages/admin/add-customer/add-customer.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { AddSalesComponent } from './pages/admin/add-sales/add-sales.component';
import { EmiComponent } from './pages/admin/emi/emi.component';
import { GuarantorComponent } from './pages/admin/guarantor/guarantor.component';
import { InvoiceComponent } from './pages/admin/invoice/invoice.component';

import { PrintLayoutComponent } from './pages/admin/print-layout/print-layout.component';
import { ViewCustomerComponent } from './pages/admin/view-customer/view-customer.component';
import { ViewProductComponent } from './pages/admin/view-product/view-product.component';
import { ViewSalesComponent } from './pages/admin/view-sales/view-sales.component';
import { AdmindashboardComponent } from './pages/admindashboard/admindashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminGuard } from './service/admin.guard';



const routes: Routes = [

{
  path:'login',
  component:LoginComponent
},
{
  path: 'admin',
  component:AdmindashboardComponent,

  loadChildren: () =>
    import("./pages/admin/admin.module").then((m) => m.AdminModule),
    canActivate: [AdminGuard],
//  
},

{ path: 'print',
    outlet: 'print',
    component: PrintLayoutComponent,
    children: [
      { path: 'invoice', component: InvoiceComponent }
    ]
  }
// {
//   path:'admin',
//   component:AdmindashboardComponent,
//   canActivate: [AdminGuard],
//   children:[
//     {
//       path: 'home',
//       component:HomeComponent
//     },
//     {
//       path:'add-product',
//       component:AddProductComponent
//     },
//     {
//       path:'view-product',
//       component:ViewProductComponent
//     },
//     {
//       path:'add-customer',
//       component:AddCustomerComponent
//     },
//     {
//       path:'view-customer',
//       component:ViewCustomerComponent
//     },
//     {
//       path:'add-sale',
//       component:AddSalesComponent
//     },
//     {
//       path:'view-sales',
//       component:ViewSalesComponent
//     },
//     {
//       path:'emi',
//       component:EmiComponent
//     },
//     {
//       path:'ledger',
//       component:LedgersComponent
//     },
//     {
//       path:'guarantor',
//       component:GuarantorComponent
//     }
//   ]
// }

];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules,
    //   onSameUrlNavigation: 'reload' })
    RouterModule.forRoot(routes, {useHash: true})

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
