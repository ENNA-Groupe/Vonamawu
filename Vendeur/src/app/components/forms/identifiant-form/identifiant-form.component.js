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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var $ = require("jquery");
var registrer_data_1 = require("../../../data/registrer.data");
var vendeur_data_1 = require("../../../data/entities/vendeur.data");
var IdentifiantFormComponent = /** @class */ (function () {
    function IdentifiantFormComponent(router, registrer, vendeurData) {
        this.router = router;
        this.registrer = registrer;
        this.vendeurData = vendeurData;
    }
    IdentifiantFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs = this.registrer.get().subscribe(function (item) {
            _this.user = item;
            _this.initForm();
        });
    };
    IdentifiantFormComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    IdentifiantFormComponent.prototype.initForm = function () {
        this.form = new forms_1.FormGroup({
            identifiant: new forms_1.FormControl(this.user.identifiant, [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(20)]),
        });
    };
    Object.defineProperty(IdentifiantFormComponent.prototype, "identifiant", {
        get: function () { return this.form.get('identifiant'); },
        enumerable: true,
        configurable: true
    });
    ;
    IdentifiantFormComponent.prototype.onSubmit = function () {
        this.user.identifiant = this.form.value.identifiant;
        this.vendeurData.changeIdentifiant(this.user);
        this.onClose();
    };
    IdentifiantFormComponent.prototype.onClose = function () {
        $("#myIdentifiantModal").hide();
    };
    IdentifiantFormComponent = __decorate([
        core_1.Component({
            selector: 'app-identifiant-form',
            templateUrl: './identifiant-form.component.html',
            styleUrls: ['./identifiant-form.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            registrer_data_1.Registrer,
            vendeur_data_1.VendeurData])
    ], IdentifiantFormComponent);
    return IdentifiantFormComponent;
}());
exports.IdentifiantFormComponent = IdentifiantFormComponent;
//# sourceMappingURL=identifiant-form.component.js.map