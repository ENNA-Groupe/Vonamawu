"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SearchEntityPipe = /** @class */ (function () {
    function SearchEntityPipe() {
    }
    SearchEntityPipe.prototype.transform = function (value, args) {
        if (!value)
            return [];
        if (!args)
            return value;
        return value.filter(function (item) {
            if (item.categorie)
                return item.categorie.toLowerCase().includes(args.toLowerCase()) || item.nom.toLowerCase().includes(args.toLowerCase());
            else
                return item.nom.toLowerCase().includes(args.toLowerCase());
        });
    };
    SearchEntityPipe = __decorate([
        core_1.Pipe({
            name: 'searchEntity'
        })
    ], SearchEntityPipe);
    return SearchEntityPipe;
}());
exports.SearchEntityPipe = SearchEntityPipe;
//# sourceMappingURL=search-entity.pipe.js.map