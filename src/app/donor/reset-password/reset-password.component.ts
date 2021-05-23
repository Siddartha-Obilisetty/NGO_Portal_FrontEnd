import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonorserviceService } from 'app/donorservice.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  username: string;
  oldPassword: string;
  newPassword: string;
  error: string=null;

  constructor(private router:Router, private donorService:DonorserviceService) { }

  ngOnInit(): void {
  }
 resetPassword(username:string,oldPassword:string,newPassword:string){
  this.donorService.resetPassword(username,oldPassword,newPassword).subscribe(
    result=>{
      console.log(result);
    },
    error=>{this.error=error}    
  );
 }


 onSubmit(username:string,oldPassword:string,newPassword:string){
  this.resetPassword(username,oldPassword,newPassword);
  alert("Your password has been Changed");
}
}
