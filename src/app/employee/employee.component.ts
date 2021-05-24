import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from 'app/adminservice.service';
import { EmployeeserviceService } from 'app/employeeservice.service';
import { Employee } from 'app/models/Employee';
import { NeedyPeople } from 'app/models/NeedyPeople';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  employee:Employee=new Employee();
  empid:number;
  needyPeople:NeedyPeople=new NeedyPeople();
  error:string=null;
  
  constructor(private router:Router,private employeeService:EmployeeserviceService,private route:ActivatedRoute,private adminService:AdminserviceService) { }

  ngOnInit(): void {
    this.empid=this.route.snapshot.params['id'];
    this.adminService.findEmployeeById(this.empid).subscribe(
      employee=>{
        this.employee=employee;
      }
    );
  }

  findAllNeedyPeople(){
    this.router.navigate(['employee',this.empid,'findNeedyPeople','all']);
  }

  findNeedyPeopleById(){
    this.router.navigate(['employee',this.empid,'findNeedyPeopleById',this.needyPeople.needyPeopleId]);
  }

  findNeedyPeopleByName(){
    this.router.navigate(['employee',this.empid,'findNeedyPeopleByName',this.needyPeople.needyPeopleName]);
  }

  
}
