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
import { DonateToNgoComponent } from './donor/donate-to-ngo/donate-to-ngo.component';

import { RegisterDonorComponent } from './donor/register-donor/register-donor.component';
import { LoginDonorComponent } from './donor/login-donor/login-donor.component';
import { ForgotPasswordComponent } from './donor/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './donor/reset-password/reset-password.component';
import { FindAllNeedypeopleComponent } from './employee/find-all-needypeople/find-all-needypeople.component';
import { DeleteNeedypersonComponent } from './employee/delete-needyperson/delete-needyperson.component';
import { AddNeedypersonComponent } from './employee/add-needyperson/add-needyperson.component';
import { EmployeeLoginComponent } from './employee/employee-login/employee-login.component';
import { FindNeedypersonByIdComponent } from './employee/find-needyperson-by-id/find-needyperson-by-id.component';
import { FindNeedypersonByNameComponent } from './employee/find-needyperson-by-name/find-needyperson-by-name.component';
import { HelpNeedypersonComponent } from './employee/help-needyperson/help-needyperson.component';
import { LoginComponent } from './needypeople/login/login.component';
import { RegisterNeedypersonComponent } from './needypeople/register-needyperson/register-needyperson.component';
import { RequestForHelpComponent } from './needypeople/request-for-help/request-for-help.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

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
    ApproveDonationComponent,
    AddNeedypersonComponent,
    DeleteNeedypersonComponent,
    FindAllNeedypeopleComponent,
    FindNeedypersonByIdComponent,
    FindNeedypersonByNameComponent,
    EmployeeLoginComponent,
    HelpNeedypersonComponent,
    LoginComponent,
    RegisterNeedypersonComponent,
    RequestForHelpComponent,
    LoginpageComponent,
    NeedypeopleserviceComponent
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
