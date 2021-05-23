import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NeedypeopleserviceService } from 'app/needypeopleservice.service';

@Component({
  selector: 'app-request-for-help',
  templateUrl: './request-for-help.component.html',
  styleUrls: ['./request-for-help.component.css']
})
export class RequestForHelpComponent implements OnInit {

  npid:number;

  constructor(private needySevice:NeedypeopleserviceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.npid=this.route.snapshot.params['id'];
    this.needySevice.requestForHelp(this.npid).subscribe(
      error=>{console.log(error)}
    );
    this.router.navigate(['needypeople',this.npid])
  }

}
