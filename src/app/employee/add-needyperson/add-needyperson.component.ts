import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeserviceService } from 'app/employeeservice.service';
import { NeedyPeople } from 'app/models/NeedyPeople';

@Component({
  selector: 'app-add-needyperson',
  templateUrl: './add-needyperson.component.html',
  styleUrls: ['./add-needyperson.component.css']
})
export class AddNeedypersonComponent implements OnInit {

  needyPeople:NeedyPeople=new NeedyPeople();
  employeeId:number;
  error:string = null;

  constructor(private employeeService:EmployeeserviceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  addNeedyPerson(){
    this.employeeService.addNeedyPerson(this.needyPeople).subscribe(
      result=>{
        this.needyPeople=result;
        console.log(result);
        console.log(this.needyPeople);
        this.goToNeedyPeopleList();
        alert("needy person added succesfully");
      },
      (error)=>{
        this.error=error}
    );
    
  }
  goToNeedyPeopleList() {
    this.employeeId=this.route.snapshot.params['id'];
    this.router.navigate(['employee',this.employeeId,'findNeedyPeople','all']);
  }
  onSubmit(){
    this.addNeedyPerson();
  }

  
}
