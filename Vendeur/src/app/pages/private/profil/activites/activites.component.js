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
var registrer_data_1 = require("../../../../data/registrer.data");
var vendeur_data_1 = require("../../../../data/entities/vendeur.data");
var ActivitesComponent = /** @class */ (function () {
    function ActivitesComponent(registrer, vendeurData) {
        this.registrer = registrer;
        this.vendeurData = vendeurData;
        this.activites = [];
    }
    ActivitesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs = this.registrer.get().subscribe(function (user) {
            _this.vendeurData.show(user.id).subscribe(function (res) {
                console.log(res);
                _this.activites = res.activites;
            }, function (error) { return console.log(error); });
        });
    };
    ActivitesComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    ActivitesComponent = __decorate([
        core_1.Component({
            selector: 'app-activites',
            templateUrl: './activites.component.html',
            styleUrls: ['./activites.component.scss']
        }),
        __metadata("design:paramtypes", [registrer_data_1.Registrer,
            vendeur_data_1.VendeurData])
    ], ActivitesComponent);
    return ActivitesComponent;
}());
exports.ActivitesComponent = ActivitesComponent;
//# sourceMappingURL=activites.component.js.map