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
var Root = (function () {
    function Root() {
        this.title = "Introduction to Angular2";
    }
    Root = __decorate([
        angular2_1.Component({
            selector: 'root'
        }),
        angular2_1.View({
            templateUrl: "components/root/root.tpl.html" // note that absolute path should be used
        }), 
        __metadata('design:paramtypes', [])
    ], Root);
    return Root;
})();
exports.Root = Root;
