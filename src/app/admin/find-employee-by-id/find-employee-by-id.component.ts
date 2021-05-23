import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from 'app/adminservice.service';
import { Employee } from 'app/models/Employee';

@Component({
  selector: 'app-find-employee-by-id',
  templateUrl: './find-employee-by-id.component.html',
  styleUrls: ['./find-employee-by-id.component.css']
})
export class FindEmployeeByIdComponent implements OnInit {

  employeeId:number;
  employee:Employee;
  error:string=null;

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

  goToEmployeeList(){
    this.router.navigate(['admin/getAllEmployees'])
  }
}
