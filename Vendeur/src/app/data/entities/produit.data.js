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
var ProduitData = /** @class */ (function (_super) {
    __extends(ProduitData, _super);
    function ProduitData(dataService, api) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.api = api;
        _this.dataService.produits.subscribe(function (data) { return _this.data = data; });
        return _this;
    }
    ProduitData.prototype.add = function (data) {
        this.api.post('produitAdd', data);
    };
    ProduitData.prototype.edit = function (data) {
        this.api.post('produitUpdate', data);
    };
    ProduitData.prototype.delete = function (data) {
        this.api.post('produitDestroy', data);
    };
    ProduitData.prototype.restore = function (data) {
        this.api.post('produitRestore', data);
    };
    ProduitData.prototype.get = function () {
        var _this = this;
        this.api.get('produit').subscribe(function (res) { return _this.data = res; });
    };
    ProduitData.prototype.show = function (id) {
        return this.api.getRoute('produit', id);
    };
    ProduitData.prototype.getTrash = function () {
        var _this = this;
        this.api.get('produitTrash').subscribe(function (res) { return _this.archives = res; });
    };
    ProduitData.prototype.getActivities = function (id, date) {
        var params = id + "/" + date;
        return this.api.getRoute('produit', params);
    };
    ProduitData = __decorate([
        core_1.Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            api_service_1.ApiService])
    ], ProduitData);
    return ProduitData;
}(entity_1.Entity));
exports.ProduitData = ProduitData;
//# sourceMappingURL=produit.data.js.map