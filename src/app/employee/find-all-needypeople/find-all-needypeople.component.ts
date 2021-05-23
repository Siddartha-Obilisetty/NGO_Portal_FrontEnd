import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeserviceService } from 'app/employeeservice.service';
import { NeedyPeople } from 'app/models/NeedyPeople';

@Component({
  selector: 'app-find-all-needypeople',
  templateUrl: './find-all-needypeople.component.html',
  styleUrls: ['./find-all-needypeople.component.css']
})
export class FindAllNeedypeopleComponent implements OnInit {

  employeeId:number;
  needyPeople:NeedyPeople[];

  constructor(private employeeService:EmployeeserviceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeId=this.route.snapshot.params['id'];
    this.reloadData();
  }

  reloadData() {
    this.employeeService.findAllNeedyPeople().subscribe(
      needyPeople=>{
        this.needyPeople=needyPeople;
      }
    );
  }

  helpNeedyPeopleById(needyPeopleId:number){
    this.router.navigate(['employee',this.employeeId,'helpNeedyPeopleById',needyPeopleId]);
  }

  findNeedyPeopleById(needyPeopleId:number){
    this.router.navigate(['employee',this.employeeId,'findNeedyPeopleById',needyPeopleId]);
  }

  removeNeedyPerson(needyPeopleId:number){
    this.router.navigate(['employee',this.employeeId,'needyPerson','remove',needyPeopleId]);
  }

  addNeedyPerson(){
    this.router.navigate(['employee',this.employeeId,'needyPerson','add']);
  }

}
