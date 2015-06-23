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
var Compose = (function () {
    function Compose() {
        this.title = "I am the composer";
    }
    Compose.prototype.add = function (elm) {
        this.message = elm.value;
    };
    Compose.prototype.onDoneTyping = function ($event) {
        if ($event.which === 13) {
            this.message = $event.target.value;
            $event.target.value = null;
        }
    };
    Compose = __decorate([
        angular2_1.Component({
            selector: "compose"
        }),
        angular2_1.View({
            templateUrl: "components/compose/compose.tpl.html",
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [])
    ], Compose);
    return Compose;
})();
exports.Compose = Compose;
