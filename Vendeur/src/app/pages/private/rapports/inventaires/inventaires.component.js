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
var $ = require("jquery");
var inventaire_data_1 = require("../../../../data/entities/inventaire.data");
var search_service_1 = require("../../../../services/search.service");
var modal_service_1 = require("../../../../services/modal.service");
var api_service_1 = require("../../../../services/api.service");
var InventairesComponent = /** @class */ (function () {
    function InventairesComponent(invData, searchService, router, modal, apiService) {
        this.invData = invData;
        this.searchService = searchService;
        this.router = router;
        this.modal = modal;
        this.apiService = apiService;
        this.showArchive = false;
        this.archives = [];
    }
    InventairesComponent.prototype.ngOnInit = function () {
    };
    InventairesComponent.prototype.onShow = function (item) {
        var _this = this;
        this.modal.setData(item);
        this.apiService.getRoute('inventaire', item.id).subscribe(function (res) {
            console.log(res);
            _this.modal.setHistoriques(res.historiques);
        }, function (error) { return console.log(error); });
        $("#myProfilModal").show();
    };
    InventairesComponent = __decorate([
        core_1.Component({
            selector: 'app-inventaires',
            templateUrl: './inventaires.component.html',
            styleUrls: ['./inventaires.component.scss']
        }),
        __metadata("design:paramtypes", [inventaire_data_1.InventaireData,
            search_service_1.SearchService,
            router_1.Router,
            modal_service_1.ModalService,
            api_service_1.ApiService])
    ], InventairesComponent);
    return InventairesComponent;
}());
exports.InventairesComponent = InventairesComponent;
//# sourceMappingURL=inventaires.component.js.map