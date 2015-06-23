/// <reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View} from 'angular2/angular2';

@Component({
	selector:"messenger"
})

@View({
	templateUrl:"components/messenger/messenger.tpl.html"
})

export class Messenger {
	title:string;
	messages:any[];
	constructor(){
		this.title = "Messageer messenger";
		this.messages = [
			{title:"Hello" ,msg:"This is Hello Message"},
			{title:"Meeting" ,msg:"This is Meeting Message"},
			{title:"Good bye" ,msg:"This is Good bye Message"}
		];
	}
}