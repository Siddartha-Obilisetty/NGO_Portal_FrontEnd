import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeserviceService } from 'app/employeeservice.service';
import { NeedyPeople } from 'app/models/NeedyPeople';
import { NeedypeopleserviceService } from 'app/needypeopleservice.service';

@Component({
  selector: 'app-needypeople',
  templateUrl: './needypeople.component.html',
  styleUrls: ['./needypeople.component.css']
})
export class NeedypeopleComponent implements OnInit {

  person:NeedyPeople=new NeedyPeople();
  needyPersonId:number;

  constructor(private router:Router, private needyPeopleService:NeedypeopleserviceService, private route:ActivatedRoute,private empService:EmployeeserviceService) { }

  
  ngOnInit(): void {
    this.needyPersonId=this.route.snapshot.params['id'];
    this.empService.findNeedyPeopleById(this.needyPersonId).subscribe(
      person=>{
        this.person=person;
      }
    );
  }


  
  requestForHelp()
  {
    this.router.navigate(['/needypeople/request/',this.needyPersonId]);
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