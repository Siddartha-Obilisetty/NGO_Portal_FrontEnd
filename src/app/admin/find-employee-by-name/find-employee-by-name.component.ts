import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from 'app/adminservice.service';
import { Employee } from 'app/models/Employee';

@Component({
  selector: 'app-find-employee-by-name',
  templateUrl: './find-employee-by-name.component.html',
  styleUrls: ['./find-employee-by-name.component.css']
})
export class FindEmployeeByNameComponent implements OnInit {

  employeeName:string;
  employees:Employee[]=[];

  constructor(private adminService:AdminserviceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadEmployeeData();
  }

  loadEmployeeData(){
    this.employeeName=this.route.snapshot.params['name'];
    this.adminService.findEmployeeByName(this.employeeName).subscribe(
      employees=>{
        this.employees=employees;
        console.log(this.employees);
      }
    );
  }

  goToEmployeeList(){
    this.router.navigate(['admin/getAllEmployees'])
  }

}
