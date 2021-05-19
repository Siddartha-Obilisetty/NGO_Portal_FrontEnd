import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from 'app/adminservice.service';
import { DonationDistribution } from 'app/models/DonationDistribution';
import { DonationDistributionStatus } from 'app/models/DonationDistributionStatus';

@Component({
  selector: 'app-get-all-donations',
  templateUrl: './get-all-donations.component.html',
  styleUrls: ['./get-all-donations.component.css']
})
export class GetAllDonationsComponent implements OnInit {

  donationList:DonationDistribution[]=[];

  constructor(private adminService:AdminserviceService,private router:Router) { }

  ngOnInit(): void {
    this.loadDonations();
  }

  loadDonations(){
    this.adminService.getAllDonations().subscribe(
      donations=>{
        this.donationList=donations;
      },
      error=>console.log(error)
    );
  }

  approveDonation(distributionId:number,status:DonationDistributionStatus){
    if(status==DonationDistributionStatus.APPROVED){
      alert("already approved");
    }
    else{
      this.adminService.approveDonation(distributionId);
    }

  }
}
