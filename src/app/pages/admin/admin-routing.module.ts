
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { AddSalesComponent } from './add-sales/add-sales.component';
import { ViewSalesComponent } from './view-sales/view-sales.component';
import { EmiComponent } from './emi/emi.component';
import { LedgersComponent } from './ledgers/ledgers.component';
import { GuarantorComponent } from './guarantor/guarantor.component';
import { AdmindashboardComponent } from '../admindashboard/admindashboard.component';
import { PrintLayoutComponent } from './print-layout/print-layout.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { LedgerPrintComponent } from './ledger-print/ledger-print.component';

const routes: Routes = [
        
            {
              path: 'home',
              component:HomeComponent
            },
            {
              path:'add-product',
              component:AddProductComponent
            },
            {
              path:'view-product',
              component:ViewProductComponent
            },
            {
              path:'add-customer',
              component:AddCustomerComponent
            },
            {
              path:'view-customer',
              component:ViewCustomerComponent
            },
            {
              path:'add-sale/:lastinvoiceno',
              component:AddSalesComponent
            },
            {
              path:'view-sales',
              component:ViewSalesComponent
            },
            {
              path:'emi',
              component:EmiComponent
            },
            {
              path:'ledger',
              component:LedgersComponent
            },
            {
              path:'guarantor',
              component:GuarantorComponent
            },
            { path: 'print',
              outlet: 'print',
                component: PrintLayoutComponent,
              children: [
              { path: 'invoice', component: InvoiceComponent }
                ]
            },

            


];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

