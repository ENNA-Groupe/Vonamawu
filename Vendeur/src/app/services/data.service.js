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
var rxjs_1 = require("rxjs");
var registrer_data_1 = require("../data/registrer.data");
var DataService = /** @class */ (function () {
    function DataService(registrer) {
        this.registrer = registrer;
        this.admins = new rxjs_1.BehaviorSubject([]);
        this.vendeurs = new rxjs_1.BehaviorSubject([]);
        this.porteurs = new rxjs_1.BehaviorSubject([]);
        this.magasiniers = new rxjs_1.BehaviorSubject([]);
        this.fournisseurs = new rxjs_1.BehaviorSubject([]);
        this.categories = new rxjs_1.BehaviorSubject([]);
        this.produits = new rxjs_1.BehaviorSubject([]);
        this.sorties = new rxjs_1.BehaviorSubject([]);
        this.entrees = new rxjs_1.BehaviorSubject([]);
        this.inventaires = new rxjs_1.BehaviorSubject([]);
        this.notifications = new rxjs_1.BehaviorSubject([]);
        this.newNotifications = new rxjs_1.BehaviorSubject([]);
        this.connexions = new rxjs_1.BehaviorSubject([]);
        this.bilans = new rxjs_1.BehaviorSubject([]);
        this.stats = new rxjs_1.BehaviorSubject([]);
    }
    DataService.prototype.setFirst = function (res) {
        if (res.admin)
            this.admins.next(res.admin);
        if (res.vendeur)
            this.vendeurs.next(res.vendeur);
        if (res.magasinier)
            this.magasiniers.next(res.magasinier);
        if (res.porteur)
            this.porteurs.next(res.porteur);
        if (res.fournisseur)
            this.fournisseurs.next(res.fournisseur);
        if (res.categorie)
            this.categories.next(res.categorie);
        if (res.produit)
            this.produits.next(res.produit);
        if (res.sortie)
            this.sorties.next(res.sortie);
        if (res.entree)
            this.entrees.next(res.entree);
        if (res.inventaire)
            this.inventaires.next(res.inventaire);
        if (res.connexion)
            this.connexions.next(res.connexion);
        if (res.notification) {
            this.lastId = res.notification[0].id;
            this.notifications.next(res.notification);
        }
        if (res.bilan)
            this.bilans.next(res.bilan);
        if (res.stat)
            this.stats.next(res.stat);
    };
    DataService.prototype.setData = function (data) {
        var _this = this;
        data.forEach(function (res) {
            if (res.admin)
                _this.admins.next(res.admin);
            if (res.vendeur) {
                _this.vendeurs.next(res.vendeur);
                var item = res.vendeur.find(function (item) { return item.id === _this.registrer.registrerId; });
                _this.registrer.set(item);
            }
            if (res.magasinier)
                _this.magasiniers.next(res.magasinier);
            if (res.porteur)
                _this.porteurs.next(res.porteur);
            if (res.fournisseur)
                _this.fournisseurs.next(res.fournisseur);
            if (res.categorie)
                _this.categories.next(res.categorie);
            if (res.produit)
                _this.produits.next(res.produit);
            if (res.sortie)
                _this.sorties.next(res.sortie);
            if (res.entree)
                _this.entrees.next(res.entree);
            if (res.inventaire)
                _this.inventaires.next(res.inventaire);
            if (res.connexion)
                _this.connexions.next(res.connexion);
            if (res.notification) {
                _this.lastId = res.notification[0].id;
                _this.newNotifications.next(res.notification);
            }
            if (res.bilan)
                _this.bilans.next(res.bilan);
            if (res.stat)
                _this.stats.next(res.stat);
        });
    };
    DataService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [registrer_data_1.Registrer])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map