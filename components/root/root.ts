/// <reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'root'
})

@View({
  templateUrl: "components/root/root.tpl.html" // note that absolute path should be used
})

export class Root {
  title: string;
  constructor() {
    this.title = "Introduction to Angular2";
  }
}


