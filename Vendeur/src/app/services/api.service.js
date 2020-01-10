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
var http_1 = require("@angular/common/http");
var data_service_1 = require("./data.service");
var alert_service_1 = require("./alert.service");
var registrer_data_1 = require("../data/registrer.data");
var rxjs_1 = require("rxjs");
var ApiService = /** @class */ (function () {
    function ApiService(http, dataService, alert, registrer) {
        var _this = this;
        this.http = http;
        this.dataService = dataService;
        this.alert = alert;
        this.registrer = registrer;
        this.headers = new http_1.HttpHeaders();
        url: string = 'http://vonamawu.ennagroupe.com/api/';
        // this.url = 'http://localhost/test/public/api/';
        this.intervallTimer = rxjs_1.interval(10000);
        this.headers.append('enctype', 'multipart/form-data');
        this.headers.append('Content-Type', 'Application/json');
        this.headers.append('X-Request-With', 'XMLHttpRequest');
        this.options = { headers: this.headers };
        this.registrer.get().subscribe(function (registrer) {
            _this.user = registrer;
            console.log(_this.user);
        });
    }
    ApiService.prototype.getAll = function () {
        var _this = this;
        this.http.get(this.url + 'data/vendeur/' + this.user.id, this.options).subscribe(function (res) {
            console.log(res);
            _this.dataService.setFirst(res);
            _this.subscription = _this.intervallTimer.subscribe(function () { return _this.getData(); });
        });
    };
    ApiService.prototype.get = function (route) {
        return this.http.get(this.url + route, this.options);
    };
    ApiService.prototype.getRoute = function (route, data) {
        return this.http.get(this.url + route + '/' + data, this.options);
    };
    ApiService.prototype.post = function (route, data) {
        var _this = this;
        if (this.user.isActive) {
            data.registrer_id = this.user.id;
            data.registrer_nom = this.user.nom;
            data.registrer_prenom = this.user.prenom;
            return new Promise(function (resolve, reject) {
                _this.http.post(_this.url + route, data, _this.options).subscribe(function (res) {
                    if (!res.data)
                        _this.alert.toast(res);
                    resolve(res);
                }, function (error) {
                    console.log(error);
                    _this.alert.toast({ type: 'danger', message: 'Desolé, l\'operation a échoué!' });
                    resolve();
                });
            });
        }
        else {
            this.alert.toast({ type: 'danger', message: 'Desolé, Vous etes desactivé!' });
        }
    };
    ApiService.prototype.login = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.url + 'vendeurLogin', data, _this.options).subscribe(function (res) {
                _this.alert.toast({ type: res.type, message: res.message });
                resolve(res);
            }, function (error) {
                console.log(error);
                _this.alert.toast({ type: 'danger', message: 'Echec de connexion!' });
                resolve({ isAuth: false });
            });
        });
    };
    ApiService.prototype.logout = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.url + 'vendeurLogout', data, _this.options).subscribe(function (res) {
                _this.alert.toast({ type: res.type, message: res.message });
                _this.subscription.unsubscribe();
                resolve(res);
            }, function (error) {
                console.log(error);
                _this.alert.toast({ type: 'danger', message: 'Echec de connexion!' });
                _this.subscription.unsubscribe();
                resolve({ isAuth: false });
            });
        });
    };
    ApiService.prototype.getLastOperationId = function (lastId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.url + 'reload', lastId, _this.options).subscribe(function (res) {
                resolve(res);
            }, function (error) {
                console.log(error);
                // this.alert.toast({type:'danger', message:'Echec de connexion!'});
                resolve({ isAuth: false });
            });
        });
    };
    ApiService.prototype.getData = function () {
        var _this = this;
        console.log(this.dataService.lastId);
        this.getRoute('data', 'vendeur/' + this.user.id + '/' + this.dataService.lastId).subscribe(function (res) {
            console.log(res);
            if (res)
                _this.dataService.setData(res);
        });
    };
    ApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient,
            data_service_1.DataService,
            alert_service_1.AlertService,
            registrer_data_1.Registrer])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map