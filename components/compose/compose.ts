/// <reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View, NgFor} from 'angular2/angular2';

@Component({
	selector:"compose"
})

@View({
	templateUrl:"components/compose/compose.tpl.html",
	directives:[ NgFor ]
})

export class Compose {
	title:string;
	message:string;
	
	constructor(){
		this.title = "I am the composer";
		
	}
	add(elm){
		this.message = elm.value;
	}
	onDoneTyping($event){
		if($event.which===13){
			this.message = $event.target.value;
			$event.target.value = null;
		}
	}
}