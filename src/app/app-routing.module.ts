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
import { LoginpageComponent } from './loginpage/loginpage.component';
import { NeedypeopleComponent } from './needypeople/needypeople.component';
import { LoginComponent } from './needypeople/login/login.component';
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

const routes: Routes = [
  {path:'',component:HomepageComponent},

  {path:'admin',component:AdminComponent},
  {path:'admin/addEmployee',component:AddEmployeeComponent},
  {path:'admin/approveDonation/:id',component:ApproveDonationComponent},
  {path:'admin/deleteEmployeeById/:id',component:DeleteEmployeeComponent},
  {path:'admin/getAllEmployees',component:FindAllEmployeesComponent},
  {path:'admin/getEmployeeById/:id',component:FindEmployeeByIdComponent},
  {path:'admin/getEmployeeByName/:name',component:FindEmployeeByNameComponent},
  {path:'admin/updateEmployeeById/:id',component:UpdateEmployeeComponent},
  
  {path:'employee',component:EmployeeComponent},
  {path:'employee/login',component:EmployeeLoginComponent},
  {path:'employee/addNeedyPerson',component:AddNeedypersonComponent},
  {path:'employee/removeNeedyPerson/:id',component:DeleteNeedypersonComponent},
  {path:'employee/findAllNeedyPeople',component:FindAllNeedypeopleComponent},
  {path:'employee/findNeedyPeopleById/:id',component:FindNeedypersonByIdComponent},
  {path:'employee/findNeedyPeopleByName/:name',component:FindNeedypersonByNameComponent},

  {path:'donor',component:DonorComponent},
  {path:'donor/login',component:LoginDonorComponent},
  {path:'donor/login/register',component:RegisterDonorComponent},
  {path:'donor/login/forgotPassword',component: ForgotPasswordComponent},
  {path:'donor/login/resetPassword',component:ResetPasswordComponent},


  {path:'needypeople',component:NeedypeopleComponent},
  {path:'needypeople/login',component:LoginComponent},
  {path:'needypeople/register',component:RegisterNeedypersonComponent},
  {path:'needypeople/request/',component:RequestForHelpComponent},
  
  {path:'about',component:AboutComponent},
  {path:'loginpage',component:LoginpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
