import { DonationType } from "./DonationType";

export class DonationItem{
    itemId:number;
    itemDescription:string;
    type:DonationType;
    // constructor(itemId:number,itemDescription:string,
    //     type:DonationType){
    //     this.itemId = itemId;
    //     this.itemDescription = itemDescription;
		// this.type = type;
    // }
    constructor(){}
    toString():string {
		return "DonationItem [itemId=" + this.itemId + 
        ", itemDescription=" + this.itemDescription + 
        ", type=" + this.type + "]";
	}
}