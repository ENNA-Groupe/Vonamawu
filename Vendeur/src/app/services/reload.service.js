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
var ReloadService = /** @class */ (function () {
    function ReloadService(api) {
        this.api = api;
    }
    ReloadService.prototype.start = function () {
        var _this = this;
        window.setInterval(function () {
            _this.api.getLastOperationId(_this.lastId).then(function (data) {
                data.operationsId.forEach(function (element) {
                    _this.api.get(element.route);
                }, 30000);
                _this.lastId = data.lastId;
            });
        });
    };
    ReloadService.prototype.stop = function () {
    };
    ReloadService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [api_service_1.ApiService])
    ], ReloadService);
    return ReloadService;
}());
exports.ReloadService = ReloadService;
//# sourceMappingURL=reload.service.js.map