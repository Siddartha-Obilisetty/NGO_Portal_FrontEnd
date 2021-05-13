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

  @Input() empId:number;
  empName:string;
  employees:Employee[]=[];
  employee:Employee;

  constructor(private router:Router, private adminService:AdminserviceService) { 
  }

  ngOnInit(): void {
  }
  
  getAllEmployees(){
    this.router.navigate(['admin/getAllEmployees']);
  }

  getEmployeeById(empId:number){
    this.router.navigate(['admin/getEmployeeById/',empId]);
  }

  getEmployeeByName(empName:string){
    this.router.navigate(['admin/getEmployeeByName/',empName]);
  }
}
