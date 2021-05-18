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

  needyPeople:NeedyPeople=new NeedyPeople();
  
  constructor(private router:Router,private employeeService:EmployeeserviceService) { }

  ngOnInit(): void {
  }

  findAllNeedyPeople(){
    this.router.navigate(['employee/login/findAllNeedyPeople']);
  }

  findNeedyPeopleById(){
    this.router.navigate(['employee/login/findNeedyPeopleById/',this.needyPeople.needyPeopleId]);
  }

  findNeedyPeopleByName(){
    this.router.navigate(['employee/login/findNeedyPeopleByName/',this.needyPeople.needyPeopleName]);
  }

}
