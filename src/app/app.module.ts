import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import{ FormsModule , ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatAutocompleteModule} from '@angular/material/autocomplete';



import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { authInterceptorProviders } from './service/auth.interceptor';
import { AdmindashboardComponent } from './pages/admindashboard/admindashboard.component';
import { SidenavComponent } from './pages/admin/sidenav/sidenav.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { ViewProductComponent } from './pages/admin/view-product/view-product.component';
import { ViewCustomerComponent } from './pages/admin/view-customer/view-customer.component';
import { AddCustomerComponent } from './pages/admin/add-customer/add-customer.component';
import { AddSalesComponent } from './pages/admin/add-sales/add-sales.component';
import { ViewSalesComponent } from './pages/admin/view-sales/view-sales.component';
import { DateDialogComponent } from './components/date-dialog/date-dialog.component';
import { EmiComponent } from './pages/admin/emi/emi.component';
import { EmipayDialogComponent } from './components/emipay-dialog/emipay-dialog.component';
import { DatePipe } from '@angular/common';
import { LedgersComponent } from './pages/admin/ledgers/ledgers.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { GuarantorComponent } from './pages/admin/guarantor/guarantor.component';
import { UploadimgComponent } from './uploadimg/uploadimg.component';
import {NgxPrintModule} from 'ngx-print';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    AdmindashboardComponent,
    SidenavComponent,
    AddProductComponent,
    ViewProductComponent,
    ViewCustomerComponent,
    AddCustomerComponent,
    AddSalesComponent,
    ViewSalesComponent,
    DateDialogComponent,
    EmiComponent,
    EmipayDialogComponent,
    LedgersComponent,
    GuarantorComponent,
    UploadimgComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatTabsModule,
    MatInputModule,
    MatAutocompleteModule,
    NgbModule,
    NgxPaginationModule,
    NgxPrintModule
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [authInterceptorProviders ,  DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
