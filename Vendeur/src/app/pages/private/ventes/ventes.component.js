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
var vente_data_1 = require("../../../data/entities/vente.data");
var router_1 = require("@angular/router");
var VentesComponent = /** @class */ (function () {
    function VentesComponent(venteData, router) {
        this.venteData = venteData;
        this.router = router;
    }
    VentesComponent.prototype.ngOnInit = function () {
    };
    VentesComponent.prototype.search = function () {
        console.log(this.jourDebut);
        this.venteData.getActivities(this.jourDebut, this.jourFin);
        this.router.navigate(['private/sorties/date']);
    };
    VentesComponent = __decorate([
        core_1.Component({
            selector: 'app-ventes',
            templateUrl: './ventes.component.html',
            styleUrls: ['./ventes.component.scss']
        }),
        __metadata("design:paramtypes", [vente_data_1.VenteData,
            router_1.Router])
    ], VentesComponent);
    return VentesComponent;
}());
exports.VentesComponent = VentesComponent;
//# sourceMappingURL=ventes.component.js.map