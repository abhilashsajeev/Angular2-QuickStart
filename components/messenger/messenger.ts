/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component,View} from 'angular2/angular2';

@Component({
  selector: 'messenger'
})

@View({
  templateUrl: "components/messenger/messenger.tpl.html"
})

export class Messenger {
	title:string;
	messages: any[];
	constructor(){
		this.title = "Messenger manager";
		this.messages = [
			{title:"Hello",msg:"Hello how are you"},
			{title:"Meeting",msg:"This is a meeting message"},
			{title:"GoodBye",msg:"This is a good bye message"}
		];
	}
}
