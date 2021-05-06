import { DonationItem } from "./DonationItem";
import { Donor } from "./Donor";

export class Donation{
    donationId:number;
    donationAmount:number;
    donationDate:Date;
    item:DonationItem;
    donor:Donor;
    constructor(donationId:number,donationAmount:number,
        donationDate:Date,item:DonationItem,donor:Donor){
        this.donationId = donationId;		
        this.donationAmount = donationAmount;
		this.donationDate = donationDate;	this.item = item;
		this.donor = donor;    
    }
    toString():string {
		return "Donation [donationId=" + this.donationId + 
        ", donationAmount=" + this.donationAmount + ", donationDate="
		+ this.donationDate + ", item=" + this.item + ", donor=" 
        + this.donor + "]";
	}
}