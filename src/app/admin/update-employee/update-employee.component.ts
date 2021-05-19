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

  constructor(private adminService:AdminserviceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  updateEmployee(){
    this.empid=this.route.snapshot.params['id'];
    this.employee.employeeId=this.empid;
    
    this.adminService.modifyEmployee(this.empid,this.employee).subscribe(
      selectedEmployee=>{
        console.log(selectedEmployee);
        this.employee=selectedEmployee;
        this.goToEmployeeList();
      },
      error=>console.log(error)
    );
  }
  goToEmployeeList() {
    this.router.navigate(['admin/getAllEmployees']);
  }
  onSubmit(){
    this.updateEmployee();
  }
}
