import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeserviceService } from 'app/employeeservice.service';
import { NeedyPeople } from 'app/models/NeedyPeople';

@Component({
  selector: 'app-find-all-needypeople',
  templateUrl: './find-all-needypeople.component.html',
  styleUrls: ['./find-all-needypeople.component.css']
})
export class FindAllNeedypeopleComponent implements OnInit {

  needyPeople:NeedyPeople[];

  constructor(private employeeService:EmployeeserviceService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.employeeService.findAllNeedyPeople().subscribe(
      needyPeople=>{
        this.needyPeople=needyPeople;
      }
    );
  }

  findNeedyPeopleById(needyPeopleId:number){
    this.router.navigate(['employee/findNeedyPeopleById/',needyPeopleId]);
  }

  removeNeedyPerson(needyPeopleId:number){
    this.router.navigate(['employee/removeNeedyPerson/',needyPeopleId]);
  }

  addNeedyPerson(){
    this.router.navigate(['employee/addNeedyPerson']);
  }

}
