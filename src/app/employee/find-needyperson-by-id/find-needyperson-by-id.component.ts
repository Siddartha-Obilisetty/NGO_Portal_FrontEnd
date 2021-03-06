import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeserviceService } from 'app/employeeservice.service';
import { NeedyPeople } from 'app/models/NeedyPeople';

@Component({
  selector: 'app-find-needyperson-by-id',
  templateUrl: './find-needyperson-by-id.component.html',
  styleUrls: ['./find-needyperson-by-id.component.css']
})
export class FindNeedypersonByIdComponent implements OnInit {

  needyPeopleId:number;
  needyPeople:NeedyPeople;
  employeeId:number;
  error:string = null;

  constructor(private employeeService:EmployeeserviceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadNeedyPeopleData();
  }

  loadNeedyPeopleData(){
    this.needyPeopleId=this.route.snapshot.params['npid'];
    this.employeeService.findNeedyPeopleById(this.needyPeopleId).subscribe(
      needyPeople=>{
        this.needyPeople=needyPeople;
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
