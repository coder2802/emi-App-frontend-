import { NgModule, CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { PrintLayoutComponent } from './print-layout/print-layout.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { LedgerPrintComponent } from './ledger-print/ledger-print.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [
              CommonModule, 
              FormsModule, 
              AdminRoutingModule
            ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  declarations: [
             PrintLayoutComponent,
             InvoiceComponent,
             ButtonComponent,
             LedgerPrintComponent,
             
  ],
})
export class AdminModule {}
