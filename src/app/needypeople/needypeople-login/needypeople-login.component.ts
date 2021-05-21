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

  person:NeedyPeople=new NeedyPeople();
  error:string = null;

  constructor(private router:Router, private needyPeopleService:NeedypeopleserviceService) { }
  
  ngOnInit(): void {
  }

  login(){
    console.log(this.person.username);
    this.needyPeopleService.login(this.person.username,this.person.password).subscribe(
      person=>{
        console.log(person);
        this.person=person;
        this.loadNPHomePage(this.person.needyPeopleId);
      },
      (error)=>{
        this.error=error}
    );
  }
  loadNPHomePage(needyPeopleId: number) {
    this.router.navigate(['needypeople',needyPeopleId]);
  }
}
