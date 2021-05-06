export class DonationBox{
    ngoName:string;
    registrationNo:string;
    accountNo:string;
    totalCollection:number;
    constructor(ngoName:string,registrationNo:string,accountNo:string,
        totalCollection:number){
        this.ngoName = ngoName;		
        this.registrationNo = registrationNo;
		this.accountNo = accountNo;							
        this.totalCollection = totalCollection;
    }
    toString():string {
		return "DonationBox [ngoName=" + this.ngoName + ", registrationNo="
        + this.registrationNo + ", accountNo=" + this.accountNo
        +", totalCollection=" + this.totalCollection  + "]";
	}
}