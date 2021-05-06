import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { DonationDistributionStatus } from '../models/DonationDistributionStatus';
import { Employee } from '../models/Employee';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  donationDistributionStatus:DonationDistributionStatus;
  employees:Employee[]=[];
  employee:Employee;

  constructor(private adminService:AdminserviceService) { 
  }

  ngOnInit(): void {
  }
  
  addEmployee(employee:Employee){
    console.log("add employee in component");
    this.adminService.addEmployee(employee).subscribe(
      data=>{
        alert('employee added succesfully');
      }
    );
  }

  modifyEmployee(employee:Employee){
    console.log("modify employee in component");
    this.adminService.modifyEmployee(employee).subscribe(
      data=>{
        alert('employee updated succesfully');
      }
    );
  }

  deleteEmployee(employeeId:number){
    console.log("delete employee in component");
    this.adminService.deleteEmployee(employeeId).subscribe(
      data=>{
        alert('employee deleted succesully');
      }
    );
  }

  approveDonation(dd_id:number){
    console.log("approve donation in component");
    this.adminService.approveDonation(dd_id).subscribe(
      donationDistributionStatus=>{
        this.donationDistributionStatus=donationDistributionStatus;
      }
    );
  }

  findAllEmployee(){
    console.log("find all employee in component");
    this.adminService.findAllEmployee().subscribe(
      employees=>{
        this.employees=employees;
      }
    );
  }

  findEmployeeById(empid:number){
    console.log("get employee by id in component");
    this.adminService.findEmployeeById(empid).subscribe(
      employee=>{
        this.employee=employee;
      }
    );
  }

  findEmployeeByNmae(ename:string){
    console.log("get employee by Name in component");
    this.adminService.findEmployeeByName(ename).subscribe(
      employees=>{
        this.employees=employees;
      }
    );
  }
}
