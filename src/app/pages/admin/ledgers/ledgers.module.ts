import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LedgerPrintComponent } from '../ledger-print/ledger-print.component';
import { ButtonComponent } from '../button/button.component';
import { LedgersComponent } from './ledgers.component';


@NgModule({
  declarations: [
    
    LedgerPrintComponent,
    ButtonComponent
  ],
  imports: [
    
    BrowserModule,
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: []
})
export class LedgersModule { }
