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
var api_service_1 = require("../../services/api.service");
var data_service_1 = require("../../services/data.service");
var rxjs_1 = require("rxjs");
var VenteData = /** @class */ (function (_super) {
    __extends(VenteData, _super);
    function VenteData(dataService, api) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.api = api;
        _this.printable = new rxjs_1.BehaviorSubject({ operation: { id: null, nomClient: '', contactClient: '', numero: '', quantiteTotale: null, created_at: '', deleted_at: '', updated_at: '', status: null }, historiques: [{ nom: '', prenom: '' }], porteurs: [], produits: [] });
        _this.dataService.sorties.subscribe(function (data) { return _this.data = data; });
        return _this;
    }
    VenteData.prototype.add = function (data) {
        var _this = this;
        return this.api.post('sortieAdd', data).then(function (res) {
            if (res.data)
                _this.printable.next(res.data);
        });
    };
    VenteData.prototype.edit = function (data) {
        var _this = this;
        this.api.post('sortieUpdate', data).then(function (res) {
            if (res.data)
                _this.printable.next(res.data);
        });
    };
    VenteData.prototype.delete = function (data) {
        this.api.post('sortieDestroy', data);
    };
    VenteData.prototype.restore = function (data) {
        this.api.post('sortieRestore', data);
    };
    VenteData.prototype.get = function () {
        var _this = this;
        this.api.get('sortie').subscribe(function (res) { return _this.data = res; });
    };
    VenteData.prototype.show = function (id) {
        return this.api.getRoute('sortie', id);
    };
    VenteData.prototype.getTrash = function () {
        var _this = this;
        this.api.get('sortieTrash').subscribe(function (res) { return _this.archives = res; });
    };
    VenteData.prototype.getActivities = function (dateDebut, dateFin) {
        var _this = this;
        this.activities = [];
        var date = dateDebut + '/' + dateFin;
        this.api.getRoute('sortie', date).subscribe(function (res) { return _this.activities = res; });
    };
    VenteData = __decorate([
        core_1.Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            api_service_1.ApiService])
    ], VenteData);
    return VenteData;
}(entity_1.Entity));
exports.VenteData = VenteData;
//# sourceMappingURL=vente.data.js.map