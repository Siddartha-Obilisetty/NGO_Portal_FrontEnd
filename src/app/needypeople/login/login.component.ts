import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NeedyPeople } from 'app/models/NeedyPeople';
import { NeedypeopleserviceService } from 'app/needypeopleservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  person:NeedyPeople=new NeedyPeople();

  constructor(private router:Router, private needyPeopleService:NeedypeopleserviceService) { }

  ngOnInit(): void {
  }
 needyPersonLogin(){
   console.log(this.person.username);
   this.needyPeopleService.login(this.person.username,this.person.password).subscribe(
     result=>{
       console.log(result);
       this.requestForHelp(this.person.needyPeopleId);
       console.log("request for help");
     },error=>{console.log(error)}
   );
 }
 requestForHelp(id:number){
   id=this.person.needyPeopleId;
   this.router.navigate(['/request',id])
 }
 onSubmit(){
   this.requestForHelp(111);
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
