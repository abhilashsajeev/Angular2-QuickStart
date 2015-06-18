/// <reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {Messenger} from 'components/messenger/messenger';

@Component({
  selector: 'root'
})

@View({
  templateUrl: "components/root/root.tpl.html",// note that absolute path should be used
  directives:[Messenger] /*Registering messenger with root*/
})

export class Root {
  title: string;
  constructor() {
    this.title = "Introduction to Angular2";
  }
}


