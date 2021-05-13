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
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './admin/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './admin/delete-employee/delete-employee.component';
import { FindAllEmployeesComponent } from './admin/find-all-employees/find-all-employees.component';
import { FindEmployeeByIdComponent } from './admin/find-employee-by-id/find-employee-by-id.component';
import { FindEmployeeByNameComponent } from './admin/find-employee-by-name/find-employee-by-name.component';
import { ApproveDonationComponent } from './admin/approve-donation/approve-donation.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AdminComponent,
    DonorComponent,
    NeedypeopleComponent,
    HomepageComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent,
    FindAllEmployeesComponent,
    FindEmployeeByIdComponent,
    FindEmployeeByNameComponent,
    ApproveDonationComponent
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
