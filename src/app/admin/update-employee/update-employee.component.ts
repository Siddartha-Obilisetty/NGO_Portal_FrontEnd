import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from 'app/adminservice.service';
import { Employee } from 'app/models/Employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  empid:number;
  employee:Employee=new Employee();
  error:string=null;

  constructor(private adminService:AdminserviceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  updateEmployee(){
    this.empid=this.route.snapshot.params['id'];
    this.employee.employeeId=this.empid;
    console.log(this.employee.address.addressId)
    this.adminService.modifyEmployee(this.empid,this.employee).subscribe(
      selectedEmployee=>{
        console.log(selectedEmployee);
        this.employee=selectedEmployee;
        console.log(this.employee.address.addressId)
        this.goToEmployeeList();
      },
      (error)=>{
        this.error=error}
    );
  }
  goToEmployeeList() {
    this.router.navigate(['admin/getAllEmployees']);
  }
  onSubmit(){
    this.updateEmployee();
  }
}
