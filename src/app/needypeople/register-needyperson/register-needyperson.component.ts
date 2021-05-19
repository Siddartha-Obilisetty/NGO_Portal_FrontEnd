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
        console.log(result);
        this.goToNeedyPeopleList();
      },
      error=>console.log(error)
    );
    alert("needy person added succesfully");
  }
  goToNeedyPeopleList(){
    this.router.navigate(['/employee/needypeople/all'])
  }
  onSubmit(){
    this.createNeedyPeople();
  }


    

  

}
