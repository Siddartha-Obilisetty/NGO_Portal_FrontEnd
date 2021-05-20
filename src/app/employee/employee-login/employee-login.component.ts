import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeserviceService } from 'app/employeeservice.service';
import { Employee } from 'app/models/Employee';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  employee:Employee=new Employee();

  constructor(private router:Router,private employeeService:EmployeeserviceService) { }

  ngOnInit(): void {
  }

  public login(){
    this.employeeService.employeeLogin(this.employee.username,this.employee.password).subscribe(
      employee=>{
        this.employee=employee;
        this.loadEmployeePage(this.employee.employeeId);
      }
    );
  }
  loadEmployeePage(employeeId: number) {
    this.router.navigate(['employee',employeeId]);
  }



}
