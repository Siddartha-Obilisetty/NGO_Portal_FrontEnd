import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from 'app/adminservice.service';
import { Donor } from 'app/models/Donor';

@Component({
  selector: 'app-find-donor-by-id',
  templateUrl: './find-donor-by-id.component.html',
  styleUrls: ['./find-donor-by-id.component.css']
})
export class FindDonorByIdComponent implements OnInit {

  donorId:number;
  donor:Donor=new Donor();
  error:string=null;

  constructor(private adminService:AdminserviceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadDonorData();
  }

  loadDonorData(){
    this.donorId=this.route.snapshot.params['id'];
    this.adminService.findDonorById(this.donorId).subscribe(
      donor=>{
        this.donor=donor;
      },
      (error)=>{
        this.error=error}
    );
  }

  goToDonorList(){
    this.router.navigate(['admin/getAllDonors'])
  }
}
