import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NeedyPeople } from 'app/models/NeedyPeople';
import { NeedypeopleserviceService } from 'app/needypeopleservice.service';

@Component({
  selector: 'app-needypeople-login',
  templateUrl: './needypeople-login.component.html',
  styleUrls: ['./needypeople-login.component.css']
})
export class NeedypeopleLoginComponent implements OnInit {

  people:NeedyPeople[]=[];
  person:NeedyPeople=new NeedyPeople();

  constructor(private router:Router, private needyPeopleService:NeedypeopleserviceService) { }
  
  ngOnInit(): void {
  }

  needyPersonLogin(){
    console.log(this.person.username);
    this.needyPeopleService.login(this.person.username,this.person.password).subscribe(
      result=>{
        console.log(result);
      },
      error=>{console.log(error)}
    );
  }
}
