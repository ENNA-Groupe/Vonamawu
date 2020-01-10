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
var DateComponent = /** @class */ (function () {
    function DateComponent(sortieData, modal, searchService) {
        this.sortieData = sortieData;
        this.modal = modal;
        this.searchService = searchService;
        this.showArchive = false;
        this.archives = [];
    }
    DateComponent.prototype.ngOnInit = function () {
    };
    DateComponent.prototype.onEdit = function (item) {
        this.modal.setData(item);
        $("#myModal").show();
    };
    DateComponent.prototype.onAdd = function () {
        $("#myModal").show();
    };
    DateComponent.prototype.onShow = function (item) {
        this.modal.setData(item);
        $("#myProfilModal").show();
    };
    DateComponent.prototype.onDelete = function (item) {
        if (window.confirm("Voulez vous supprimer la vente " + item.nom + "?")) {
            this.sortieData.delete(item);
        }
    };
    DateComponent.prototype.onShowTrash = function () {
        this.showArchive = true;
        this.sortieData.getTrash();
    };
    DateComponent.prototype.onBackToData = function () {
        this.showArchive = false;
    };
    DateComponent.prototype.onRestore = function (item) {
        if (window.confirm("Voulez vous restaurer la catégorie " + item.nom + "?")) {
            this.sortieData.restore(item);
            this.onShowTrash();
        }
    };
    DateComponent = __decorate([
        core_1.Component({
            selector: 'app-date',
            templateUrl: './date.component.html',
            styleUrls: ['./date.component.scss']
        }),
        __metadata("design:paramtypes", [vente_data_1.VenteData,
            modal_service_1.ModalService,
            search_service_1.SearchService])
    ], DateComponent);
    return DateComponent;
}());
exports.DateComponent = DateComponent;
//# sourceMappingURL=date.component.js.map