import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonorserviceService } from 'app/donorservice.service';
import { Donor } from 'app/models/Donor';

@Component({
  selector: 'app-login-donor',
  templateUrl: './login-donor.component.html',
  styleUrls: ['./login-donor.component.css']
})
export class LoginDonorComponent implements OnInit {
  donor:Donor=new Donor();
  error: string=null;
  constructor(private router:Router, private donorService:DonorserviceService) { }

  ngOnInit(): void {
  }
  login(){
    console.log(this.donor.username);
    this.donorService.login(this.donor.username,this.donor.password).subscribe(
      donor=>{
        console.log(donor);
        this.donor=donor;
        this.loadDonorHomePage(this.donor.donorId);
      },
      (error)=>{
        this.error=error}
    );
  }
  loadDonorHomePage(donorId: number) {
    this.router.navigate(['donor',donorId]);
  }
}
