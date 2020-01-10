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
var categorie_data_1 = require("../../../data/entities/categorie.data");
var modal_service_1 = require("../../../services/modal.service");
var CatProfilComponent = /** @class */ (function () {
    function CatProfilComponent(api, categorieData, modal) {
        this.api = api;
        this.categorieData = categorieData;
        this.modal = modal;
        this.defaultItem = { id: null, nom: '', created_at: '', updated_at: '', deleted_at: '' };
        this.menu = 'infos';
        this.historiques = [];
        this.activites = [];
    }
    CatProfilComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cat = this.defaultItem;
        this.subs = this.modal.getData().subscribe(function (cat) {
            _this.cat = cat;
            _this.menu = 'infos';
            _this.categorieData.show(cat.id).subscribe(function (res) {
                _this.historiques = res.historiques;
            });
        });
    };
    CatProfilComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    CatProfilComponent.prototype.onRestore = function () {
        if (window.confirm("Voulez vous restaurer cette categorie?")) {
            this.categorieData.restore(this.cat);
            this.onClose();
        }
    };
    CatProfilComponent.prototype.onDelete = function () {
        this.categorieData.delete(this.cat);
        this.onClose();
    };
    CatProfilComponent.prototype.onResetPassword = function () {
    };
    CatProfilComponent.prototype.onClose = function () {
        $("#myProfilModal").hide();
        this.modal.setData({});
    };
    CatProfilComponent = __decorate([
        core_1.Component({
            selector: 'app-cat-profil',
            templateUrl: './cat-profil.component.html',
            styleUrls: ['./cat-profil.component.scss']
        }),
        __metadata("design:paramtypes", [api_service_1.ApiService,
            categorie_data_1.CategorieData,
            modal_service_1.ModalService])
    ], CatProfilComponent);
    return CatProfilComponent;
}());
exports.CatProfilComponent = CatProfilComponent;
//# sourceMappingURL=cat-profil.component.js.map