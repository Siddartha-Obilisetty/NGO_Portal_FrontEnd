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
import { EmployeeLoginComponent } from './employee/employee-login/employee-login.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { NeedypeopleComponent } from './needypeople/needypeople.component';
import { LoginComponent } from './needypeople/login/login.component';
import { LoginDonorComponent } from './donor/login-donor/login-donor.component';

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

  {path:'donor',component:DonorComponent},
  {path:'donor/login',component:LoginDonorComponent},

  {path:'needypeople',component:NeedypeopleComponent},
  {path:'needypeople/login',component:LoginComponent},
  
  {path:'about',component:AboutComponent},
  {path:'loginpage',component:LoginpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
