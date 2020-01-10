"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var entity_1 = require("./entity");
var data_service_1 = require("../../services/data.service");
var api_service_1 = require("../../services/api.service");
var VendeurData = /** @class */ (function (_super) {
    __extends(VendeurData, _super);
    function VendeurData(dataService, api) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.api = api;
        _this.dataService.vendeurs.subscribe(function (data) { return _this.data = data; });
        return _this;
    }
    VendeurData.prototype.add = function (data) {
        this.api.post('vendeurAdd', data);
    };
    VendeurData.prototype.edit = function (data) {
        this.api.post('vendeurUpdate', data);
    };
    VendeurData.prototype.delete = function (data) {
        this.api.post('vendeurDestroy', data);
    };
    VendeurData.prototype.restore = function (data) {
        this.api.post('vendeurRestore', data);
    };
    VendeurData.prototype.changePassword = function (data) {
        return this.api.post('vendeurChangePassword', data).then(function (res) {
            if (res)
                return true;
        });
    };
    VendeurData.prototype.resetPassword = function (data) {
        this.api.post('vendeurResetPassword', data);
    };
    VendeurData.prototype.changeIdentifiant = function (data) {
        this.api.post('vendeurChangeIdentifiant', data);
    };
    VendeurData.prototype.get = function () {
        var _this = this;
        this.api.get('vendeur').subscribe(function (res) { return _this.data = res; });
    };
    VendeurData.prototype.show = function (id) {
        return this.api.getRoute('vendeur', id);
    };
    VendeurData.prototype.getTrash = function () {
        var _this = this;
        this.api.get('vendeurTrash').subscribe(function (res) { return _this.archives = res; });
    };
    VendeurData.prototype.getActivities = function (id, date) {
        var params = id + "/" + date;
        return this.api.getRoute('vendeur', params);
    };
    VendeurData = __decorate([
        core_1.Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            api_service_1.ApiService])
    ], VendeurData);
    return VendeurData;
}(entity_1.Entity));
exports.VendeurData = VendeurData;
//# sourceMappingURL=vendeur.data.js.map