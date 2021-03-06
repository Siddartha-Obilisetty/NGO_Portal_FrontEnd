import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeserviceService } from 'app/employeeservice.service';
import { NeedyPeople } from 'app/models/NeedyPeople';

@Component({
  selector: 'app-find-needyperson-by-name',
  templateUrl: './find-needyperson-by-name.component.html',
  styleUrls: ['./find-needyperson-by-name.component.css']
})
export class FindNeedypersonByNameComponent implements OnInit {
  
  needyPeopleName:string;
  needyPeople:NeedyPeople[]=[];
  employeeId:number;
  error:string=null;
  
  constructor(private employeeService:EmployeeserviceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadNeedyPeopleData();
  }

  loadNeedyPeopleData(){
    this.needyPeopleName=this.route.snapshot.params['name'];
    this.employeeService.findNeedyPeopleByName(this.needyPeopleName).subscribe(
      needyPeople=>{
        this.needyPeople=needyPeople;
        console.log(this.needyPeople);
      },
      (error)=>{
        this.error=error}
    );
  }

  goToNeedyPeopleList(){
    this.employeeId=this.route.snapshot.params['id'];
    this.router.navigate(['employee',this.employeeId,'findNeedyPeople','all']);
    }

}
