import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from 'app/adminservice.service';
import { EmployeeserviceService } from 'app/employeeservice.service';
import { Employee } from 'app/models/Employee';

@Component({
  selector: 'app-employee-nav',
  templateUrl: './employee-nav.component.html',
  styleUrls: ['./employee-nav.component.css']
})
export class EmployeeNavComponent implements OnInit {

  employee:Employee=new Employee();
  empid:number;

  constructor(private router:Router,private employeeService:EmployeeserviceService,private route:ActivatedRoute,private adminService:AdminserviceService) { }

  ngOnInit(): void {
    this.empid=this.route.snapshot.params['id'];
    this.adminService.findEmployeeById(this.empid).subscribe(
      employee=>{
        this.employee=employee;
      }
    );
  }
  goToProfile(){
    this.router.navigate(['employee',this.empid,'profile']);
  }
}
