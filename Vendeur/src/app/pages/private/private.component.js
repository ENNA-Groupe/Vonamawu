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
var search_service_1 = require("../../services/search.service");
var registrer_data_1 = require("../../data/registrer.data");
var auth_service_1 = require("../../services/auth.service");
var PrivateComponent = /** @class */ (function () {
    function PrivateComponent(searchService, registrer, authService, router) {
        this.searchService = searchService;
        this.registrer = registrer;
        this.authService = authService;
        this.router = router;
    }
    PrivateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs = this.registrer.get().subscribe(function (user) {
            _this.user = user;
            if (_this.user.deleted_at)
                _this.onLogout();
        });
    };
    PrivateComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    PrivateComponent.prototype.showDropdown = function () {
        $('.dropcard').toggle();
        $(".content").click(function () {
            $('.dropcard').hide();
        });
    };
    PrivateComponent.prototype.onLogout = function () {
        var _this = this;
        this.authService.logout().then(function (ok) {
            if (ok) {
                _this.router.navigate(['/public']);
            }
        });
    };
    PrivateComponent = __decorate([
        core_1.Component({
            selector: 'app-private',
            templateUrl: './private.component.html',
            styleUrls: ['./private.component.scss']
        }),
        __metadata("design:paramtypes", [search_service_1.SearchService,
            registrer_data_1.Registrer,
            auth_service_1.AuthService,
            router_1.Router])
    ], PrivateComponent);
    return PrivateComponent;
}());
exports.PrivateComponent = PrivateComponent;
//# sourceMappingURL=private.component.js.map