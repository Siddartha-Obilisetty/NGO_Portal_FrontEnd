import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonorserviceService } from 'app/donorservice.service';
import { Donor } from 'app/models/Donor';

@Component({
  selector: 'app-register-donor',
  templateUrl: './register-donor.component.html',
  styleUrls: ['./register-donor.component.css']
})
export class RegisterDonorComponent implements OnInit {
 donor:Donor=new Donor();
  constructor(private router:Router, private donorService:DonorserviceService) { }

  ngOnInit(): void {
  }

  createDonor(){
    this.donorService.registerDonor(this.donor).subscribe(
      result=>{
        console.log(result);
       
      },
      error=>console.log(error)
    );
    alert("donor added succesfully");
  }
  
 onSubmit(){
   this.createDonor();
 }
}
