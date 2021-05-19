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

  requestForHelp()
  {
    this.router.navigate(['/needypeople/request/',this.person.needyPeopleId]);
  }
}
