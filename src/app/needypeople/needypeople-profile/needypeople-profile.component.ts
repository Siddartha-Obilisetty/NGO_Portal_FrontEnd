import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeserviceService } from 'app/employeeservice.service';
import { NeedyPeople } from 'app/models/NeedyPeople';

@Component({
  selector: 'app-needypeople-profile',
  templateUrl: './needypeople-profile.component.html',
  styleUrls: ['./needypeople-profile.component.css']
})
export class NeedypeopleProfileComponent implements OnInit {
  needyPeopleId:number;
  needyPeople:NeedyPeople;
  employeeId:number;
  error:string = null;

  constructor(private employeeService:EmployeeserviceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadNeedyPeopleData();
  }
  
  loadNeedyPeopleData(){
    this.needyPeopleId=this.route.snapshot.params['id'];
    console.log(this.needyPeopleId)
    this.employeeService.findNeedyPeopleById(this.needyPeopleId).subscribe(
      needyPeople=>{
        this.needyPeople=needyPeople;
      },
      (error)=>{
        this.error=error}
    );
  }

}
