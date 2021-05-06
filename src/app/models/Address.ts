export class Address{
    addressId:number;
    city :string;
    state:string;
    pin:string;
    landmark:string;
    constructor(addressId:number,city :string,state:string,
        pin:string,landmark:string){
        this.addressId = addressId;		this.city = city;
		this.state = state;				this.pin = pin;
		this.landmark = landmark;
    } 
    toString():string {
		return "Address [addressId=" + this.addressId + ", city=" 
        + this.city + ", state=" + this.state + ", pin=" + this.pin +
         ", landmark="+ this.landmark + "]";
	}
}