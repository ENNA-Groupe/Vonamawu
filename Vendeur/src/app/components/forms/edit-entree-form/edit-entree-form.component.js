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
var alert_service_1 = require("../../../services/alert.service");
var EditVenteFormComponent = /** @class */ (function () {
    function EditVenteFormComponent(venteData, catData, produitData, porteurData, modal, printService, alert) {
        this.venteData = venteData;
        this.catData = catData;
        this.produitData = produitData;
        this.porteurData = porteurData;
        this.modal = modal;
        this.printService = printService;
        this.alert = alert;
        this.categories = [];
        this.titre = "Ajout d'une vente";
        this.produitsArray = [];
        this.oldProduitsArray = [];
    }
    EditVenteFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.operation = { id: null, nomClient: '', contactClient: '', numero: '', quantiteTotale: null, created_at: '', deleted_at: '', updated_at: '', status: null };
        this.subs = this.modal.getData().subscribe(function (item) {
            console.log(item);
            _this.porteurs = _this.porteurData.data;
            if (item.id) {
                _this.titre = "Modification d'une vente";
                _this.operation = { id: item.id, nomClient: item.nomClient, contactClient: item.contactClient, numero: item.numero, quantiteTotale: item.quantiteTotale, created_at: item.created_at, deleted_at: item.deleted_at, updated_at: item.updated_at, status: item.status };
                _this.venteData.show(item.id).subscribe(function (prod) {
                    console.log(prod);
                    _this.categories = [];
                    _this.produitsArray = prod.produits;
                    prod.produits.forEach(function (element) {
                        _this.oldProduitsArray.push({ produit_id: element.produit_id, oldQuantite: element.quantite });
                    });
                    _this.categories = _this.produitsArray.filter(function (prod) { return _this.produitData.data.find(function (item) { return item.id === prod.categorie_id; }); }).map(function (x) { return x.categorie_id; });
                    console.log(_this.categories);
                    prod.porteurs.forEach(function (element) {
                        _this.porteurs.filter(function (item) { return item.id === element.porteur_id; }).map(function (item) { return item.isChecked = true; });
                    });
                });
            }
            else {
                _this.titre = "Ajout d'une vente";
                _this.operation = { id: null, nomClient: '', contactClient: '', numero: '', quantiteTotale: null, created_at: '', deleted_at: '', updated_at: '', status: null };
                _this.produitsArray = [];
                _this.categories = [];
                _this.porteurs.forEach(function (item) { return item.isChecked = false; });
                _this.onAddData();
            }
        });
    };
    EditVenteFormComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    EditVenteFormComponent.prototype.onAddData = function () {
        this.produitsArray.push({ produit_id: null, quantite: null });
    };
    EditVenteFormComponent.prototype.setQuantiteTotal = function (i) {
        var _this = this;
        this.operation.quantiteTotale = this.produitsArray.map(function (item) { return item.quantite; }).reduce(function (b, c) { return b + c; }, 0);
        if (i >= 0) {
            if (this.produitsArray[i].quantite === 0) {
                this.alert.toast({ type: 'danger', message: 'la quantite ne peut pas etre 0!' });
                this.onDelete(i);
            }
            else if (!this.operation.id) {
                console.log('not edit');
                var prod = this.produitData.data.find(function (prod) { return prod.id === +_this.produitsArray[i].produit_id; });
                if (prod.quantiteReel < this.produitsArray[i].quantite) {
                    this.alert.toast({ type: 'danger', message: 'Il ne reste plus que ' + prod.quantiteReel });
                    this.produitsArray[i].quantite = prod.quantiteReel;
                    this.setQuantiteTotal(i);
                }
            }
            else {
                var i2 = this.oldProduitsArray.indexOf(this.oldProduitsArray.find(function (item) { return item.produit_id === +_this.produitsArray[i].produit_id; }));
                var prod = this.produitData.data.find(function (prod) { return prod.id === +_this.produitsArray[i].produit_id; });
                console.log('i2 =' + i2);
                if (i2 != -1) {
                    console.log('yes i2');
                    console.log(this.oldProduitsArray[i2].oldQuantite + prod.quantiteReel);
                    console.log(this.produitsArray[i].quantite);
                    if (this.oldProduitsArray[i2].oldQuantite + prod.quantiteReel < this.produitsArray[i].quantite) {
                        this.alert.toast({ type: 'danger', message: 'Il ne reste plus que ' + (prod.quantiteReel + this.oldProduitsArray[i2].oldQuantite) });
                        this.produitsArray[i].quantite = prod.quantiteReel + this.oldProduitsArray[i2].oldQuantite;
                        this.setQuantiteTotal(i);
                    }
                }
                else {
                    console.log('not i2');
                    if (prod.quantiteReel < this.produitsArray[i].quantite) {
                        this.alert.toast({ type: 'danger', message: 'Il ne reste plus que ' + prod.quantiteReel });
                        this.produitsArray[i].quantite = prod.quantiteReel;
                        this.setQuantiteTotal(i);
                    }
                }
            }
        }
    };
    EditVenteFormComponent.prototype.produitController = function (i) {
        var _this = this;
        console.log('produit controlled');
        var long = this.produitsArray.filter(function (item) { return item.produit_id === _this.produitsArray[i].produit_id; }).length;
        console.log(long);
        if (long > 1) {
            this.alert.toast({ type: 'danger', message: 'Vous avez dejà ajouter ce produit' });
            this.onDelete(i);
        }
        this.setQuantiteTotal(i);
    };
    EditVenteFormComponent.prototype.onDelete = function (i) {
        this.produitsArray.splice(i, 1);
        this.categories.splice(i, 1);
        this.setQuantiteTotal();
    };
    EditVenteFormComponent.prototype.onSubmit = function () {
        if (!this.operation.nomClient) {
            this.alert.toast({ type: 'danger', message: 'Veuillez remplir le nom du client!' });
        }
        else if (this.porteurs.filter(function (item) { return item.isChecked; }).length === 0) {
            this.alert.toast({ type: 'danger', message: 'Veuillez choisir au moins un porteur!' });
        }
        else if (this.produitsArray.filter(function (item) { return item.produit_id === null || item.quantite === null || item.quantite <= 0; }).length > 0) {
            this.alert.toast({ type: 'danger', message: 'Veuillez remplir correctement toutes les cases!' });
        }
        else {
            var porteurIds = this.porteurs.filter(function (port) { return port.isChecked; }).map(function (item) { return { porteur_id: item.id }; });
            if (this.operation.id) {
                this.venteData.edit({ id: this.operation.id, numero: this.operation.numero, nomClient: this.operation.nomClient, contactClient: this.operation.contactClient, quantiteTotale: this.operation.quantiteTotale, porteurs: porteurIds, data: this.produitsArray });
                this.onApercu();
                // this.onPrintInvoice()
            }
            else {
                this.venteData.add({ id: this.operation.id, numero: this.operation.numero, nomClient: this.operation.nomClient, contactClient: this.operation.contactClient, quantiteTotale: this.operation.quantiteTotale, porteurs: porteurIds, data: this.produitsArray });
                this.onApercu();
                // this.onPrintInvoice()
            }
        }
    };
    EditVenteFormComponent.prototype.onPrintInvoice = function () {
        var invoiceIds = ["1"];
        this.printService
            .printDocument('invoice', invoiceIds);
    };
    EditVenteFormComponent.prototype.reset = function () {
    };
    EditVenteFormComponent.prototype.onApercu = function () {
        this.onClose();
        $("#myApercuModal").show();
    };
    EditVenteFormComponent.prototype.onClose = function () {
        $("#myEditModal").hide();
        this.porteurs = [];
        this.modal.setData({ id: null, nomClient: '', contactClient: '', numero: '', quantiteTotale: null, created_at: '', deleted_at: '', updated_at: '' });
    };
    EditVenteFormComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-vente-form',
            templateUrl: './edit-entree-form.component.html',
            styleUrls: ['./edit-entree-form.component.scss']
        }),
        __metadata("design:paramtypes", [vente_data_1.VenteData,
            categorie_data_1.CategorieData,
            produit_data_1.ProduitData,
            porteur_data_1.PorteurData,
            modal_service_1.ModalService,
            print_service_1.PrintService,
            alert_service_1.AlertService])
    ], EditVenteFormComponent);
    return EditVenteFormComponent;
}());
exports.EditVenteFormComponent = EditVenteFormComponent;
//# sourceMappingURL=edit-entree-form.component.js.map