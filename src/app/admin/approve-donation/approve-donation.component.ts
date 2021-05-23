import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from 'app/adminservice.service';
import { DonationDistributionStatus } from 'app/models/DonationDistributionStatus';

@Component({
  selector: 'app-approve-donation',
  templateUrl: './approve-donation.component.html',
  styleUrls: ['./approve-donation.component.css']
})
export class ApproveDonationComponent implements OnInit {

  distibutionId:number;
  status:DonationDistributionStatus;
  constructor(private adminService:AdminserviceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.distibutionId=this.route.snapshot.params['id'];
    this.status=this.route.snapshot.params['status'];
    this.approve();
    this.router.navigate(['admin/getAllDonations'])
  }

  approve(){
    if(this.status==DonationDistributionStatus.APPROVED){
      alert("already approved");
    }
    else{
      this.adminService.approveDonation(this.distibutionId).subscribe(
        result=>{
          console.log(result);
        }
      );
    }
  }
}
