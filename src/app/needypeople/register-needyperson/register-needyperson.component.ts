import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NeedyPeople } from 'app/models/NeedyPeople';
import { NeedypeopleserviceService } from 'app/needypeopleservice.service';

@Component({
  selector: 'app-register-needyperson',
  templateUrl: './register-needyperson.component.html',
  styleUrls: ['./register-needyperson.component.css']
})
export class RegisterNeedypersonComponent implements OnInit {
  
  needyPeople:NeedyPeople=new NeedyPeople();
  error:string = null;

  constructor(private router:Router, private needyPeopleService:NeedypeopleserviceService) { }

  ngOnInit(): void {
  }
  
  createNeedyPeople(){
    this.needyPeopleService.registerNeedyPerson(this.needyPeople).subscribe(
      person=>{
        console.log(person);
        this.needyPeople=person;
        console.log(this.needyPeople);
        this.goToNeedy();
        alert("needy person added succesfully");
      },
      (error)=>{
        this.error=error}
    );
    
  }
  goToNeedy(){
    this.router.navigate(['needypeople',this.needyPeople.needyPeopleId]);
  }
  onSubmit(){
    this.createNeedyPeople();
  }


    

  

}
