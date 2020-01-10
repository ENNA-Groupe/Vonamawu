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
var registrer_data_1 = require("../../../data/registrer.data");
var auth_service_1 = require("../../../services/auth.service");
var WellcomeComponent = /** @class */ (function () {
    function WellcomeComponent(registrer, router, auth) {
        this.registrer = registrer;
        this.router = router;
        this.auth = auth;
    }
    WellcomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registrer.get().subscribe(function (user) { return _this.user = user; });
    };
    WellcomeComponent.prototype.onLogin = function () {
        this.router.navigate(['private']);
    };
    WellcomeComponent.prototype.onLogout = function () {
        var _this = this;
        this.auth.logout().then(function (ok) { return _this.router.navigate(['public/login']); });
    };
    WellcomeComponent = __decorate([
        core_1.Component({
            selector: 'app-wellcome',
            templateUrl: './wellcome.component.html',
            styleUrls: ['./wellcome.component.scss']
        }),
        __metadata("design:paramtypes", [registrer_data_1.Registrer,
            router_1.Router,
            auth_service_1.AuthService])
    ], WellcomeComponent);
    return WellcomeComponent;
}());
exports.WellcomeComponent = WellcomeComponent;
//# sourceMappingURL=wellcome.component.js.map