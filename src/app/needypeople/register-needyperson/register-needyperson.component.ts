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
  
  person:NeedyPeople=new NeedyPeople();

  constructor(private router:Router, private needyPeopleService:NeedypeopleserviceService) { }

  ngOnInit(): void {
  }
  
  createNeedyPeople(){
    this.needyPeopleService.registerNeedyPerson(this.person).subscribe(
      result=>{
        this.person=result;
        console.log(result);
        this.goToNeedy();
      },
      error=>console.log(error)
    );
    alert("needy person added succesfully");
  }
  goToNeedy(){
    this.router.navigate(['needypeople']);
  }
  onSubmit(){
    this.createNeedyPeople();
  }


    

  

}
