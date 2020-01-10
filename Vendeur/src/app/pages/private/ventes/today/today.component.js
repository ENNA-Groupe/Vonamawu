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
var $ = require("jquery");
var vente_data_1 = require("../../../../data/entities/vente.data");
var modal_service_1 = require("../../../../services/modal.service");
var search_service_1 = require("../../../../services/search.service");
var api_service_1 = require("../../../../services/api.service");
var TodayComponent = /** @class */ (function () {
    function TodayComponent(venteData, modal, searchService, apiService) {
        this.venteData = venteData;
        this.modal = modal;
        this.searchService = searchService;
        this.apiService = apiService;
        this.showArchive = false;
        this.archives = [];
    }
    TodayComponent.prototype.ngOnInit = function () {
    };
    TodayComponent.prototype.onEdit = function (item) {
        this.modal.setData(item);
        $("#myEditModal").show();
    };
    TodayComponent.prototype.onAdd = function () {
        this.modal.setData({ id: null, numero: '', nomClient: '', contactClient: '', quantiteTotale: null, porteurs: [], data: [] });
        $("#myEditModal").show();
    };
    TodayComponent.prototype.onShow = function (item) {
        this.modal.setData(item);
        $("#myProfilModal").show();
    };
    TodayComponent.prototype.onDelete = function (item) {
        if (window.confirm("Voulez vous supprimer la vente " + item.numero + "?")) {
            this.venteData.delete(item);
        }
    };
    TodayComponent.prototype.onShowTrash = function () {
        this.showArchive = true;
        this.venteData.getTrash();
    };
    TodayComponent.prototype.onBackToData = function () {
        this.showArchive = false;
    };
    TodayComponent.prototype.onRestore = function (item) {
        if (window.confirm("Voulez vous restaurer la catégorie " + item.nom + "?")) {
            this.venteData.restore(item);
            this.onShowTrash();
        }
    };
    TodayComponent = __decorate([
        core_1.Component({
            selector: 'app-today',
            templateUrl: './today.component.html',
            styleUrls: ['./today.component.scss']
        }),
        __metadata("design:paramtypes", [vente_data_1.VenteData,
            modal_service_1.ModalService,
            search_service_1.SearchService,
            api_service_1.ApiService])
    ], TodayComponent);
    return TodayComponent;
}());
exports.TodayComponent = TodayComponent;
//# sourceMappingURL=today.component.js.map