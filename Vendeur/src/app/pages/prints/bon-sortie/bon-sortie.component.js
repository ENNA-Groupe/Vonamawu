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
var print_service_1 = require("../../../services/print.service");
var BonSortieComponent = /** @class */ (function () {
    function BonSortieComponent(route, printService) {
        this.route = route;
        this.printService = printService;
        this.produitsArray = [];
        this.porteurs = [];
    }
    BonSortieComponent.prototype.ngOnInit = function () {
        this.invoiceIds = this.route.snapshot.params['invoiceIds'];
        console.log(this.invoiceIds);
        // this.invoiceDetails = this.invoiceIds.map(id => this.getInvoiceDetails(id));
        // Promise.all(this.invoiceIds).then(() => this.printService.onDataReady());
    };
    BonSortieComponent.prototype.getInvoiceDetails = function (invoiceId) {
        var amount = Math.floor((Math.random() * 100));
        return new Promise(function (resolve) {
            return setTimeout(function () { return resolve({ amount: amount }); }, 1000);
        });
    };
    BonSortieComponent = __decorate([
        core_1.Component({
            selector: 'app-bon-sortie',
            templateUrl: './bon-sortie.component.html',
            styleUrls: ['./bon-sortie.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            print_service_1.PrintService])
    ], BonSortieComponent);
    return BonSortieComponent;
}());
exports.BonSortieComponent = BonSortieComponent;
//# sourceMappingURL=bon-sortie.component.js.map