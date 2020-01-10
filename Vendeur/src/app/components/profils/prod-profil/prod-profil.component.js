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
var api_service_1 = require("../../../services/api.service");
var produit_data_1 = require("../../../data/entities/produit.data");
var modal_service_1 = require("../../../services/modal.service");
var ProdProfilComponent = /** @class */ (function () {
    function ProdProfilComponent(api, produitData, modal) {
        this.api = api;
        this.produitData = produitData;
        this.modal = modal;
        this.defaultItem = { id: null, categorie_id: null, nom: '', quantiteReel: null, quantiteStock: null, quantiteCritique: null, isChecking: 0, created_at: '', updated_at: '', deleted_at: '' };
        this.menu = 'infos';
        this.historiques = [];
        this.activites = [];
    }
    ProdProfilComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.produit = this.defaultItem;
        this.subs = this.modal.getData().subscribe(function (produit) {
            _this.produit = produit;
            _this.menu = 'infos';
            _this.produitData.show(produit.id).subscribe(function (res) {
                _this.historiques = res.historiques;
                _this.activites = res.activites;
            });
        });
    };
    ProdProfilComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    ProdProfilComponent.prototype.onRestore = function () {
        if (window.confirm("Voulez vous restaurer cet produit?")) {
            this.produitData.restore(this.produit);
            this.onClose();
        }
    };
    ProdProfilComponent.prototype.onDelete = function () {
        this.produitData.delete(this.produit);
        this.onClose();
    };
    ProdProfilComponent.prototype.onClose = function () {
        $("#myProfilModal").hide();
        this.modal.setData({});
    };
    ProdProfilComponent = __decorate([
        core_1.Component({
            selector: 'app-prod-profil',
            templateUrl: './prod-profil.component.html',
            styleUrls: ['./prod-profil.component.scss']
        }),
        __metadata("design:paramtypes", [api_service_1.ApiService,
            produit_data_1.ProduitData,
            modal_service_1.ModalService])
    ], ProdProfilComponent);
    return ProdProfilComponent;
}());
exports.ProdProfilComponent = ProdProfilComponent;
//# sourceMappingURL=prod-profil.component.js.map