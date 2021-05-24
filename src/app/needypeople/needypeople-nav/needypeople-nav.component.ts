import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeserviceService } from 'app/employeeservice.service';
import { NeedyPeople } from 'app/models/NeedyPeople';

@Component({
  selector: 'app-needypeople-nav',
  templateUrl: './needypeople-nav.component.html',
  styleUrls: ['./needypeople-nav.component.css']
})
export class NeedypeopleNavComponent implements OnInit {

  person:NeedyPeople=new NeedyPeople();
  needyPersonId:number;

  constructor(private router:Router,
              private route:ActivatedRoute,
              private empService:EmployeeserviceService) { }

  ngOnInit(): void {
    this.needyPersonId=this.route.snapshot.params['id'];
    this.empService.findNeedyPeopleById(this.needyPersonId).subscribe(
      person=>{
        this.person=person;
      }
    );
  }
  
  goToProfile(){
    this.router.navigate(['/needypeople',this.needyPersonId,'profile']);
  }

}
