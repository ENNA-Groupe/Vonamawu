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
var categorie_data_1 = require("../../../data/entities/categorie.data");
var produit_data_1 = require("../../../data/entities/produit.data");
var search_service_1 = require("../../../services/search.service");
var MarchandisesComponent = /** @class */ (function () {
    function MarchandisesComponent(catData, produitData, serchService) {
        this.catData = catData;
        this.produitData = produitData;
        this.serchService = serchService;
        this.id = 0;
    }
    MarchandisesComponent.prototype.ngOnInit = function () {
    };
    MarchandisesComponent = __decorate([
        core_1.Component({
            selector: 'app-marchandises',
            templateUrl: './marchandises.component.html',
            styleUrls: ['./marchandises.component.scss']
        }),
        __metadata("design:paramtypes", [categorie_data_1.CategorieData,
            produit_data_1.ProduitData,
            search_service_1.SearchService])
    ], MarchandisesComponent);
    return MarchandisesComponent;
}());
exports.MarchandisesComponent = MarchandisesComponent;
//# sourceMappingURL=marchandises.component.js.map