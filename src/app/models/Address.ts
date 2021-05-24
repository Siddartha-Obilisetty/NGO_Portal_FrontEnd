export class Address{
    addressId:number=0;
    city :string;
    state:string;
    pin:string;
    landmark:string;
    constructor(){}
    // constructor(addressId:number,city :string,state:string,
    //     pin:string,landmark:string){
    //     this.addressId = addressId;		this.city = city;
		// this.state = state;				this.pin = pin;
		// this.landmark = landmark;
    // } 
    toString():string {
		return "addressId=" + this.addressId + ", city=" 
        + this.city + ", state=" + this.state + ", pin=" + this.pin +
         ", landmark="+ this.landmark ;
	}
}