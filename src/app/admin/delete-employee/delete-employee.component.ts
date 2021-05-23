import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from 'app/adminservice.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  empid:number;
  error:string=null;
  constructor(private adminService:AdminserviceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.empid=this.route.snapshot.params['id'];
    this.deleteProduct(this.empid);
  }

  deleteProduct(employeeId:number){
    this.adminService.deleteEmployee(employeeId).subscribe(
      result=>{
      },
      (error)=>{
        this.error=error}
      );
      alert("Employee deleted succesfully");
      this.reloadEmployeeData();
  }

  reloadEmployeeData(){
    this.router.navigate(['admin/getAllEmployees']);
  }
}
