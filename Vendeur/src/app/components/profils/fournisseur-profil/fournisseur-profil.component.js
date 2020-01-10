"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FournisseurProfilComponent = /** @class */ (function () {
    function FournisseurProfilComponent() {
    }
    FournisseurProfilComponent.prototype.ngOnInit = function () {
    };
    FournisseurProfilComponent = __decorate([
        core_1.Component({
            selector: 'app-fournisseur-profil',
            templateUrl: './fournisseur-profil.component.html',
            styleUrls: ['./fournisseur-profil.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], FournisseurProfilComponent);
    return FournisseurProfilComponent;
}());
exports.FournisseurProfilComponent = FournisseurProfilComponent;
//# sourceMappingURL=fournisseur-profil.component.js.map