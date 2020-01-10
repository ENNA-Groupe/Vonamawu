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
var InventaireData = /** @class */ (function (_super) {
    __extends(InventaireData, _super);
    function InventaireData(dataService, api) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.api = api;
        _this.dataService.inventaires.subscribe(function (data) { return _this.data = data; });
        return _this;
    }
    InventaireData.prototype.getProduits = function (id) {
        return this.api.getRoute('inventaire', id).subscribe(function (data) { return data; });
    };
    InventaireData.prototype.add = function (route, data) {
        this.api.post(route, data);
    };
    InventaireData.prototype.edit = function (route, data) {
        console.log(data);
        this.api.post(route, data);
    };
    InventaireData.prototype.delete = function (route, data) {
        data.deleted_at = 'new';
        this.api.post(route, data);
    };
    InventaireData = __decorate([
        core_1.Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            api_service_1.ApiService])
    ], InventaireData);
    return InventaireData;
}(entity_1.Entity));
exports.InventaireData = InventaireData;
//# sourceMappingURL=inventaire.data.js.map