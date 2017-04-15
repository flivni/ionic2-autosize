var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Autosize = (function () {
    function Autosize(element) {
        this.element = element;
    }
    Autosize.prototype.onInput = function (textArea) {
        this.adjust();
    };
    Autosize.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.adjust(); }, 0);
    };
    Autosize.prototype.adjust = function () {
        var textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
        textArea.style.overflow = 'hidden';
        textArea.style.height = 'auto';
        textArea.style.height = textArea.scrollHeight + "px";
    };
    Object.defineProperty(Autosize.prototype, "onInput",
        __decorate([
            core_1.HostListener('input', ['$event.target']), 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', [HTMLTextAreaElement]), 
            __metadata('design:returntype', void 0)
        ], Autosize.prototype, "onInput", Object.getOwnPropertyDescriptor(Autosize.prototype, "onInput")));
    Autosize = __decorate([
        core_1.Directive({
            selector: 'ion-textarea[autosize]'
        }), 
        __metadata('design:paramtypes', [(typeof ElementRef !== 'undefined' && ElementRef) || Object])
    ], Autosize);
    return Autosize;
})();
exports.Autosize = Autosize;
//# sourceMappingURL=autosize.directive.js.map