import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { EmployeeComponent } from './employee/employee.component';
import { AdminComponent } from './admin/admin.component';
import { DonorComponent } from './donor/donor.component';
import { NeedypeopleComponent } from './needypeople/needypeople.component';
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

import { FindAllNeedypeopleComponent } from './employee/find-all-needypeople/find-all-needypeople.component';
import { DeleteNeedypersonComponent } from './employee/delete-needyperson/delete-needyperson.component';
import { AddNeedypersonComponent } from './employee/add-needyperson/add-needyperson.component';
import { EmployeeLoginComponent } from './employee/employee-login/employee-login.component';
import { FindNeedypersonByIdComponent } from './employee/find-needyperson-by-id/find-needyperson-by-id.component';
import { FindNeedypersonByNameComponent } from './employee/find-needyperson-by-name/find-needyperson-by-name.component';
import { HelpNeedypersonComponent } from './employee/help-needyperson/help-needyperson.component';
import { RegisterNeedypersonComponent } from './needypeople/register-needyperson/register-needyperson.component';
import { RequestForHelpComponent } from './needypeople/request-for-help/request-for-help.component';
import { GetAllDonationsComponent } from './admin/get-all-donations/get-all-donations.component';
import { NeedypeopleLoginComponent } from './needypeople/needypeople-login/needypeople-login.component';
import { RegisterDonorComponent } from './donor/register-donor/register-donor.component';
import { LoginDonorComponent } from './donor/login-donor/login-donor.component';
import { ForgotPasswordComponent } from './donor/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './donor/reset-password/reset-password.component';
import { DonateToNgoComponent } from './donor/donate-to-ngo/donate-to-ngo.component';
import { FindAllDonorsComponent } from './admin/find-all-donors/find-all-donors.component';
import { FindDonorByIdComponent } from './admin/find-donor-by-id/find-donor-by-id.component';
import { ContactComponent } from './contact/contact.component';
import { WriteComponent } from './write/write.component';
import { AllDonationsComponent } from './donor/all-donations/all-donations.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { EmployeeProfileComponent } from './employee/employee-profile/employee-profile.component';
import { DonorProfileComponent } from './donor/donor-profile/donor-profile.component';
import { NeedypeopleProfileComponent } from './needypeople/needypeople-profile/needypeople-profile.component';
import { NeedypeopleNavComponent } from './needypeople/needypeople-nav/needypeople-nav.component';
import { DonorNavComponent } from './donor/donor-nav/donor-nav.component';
import { EmployeeNavComponent } from './employee/employee-nav/employee-nav.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamComponent } from './team/team.component';
import { HomeNavComponent } from './home-nav/home-nav.component';


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
    RegisterNeedypersonComponent,
    RequestForHelpComponent,
    GetAllDonationsComponent,
    NeedypeopleLoginComponent,
    LoginDonorComponent,
    RegisterDonorComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DonateToNgoComponent,
    FindAllDonorsComponent,
    FindDonorByIdComponent,
    ContactComponent,
    WriteComponent,
    AllDonationsComponent,
    AdminLoginComponent,
    EmployeeProfileComponent,
    DonorProfileComponent,
    NeedypeopleProfileComponent,
    NeedypeopleNavComponent,
    DonorNavComponent,
    EmployeeNavComponent,
    AdminNavComponent,
    TeamComponent,
    HomeNavComponent
    //these are imports
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
