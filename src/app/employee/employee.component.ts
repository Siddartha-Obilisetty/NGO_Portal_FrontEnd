import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeserviceService } from 'app/employeeservice.service';
import { NeedyPeople } from 'app/models/NeedyPeople';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  needyPeople:NeedyPeople[]=[];
  needyPerson:NeedyPeople=new NeedyPeople();

  constructor(private router:Router,private employeeService:EmployeeserviceService) { }

  ngOnInit(): void {
  }

  findAllNeedyPeople(){
    this.router.navigate(['employee/login/findAllNeedyPeople']);
  }

  findNeedyPeopleById(){
    this.router.navigate(['employee/login/findNeedyPeopleById/',this.needyPerson.needyPeopleId]);
  }

  findNeedyPeopleByName(){
    this.router.navigate(['employee/login/findNeedyPeopleByName/',this.needyPerson.needyPeopleName]);
  }

}
