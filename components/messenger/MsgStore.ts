export class MsgStore {
	msgs:any[];
	constructor(){
		this.msgs = [
			{title:"Hello" ,msg:"This is Hello Message"},
			{title:"Meeting" ,msg:"This is Meeting Message"},
			{title:"Good bye" ,msg:"This is Good bye Message"}
		];
	}
	getAll(){
		return this.msgs
	}
}