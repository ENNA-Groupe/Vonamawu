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
var modal_service_1 = require("../../../../services/modal.service");
var registrer_data_1 = require("../../../../data/registrer.data");
var InfosComponent = /** @class */ (function () {
    function InfosComponent(modal, registrer) {
        this.modal = modal;
        this.registrer = registrer;
    }
    InfosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs = this.registrer.get().subscribe(function (user) {
            _this.user = user;
        });
    };
    InfosComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    InfosComponent = __decorate([
        core_1.Component({
            selector: 'app-infos',
            templateUrl: './infos.component.html',
            styleUrls: ['./infos.component.scss']
        }),
        __metadata("design:paramtypes", [modal_service_1.ModalService,
            registrer_data_1.Registrer])
    ], InfosComponent);
    return InfosComponent;
}());
exports.InfosComponent = InfosComponent;
//# sourceMappingURL=infos.component.js.map