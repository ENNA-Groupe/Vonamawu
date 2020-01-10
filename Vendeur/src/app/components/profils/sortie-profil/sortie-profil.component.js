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
var vente_data_1 = require("../../../data/entities/vente.data");
var categorie_data_1 = require("../../../data/entities/categorie.data");
var produit_data_1 = require("../../../data/entities/produit.data");
var porteur_data_1 = require("../../../data/entities/porteur.data");
var modal_service_1 = require("../../../services/modal.service");
var print_service_1 = require("../../../services/print.service");
var SortieProfilComponent = /** @class */ (function () {
    function SortieProfilComponent(venteData, catData, produitData, porteurData, modal, print) {
        this.venteData = venteData;
        this.catData = catData;
        this.produitData = produitData;
        this.porteurData = porteurData;
        this.modal = modal;
        this.print = print;
        this.categories = [];
        this.titre = "";
        this.produitsArray = [];
        this.porteurs = [];
        this.vendeur = { nom: '', prenom: '' };
        this.magasinier = { nom: '', prenom: '' };
    }
    SortieProfilComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.operation = { id: null, nomClient: '', contactClient: '', numero: '', quantiteTotale: null, created_at: '', deleted_at: '', updated_at: '', status: 2 };
        this.subs = this.modal.getData().subscribe(function (item) {
            console.log(item);
            _this.produitsArray = [];
            if (item.id) {
                _this.titre = "Vente numero " + item.numero;
                _this.operation = item;
                _this.venteData.show(item.id).subscribe(function (prod) {
                    console.log(prod);
                    _this.produitsArray = prod.produits;
                    _this.porteurs = prod.porteurs.map(function (port) { return port.porteurPrenom; });
                    _this.vendeur.nom = prod.historiques[0].nom;
                    _this.vendeur.prenom = prod.historiques[0].prenom;
                    _this.magasinier = prod.magasinier[0];
                });
            }
        });
    };
    SortieProfilComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    // onPrint() {
    //   this.venteData.item = this.operation;
    //   this.print.printDocument('invoice',["1"]);
    // }
    SortieProfilComponent.prototype.onDelete = function () {
        this.venteData.delete(this.operation);
        this.onClose();
    };
    SortieProfilComponent.prototype.onClose = function () {
        this.produitsArray = [];
        $("#myProfilModal").hide();
    };
    SortieProfilComponent = __decorate([
        core_1.Component({
            selector: 'app-sortie-profil',
            templateUrl: './sortie-profil.component.html',
            styleUrls: ['./sortie-profil.component.scss']
        }),
        __metadata("design:paramtypes", [vente_data_1.VenteData,
            categorie_data_1.CategorieData,
            produit_data_1.ProduitData,
            porteur_data_1.PorteurData,
            modal_service_1.ModalService,
            print_service_1.PrintService])
    ], SortieProfilComponent);
    return SortieProfilComponent;
}());
exports.SortieProfilComponent = SortieProfilComponent;
//# sourceMappingURL=sortie-profil.component.js.map