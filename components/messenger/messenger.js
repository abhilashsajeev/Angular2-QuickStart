if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../../typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var compose_1 = require('components/compose/compose');
var MsgStore_1 = require('components/messenger/MsgStore');
var Messenger = (function () {
    function Messenger(msgStore) {
        this.title = "Messenger Component Title";
        this.messages = msgStore.getAll();
        this.grade = 1;
    }
    Messenger = __decorate([
        angular2_1.Component({
            selector: "messenger",
            appInjector: [MsgStore_1.MsgStore]
        }),
        angular2_1.View({
            templateUrl: "components/messenger/messenger.tpl.html",
            directives: [angular2_1.NgFor, compose_1.Compose]
        }), 
        __metadata('design:paramtypes', [MsgStore_1.MsgStore])
    ], Messenger);
    return Messenger;
})();
exports.Messenger = Messenger;
