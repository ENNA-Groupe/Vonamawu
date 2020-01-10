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
var api_service_1 = require("./api.service");
var ngx_spinner_1 = require("ngx-spinner");
var registrer_data_1 = require("../data/registrer.data");
var vendeur_data_1 = require("../data/entities/vendeur.data");
var AuthService = /** @class */ (function () {
    function AuthService(api, spinner, register, vendeurData) {
        this.api = api;
        this.spinner = spinner;
        this.register = register;
        this.vendeurData = vendeurData;
        this.isAuth = false;
    }
    AuthService.prototype.setRegistrer = function (item) {
        this.rootId = item.id;
        this.register.set(item);
    };
    AuthService.prototype.changeIdentifiant = function (data) {
        this.api.login(data);
    };
    AuthService.prototype.changePassword = function (data) {
        var _this = this;
        this.message = "Opération en cours";
        this.spinner.show();
        data.id = this.rootId;
        return this.vendeurData.changePassword({ id: this.rootId, password: data.newPassword }).then(function (res) {
            if (res) {
                _this.spinner.hide();
                return true;
            }
            else {
                _this.spinner.hide();
            }
            setTimeout(function () {
                _this.spinner.hide();
            }, 30000);
        });
    };
    AuthService.prototype.login = function (data) {
        var _this = this;
        this.message = "connexion en cours";
        this.spinner.show();
        return this.api.login(data).then(function (res) {
            if (res.isAuth) {
                _this.isAuth = true;
                _this.setRegistrer(res.user);
                _this.spinner.hide();
                _this.api.getAll();
                return _this.isAuth;
            }
            else {
                _this.spinner.hide();
            }
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.message = "Deconnexion en cours";
        this.spinner.show();
        return this.api.logout({ id: this.rootId }).then(function (res) {
            _this.spinner.hide();
            _this.isAuth = false;
            return true;
        }).catch(function (e) {
            console.log(e);
            _this.spinner.hide();
        }).finally(function () { return _this.spinner.hide(); });
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [api_service_1.ApiService,
            ngx_spinner_1.NgxSpinnerService,
            registrer_data_1.Registrer,
            vendeur_data_1.VendeurData])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map