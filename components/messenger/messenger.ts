/// <reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View, NgFor} from 'angular2/angular2';
import {Compose} from 'components/compose/compose';
import {MsgStore} from 'components/messenger/MsgStore';

@Component({
	selector:"messenger",
	appInjector:[MsgStore]
	
})

@View({
	templateUrl:"components/messenger/messenger.tpl.html",
	directives:[ NgFor, Compose ]
})

export class Messenger {
	title:string;
	messages:any[];
	grade:number;
	constructor(msgStore:MsgStore){
		this.title = "Messenger Component Title";
		this.messages = msgStore.getAll();
		this.grade = 1;
	}
}