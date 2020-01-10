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
var print_service_1 = require("../services/print.service");
var vente_data_1 = require("../data/entities/vente.data");
var InvoiceComponent = /** @class */ (function () {
    function InvoiceComponent(route, printService, venteData) {
        this.printService = printService;
        this.venteData = venteData;
        this.items = [];
        this.operation = { id: null, nomClient: '', contactClient: '', numero: '', quantiteTotale: null, created_at: '', deleted_at: '', updated_at: '', status: null };
        this.porteurs = [];
        this.vendeur = { nom: '', prenom: '' };
        // this.invoiceIds = route.snapshot.params['invoiceIds'];
        // let idOper = +this.invoiceIds[0];
    }
    InvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs = this.venteData.printable.subscribe(function (data) {
            console.log(data);
            _this.operation = data.operation;
            _this.items = data.produits;
            _this.porteurs = data.porteurs.map(function (port) { return port.porteurPrenom; });
            _this.vendeur.nom = data.historiques[0].nom;
            _this.vendeur.prenom = data.historiques[0].prenom;
            if (_this.printService.isApercu) {
                _this.printService.onDataReady();
            }
        });
    };
    InvoiceComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
        this.operation = null;
        this.items = [];
        this.porteurs = [];
        this.vendeur = null;
    };
    InvoiceComponent = __decorate([
        core_1.Component({
            selector: 'app-invoice',
            templateUrl: './invoice.component.html',
            styleUrls: ['./invoice.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            print_service_1.PrintService,
            vente_data_1.VenteData])
    ], InvoiceComponent);
    return InvoiceComponent;
}());
exports.InvoiceComponent = InvoiceComponent;
//# sourceMappingURL=invoice.component.js.map