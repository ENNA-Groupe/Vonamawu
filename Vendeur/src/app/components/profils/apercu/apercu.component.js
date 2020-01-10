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
var print_service_1 = require("../../../services/print.service");
var $ = require("jquery");
var modal_service_1 = require("../../../services/modal.service");
var vente_data_1 = require("../../../data/entities/vente.data");
var ApercuComponent = /** @class */ (function () {
    function ApercuComponent(printService, modal, venteData) {
        this.printService = printService;
        this.modal = modal;
        this.venteData = venteData;
    }
    ApercuComponent.prototype.ngOnInit = function () {
    };
    ApercuComponent.prototype.onPrint = function () {
        var invoiceIds = ["1"];
        this.onClose();
        this.printService.printDocument('invoice', invoiceIds);
    };
    ApercuComponent.prototype.onEdit = function () {
        var _this = this;
        this.subs = this.venteData.printable.subscribe(function (data) {
            console.log(data.operation);
            _this.modal.setData(data.operation);
            _this.onClose();
            $("#myEditModal").show();
        });
        this.subs.unsubscribe();
    };
    ApercuComponent.prototype.onClose = function () {
        $("#myApercuModal").hide();
    };
    ApercuComponent = __decorate([
        core_1.Component({
            selector: 'app-apercu',
            templateUrl: './apercu.component.html',
            styleUrls: ['./apercu.component.scss']
        }),
        __metadata("design:paramtypes", [print_service_1.PrintService,
            modal_service_1.ModalService,
            vente_data_1.VenteData])
    ], ApercuComponent);
    return ApercuComponent;
}());
exports.ApercuComponent = ApercuComponent;
//# sourceMappingURL=apercu.component.js.map