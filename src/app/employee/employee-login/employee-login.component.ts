import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeserviceService } from 'app/employeeservice.service';
import { NeedyPeople } from 'app/models/NeedyPeople';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  needyPeople:NeedyPeople[]=[];
  needyPerson:NeedyPeople=new NeedyPeople();

  constructor(private router:Router,private employeeService:EmployeeserviceService) { }

  ngOnInit(): void {
  }

  public employeeLogin(username:string,password:string){
    this.employeeService.employeeLogin(username,password).subscribe(Response=>console.log(Response));
    this.router.navigate(['employee']);
  }


}
