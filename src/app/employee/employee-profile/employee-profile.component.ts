import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from 'app/adminservice.service';
import { Employee } from 'app/models/Employee';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {

  employeeId:number;
  employee:Employee;
  error:string;
  
  constructor(private adminService:AdminserviceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadEmployeeData();
  }

  loadEmployeeData(){
    this.employeeId=this.route.snapshot.params['id'];
    this.adminService.findEmployeeById(this.employeeId).subscribe(
      employee=>{
        this.employee=employee;
      },
      (error)=>{
        this.error=error}
    );
  }

}
