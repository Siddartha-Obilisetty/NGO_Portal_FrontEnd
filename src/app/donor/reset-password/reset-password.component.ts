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
 resetPassword(){
  this.donorService.resetPassword(this.username,this.oldPassword,this.newPassword).subscribe(
    result=>{
      console.log(result);
     
    },
    (error)=>{
      this.error=error}
  );
  alert("Your password has been Changed");
 }


 onSubmit(){
  this.resetPassword();
}
}
