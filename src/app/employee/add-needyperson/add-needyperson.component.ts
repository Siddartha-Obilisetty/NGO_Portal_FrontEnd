import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeserviceService } from 'app/employeeservice.service';
import { Address } from 'app/models/Address';
import { NeedyPeople } from 'app/models/NeedyPeople';

@Component({
  selector: 'app-add-needyperson',
  templateUrl: './add-needyperson.component.html',
  styleUrls: ['./add-needyperson.component.css']
})
export class AddNeedypersonComponent implements OnInit {

  needyPeople:NeedyPeople=new NeedyPeople();

  constructor(private employeeService:EmployeeserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  addNeedyPerson(){
    this.employeeService.addNeedyPerson(this.needyPeople).subscribe(
      result=>{
        console.log(result);
        this.goToNeedyPeopleList();
      },
      error=>console.log(error)
    );
    alert("employee added succesfully");
  }
  goToNeedyPeopleList() {
    this.router.navigate(['employee/login/findAllNeedyPeople']);
  }
  onSubmit(){
    this.addNeedyPerson();
  }

  
}
