import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeserviceService } from 'app/employeeservice.service';
import { Admin } from 'app/models/Admin';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin:Admin=new Admin();
  error:string="Wrong Credentials";
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public login(){
    if(this.admin.adminUsername=="admin" && this.admin.adminPassword=="admin"){
      this.loadAdminPage();
    }
    else{
      this.error;
    }
  }
  loadAdminPage() {
    this.router.navigate(['admin']);
  }

}
