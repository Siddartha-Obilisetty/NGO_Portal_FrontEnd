import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonorserviceService } from 'app/donorservice.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  error:string=null;

  constructor(private router:Router, private donorService:DonorserviceService) { }

  ngOnInit(): void {
  }

  forgotPassword(username:string){
    this.donorService.forgotPassword(username).subscribe(
      result=>{
        console.log(result);
       
      },
      (error)=>{
        this.error=error}
    );
    alert("Your password has been sent to mail ");
  }
  onSubmit(username:string){
    this.forgotPassword(username);
  }
}
