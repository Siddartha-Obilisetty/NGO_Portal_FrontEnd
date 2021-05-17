import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from 'app/adminservice.service';
import { Address } from 'app/models/Address';
import { Employee } from 'app/models/Employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee:Employee=new Employee();
  constructor(private adminService:AdminserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  createEmployee(){
    this.adminService.addEmployee(this.employee).subscribe(
      result=>{
        console.log(result);
        this.goToEmployeeList();
      },
      error=>console.log(error)
    );
  }
  goToEmployeeList() {
    this.router.navigate(['admin/getAllEmployees']);
  }
  onSubmit(){
    this.createEmployee();
  }


}
