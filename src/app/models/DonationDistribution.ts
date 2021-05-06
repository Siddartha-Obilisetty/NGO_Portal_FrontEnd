import { DonationDistributionStatus } from "./DonationDistributionStatus";
import { DonationItem } from "./DonationItem";
import { Employee } from "./Employee";
import { NeedyPeople } from "./NeedyPeople";

export class DonationDistribution{
    distributionId:number;
    amountDistributed:number;
    dateOfDistribution:Date;
    approvalOrRejectedDate:Date;
    status:DonationDistributionStatus;
    needyPeople:NeedyPeople;
    donationItem:DonationItem;
    employee:Employee;
    constructor(distributionId:number,amountDistributed:number,
        dateOfDistribution:Date,approvalOrRejectedDate:Date,
        status:DonationDistributionStatus,needyPeople:NeedyPeople,
        donationItem:DonationItem,employee:Employee){
        this.distributionId = distributionId;
    	this.amountDistributed = amountDistributed;
		this.dateOfDistribution = dateOfDistribution;	
        this.approvalOrRejectedDate = approvalOrRejectedDate;
		this.status = status;							
        this.needyPeople = needyPeople;
		this.donationItem = donationItem;
        this.employee = employee;
	
    }
    toString():string {
		return "DonationDistribution [distributionId=" + this.distributionId 
        + ", amountDistributed=" + this.amountDistributed + ", dateOfDistribution=" 
        + this.dateOfDistribution + ", approvalOrRejectedDate=" + this.approvalOrRejectedDate
		+ ", status=" + this.status + ", needyPeople=" + this.needyPeople + 
        ", donationItem=" + this.donationItem + ", employee=" + this.employee + "]";
	}
	
}