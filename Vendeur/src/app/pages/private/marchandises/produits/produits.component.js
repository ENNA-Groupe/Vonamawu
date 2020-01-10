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
var produit_data_1 = require("../../../../data/entities/produit.data");
var api_service_1 = require("../../../../services/api.service");
var modal_service_1 = require("../../../../services/modal.service");
var search_service_1 = require("../../../../services/search.service");
var ProduitsComponent = /** @class */ (function () {
    function ProduitsComponent(route, produitData, apiService, modal, searchService) {
        this.route = route;
        this.produitData = produitData;
        this.apiService = apiService;
        this.modal = modal;
        this.searchService = searchService;
    }
    ProduitsComponent.prototype.ngOnInit = function () {
        this.id = +this.route.snapshot.params['id'];
        console.log(this.id);
    };
    ProduitsComponent.prototype.onShow = function (item) {
        this.modal.setData(item);
        $("#myProfilModal").show();
    };
    ProduitsComponent = __decorate([
        core_1.Component({
            selector: 'app-produits',
            templateUrl: './produits.component.html',
            styleUrls: ['./produits.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            produit_data_1.ProduitData,
            api_service_1.ApiService,
            modal_service_1.ModalService,
            search_service_1.SearchService])
    ], ProduitsComponent);
    return ProduitsComponent;
}());
exports.ProduitsComponent = ProduitsComponent;
//# sourceMappingURL=produits.component.js.map