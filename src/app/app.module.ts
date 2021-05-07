import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AdminComponent } from './admin/admin.component';
import { DonorComponent } from './donor/donor.component';
import { NeedypeopleComponent } from './needypeople/needypeople.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DonorserviceService } from './donorservice.service';
import { AdminserviceService } from './adminservice.service';
import { NeedypeopleserviceService } from './needypeopleservice.service';
import { EmployeeserviceService } from './employeeservice.service';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AdminComponent,
    DonorComponent,
    NeedypeopleComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DonorserviceService,AdminserviceService,NeedypeopleserviceService,EmployeeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
