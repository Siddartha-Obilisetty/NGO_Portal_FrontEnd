import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NeedyPeople } from 'app/models/NeedyPeople';
import { NeedypeopleserviceService } from 'app/needypeopleservice.service';

@Component({
  selector: 'app-needypeople',
  templateUrl: './needypeople.component.html',
  styleUrls: ['./needypeople.component.css']
})
export class NeedypeopleComponent implements OnInit {

  person:NeedyPeople=new NeedyPeople();

  constructor(private router:Router, private needyPeopleService:NeedypeopleserviceService) { }

  
  ngOnInit(): void {
  }
  
  requestForHelp()
  {
    this.router.navigate(['/needypeople/request/',this.person.needyPeopleId]);
  }
//  createNeedyPeople(){
//   this.needyPeopleService.registerNeedyPerson(this.person).subscribe(
//     result=>{
//       console.log(result);
//       this.goToNeedyPeopleList();
//     },
//     error=>console.log(error)
//   );
//   alert("needy person added succesfully");
// }
// goToNeedyPeopleList(){
//   this.router.navigate(['/employee/needypeople/all'])
// }
// onSubmit1(){
//   this.createNeedyPeople();
// }
}