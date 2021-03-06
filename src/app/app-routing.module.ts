import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { AdminComponent } from './admin/admin.component';
import { ApproveDonationComponent } from './admin/approve-donation/approve-donation.component';
import { DeleteEmployeeComponent } from './admin/delete-employee/delete-employee.component';
import { FindAllEmployeesComponent } from './admin/find-all-employees/find-all-employees.component';
import { FindEmployeeByIdComponent } from './admin/find-employee-by-id/find-employee-by-id.component';
import { FindEmployeeByNameComponent } from './admin/find-employee-by-name/find-employee-by-name.component';
import { UpdateEmployeeComponent } from './admin/update-employee/update-employee.component';
import { DonorComponent } from './donor/donor.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginDonorComponent } from './donor/login-donor/login-donor.component';
import { RegisterNeedypersonComponent } from './needypeople/register-needyperson/register-needyperson.component';
import { RequestForHelpComponent } from './needypeople/request-for-help/request-for-help.component';
import { RegisterDonorComponent } from './donor/register-donor/register-donor.component';
import { ForgotPasswordComponent } from './donor/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './donor/reset-password/reset-password.component';
import { FindNeedypersonByNameComponent } from './employee/find-needyperson-by-name/find-needyperson-by-name.component';
import { FindNeedypersonByIdComponent } from './employee/find-needyperson-by-id/find-needyperson-by-id.component';
import { FindAllNeedypeopleComponent } from './employee/find-all-needypeople/find-all-needypeople.component';
import { DeleteNeedypersonComponent } from './employee/delete-needyperson/delete-needyperson.component';
import { AddNeedypersonComponent } from './employee/add-needyperson/add-needyperson.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeLoginComponent } from './employee/employee-login/employee-login.component';
import { GetAllDonationsComponent } from './admin/get-all-donations/get-all-donations.component';
import { NeedypeopleLoginComponent } from './needypeople/needypeople-login/needypeople-login.component';
import { NeedypeopleComponent } from './needypeople/needypeople.component';
import { FindAllDonorsComponent } from './admin/find-all-donors/find-all-donors.component';
import { FindDonorByIdComponent } from './admin/find-donor-by-id/find-donor-by-id.component';
import { DonateToNgoComponent } from './donor/donate-to-ngo/donate-to-ngo.component';
import { ContactComponent } from './contact/contact.component';
import { WriteComponent } from './write/write.component';
import { AllDonationsComponent } from './donor/all-donations/all-donations.component';
import { HelpNeedypersonComponent } from './employee/help-needyperson/help-needyperson.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { EmployeeProfileComponent } from './employee/employee-profile/employee-profile.component';
import { DonorProfileComponent } from './donor/donor-profile/donor-profile.component';
import { NeedypeopleProfileComponent } from './needypeople/needypeople-profile/needypeople-profile.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},

  {path:'admin',component:AdminComponent},
  {path:'admin/login',component:AdminLoginComponent},
  {path:'admin/addEmployee',component:AddEmployeeComponent},
  {path:'admin/approveDonation/:id/:status',component:ApproveDonationComponent},
  {path:'admin/getAllDonations',component:GetAllDonationsComponent},
  {path:'admin/deleteEmployeeById/:id',component:DeleteEmployeeComponent},
  {path:'admin/getAllEmployees',component:FindAllEmployeesComponent},
  {path:'admin/getEmployeeById/:id',component:FindEmployeeByIdComponent},
  {path:'admin/getEmployeeByName/:name',component:FindEmployeeByNameComponent},
  {path:'admin/updateEmployeeById/:id',component:UpdateEmployeeComponent},
  {path:'admin/getAllDonors',component:FindAllDonorsComponent},
  {path:'admin/getDonorById/:id',component:FindDonorByIdComponent},
  
  {path:'employee/login',component:EmployeeLoginComponent},
  {path:'employee/:id',component:EmployeeComponent},
  {path:'employee/:id/profile',component:EmployeeProfileComponent},
  {path:'employee/:id/needyPerson/add',component:AddNeedypersonComponent},
  {path:'employee/:id/needyPerson/remove/:npid',component:DeleteNeedypersonComponent},
  {path:'employee/:id/findNeedyPeople/all',component:FindAllNeedypeopleComponent},
  {path:'employee/:id/findNeedyPeopleById/:npid',component:FindNeedypersonByIdComponent},
  {path:'employee/:id/findNeedyPeopleByName/:name',component:FindNeedypersonByNameComponent},
  {path:'employee/:id/helpNeedyPeopleById/:npid',component:HelpNeedypersonComponent},
  
  {path:'donor/login',component:LoginDonorComponent},
  {path:'donor/register',component:RegisterDonorComponent},
  {path:'donor/login/forgotPassword',component: ForgotPasswordComponent},
  {path:'donor/login/resetPassword',component:ResetPasswordComponent},
  {path:'donor/:id',component:DonorComponent},
  {path:'donor/:id/profile',component:DonorProfileComponent},
  {path:'donor/:id/donate',component:DonateToNgoComponent},
  {path:'donor/:id/donations',component:AllDonationsComponent},

  {path:'needypeople/login',component:NeedypeopleLoginComponent},
  {path:'needypeople/register',component:RegisterNeedypersonComponent},
  {path:'needypeople/:id',component:NeedypeopleComponent},
  {path:'needypeople/:id/profile',component:NeedypeopleProfileComponent},
  {path:'needypeople/:id/request',component:RequestForHelpComponent},
  
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'write',component:WriteComponent},
  {path:'team',component:TeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
