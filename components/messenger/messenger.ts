/// <reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View, NgFor} from 'angular2/angular2';

@Component({
	selector:"messenger"
})

@View({
	templateUrl:"components/messenger/messenger.tpl.html",
	directives:[ NgFor ]
})

export class Messenger {
	title:string;
	messages:any[];
	grade:number;
	constructor(){
		this.title = "Messenger messenger";
		this.messages = [
			{title:"Hello" ,msg:"This is Hello Message"},
			{title:"Meeting" ,msg:"This is Meeting Message"},
			{title:"Good bye" ,msg:"This is Good bye Message"}
		];
		this.grade = 1;
	}
}