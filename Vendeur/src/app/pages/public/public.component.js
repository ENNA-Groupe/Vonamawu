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
var auth_service_1 = require("../../services/auth.service");
var PublicComponent = /** @class */ (function () {
    function PublicComponent(auth) {
        this.auth = auth;
    }
    PublicComponent.prototype.ngOnInit = function () {
        // $("#hero .rotating").Morphext({
        //   animation: "flipInX",
        //   separator: ",",
        //   speed: 3000
        // });
    };
    PublicComponent = __decorate([
        core_1.Component({
            selector: 'app-public',
            templateUrl: './public.component.html',
            styleUrls: ['./public.component.scss']
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], PublicComponent);
    return PublicComponent;
}());
exports.PublicComponent = PublicComponent;
//# sourceMappingURL=public.component.js.map