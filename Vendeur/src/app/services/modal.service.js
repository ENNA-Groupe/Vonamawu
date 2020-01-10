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
var rxjs_1 = require("rxjs");
var ModalService = /** @class */ (function () {
    function ModalService() {
        this.dataSubject = new rxjs_1.Subject();
        this.historiquesSubject = new rxjs_1.BehaviorSubject([]);
        this.activitesSubject = new rxjs_1.BehaviorSubject([]);
        this.categorieId = new rxjs_1.BehaviorSubject(0);
    }
    ModalService.prototype.setHistoriques = function (item) {
        this.historiquesSubject.next(item);
    };
    ModalService.prototype.getHistoriques = function () {
        return this.historiquesSubject.asObservable();
    };
    ModalService.prototype.setActivites = function (item) {
        console.log(item);
        this.activitesSubject.next(item);
    };
    ModalService.prototype.getActivites = function () {
        return this.activitesSubject.asObservable();
    };
    ModalService.prototype.getData = function () {
        return this.dataSubject.asObservable();
    };
    ModalService.prototype.setData = function (item) {
        this.dataSubject.next(item);
    };
    ModalService.prototype.getCategorieId = function () {
        return this.categorieId.asObservable();
    };
    ModalService.prototype.setCategorieId = function (id) {
        this.categorieId.next(id);
    };
    ModalService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ModalService);
    return ModalService;
}());
exports.ModalService = ModalService;
//# sourceMappingURL=modal.service.js.map