import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';
import { DonationDistributionStatus } from '../models/DonationDistributionStatus';
import { Employee } from '../models/Employee';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  employees:Employee[]=[];
  employee:Employee=new Employee();

  constructor(private router:Router, private adminService:AdminserviceService) { 
  }

  ngOnInit(): void {
  }
  
  getAllEmployees(){
    this.router.navigate(['admin/getAllEmployees']);
  }

  getEmployeeById(){
    this.router.navigate(['admin/getEmployeeById/',this.employee.employeeId]);
  }

  getEmployeeByName(){
    this.router.navigate(['admin/getEmployeeByName/',this.employee.employeeName]);
  }

  getAllDonations(){
    this.router.navigate(['admin/getAllDonations']);
  }

  getAllDonors(){
    this.router.navigate(['admin/getAllDonors']);
  }
}
