import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from 'app/adminservice.service';
import { Employee } from 'app/models/Employee';

@Component({
  selector: 'app-find-all-employees',
  templateUrl: './find-all-employees.component.html',
  styleUrls: ['./find-all-employees.component.css']
})
export class FindAllEmployeesComponent implements OnInit {

  employees:Employee[];

  constructor(private adminService:AdminserviceService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.adminService.findAllEmployee().subscribe(
      employees=>{
        this.employees=employees;
      }
    );
  }

  getEmployeeById(employeeId:number){
    this.router.navigate(['admin/getEmployeeById/',employeeId]);
  }

  deleteEmployee(employeeId:number){
    this.router.navigate(['admin/deleteEmployee/',employeeId]);
  }

  updateEmployee(employeeId:number){
    this.router.navigate(['admin/updateEmployee/',employeeId]);
  }

  addEmployee(){
    this.router.navigate(['admin/addEmployee']);
  }
}
