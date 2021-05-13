import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { DonorComponent } from './donor/donor.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NeedypeopleComponent } from './needypeople/needypeople.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'admin',component:AdminComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'donor',component:DonorComponent},
  {path:'needypeople',component:NeedypeopleComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
