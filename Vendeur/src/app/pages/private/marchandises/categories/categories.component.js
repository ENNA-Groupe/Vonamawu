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
var router_1 = require("@angular/router");
var $ = require("jquery");
var categorie_data_1 = require("../../../../data/entities/categorie.data");
var produit_data_1 = require("../../../../data/entities/produit.data");
var modal_service_1 = require("../../../../services/modal.service");
var api_service_1 = require("../../../../services/api.service");
var search_service_1 = require("../../../../services/search.service");
var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(catData, produitData, router, modal, apiService, searchService) {
        this.catData = catData;
        this.produitData = produitData;
        this.router = router;
        this.modal = modal;
        this.apiService = apiService;
        this.searchService = searchService;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
    };
    CategoriesComponent.prototype.onGoToProduits = function (id) {
        this.router.navigate(['private/marchandises/produits/', id]);
    };
    CategoriesComponent.prototype.onShow = function (item) {
        this.modal.setData(item);
        $("#myProfilModal").show();
    };
    CategoriesComponent = __decorate([
        core_1.Component({
            selector: 'app-categories',
            templateUrl: './categories.component.html',
            styleUrls: ['./categories.component.scss']
        }),
        __metadata("design:paramtypes", [categorie_data_1.CategorieData,
            produit_data_1.ProduitData,
            router_1.Router,
            modal_service_1.ModalService,
            api_service_1.ApiService,
            search_service_1.SearchService])
    ], CategoriesComponent);
    return CategoriesComponent;
}());
exports.CategoriesComponent = CategoriesComponent;
//# sourceMappingURL=categories.component.js.map