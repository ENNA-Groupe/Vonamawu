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
var PasswordFormComponent = /** @class */ (function () {
    function PasswordFormComponent(formBuilder, router, vendeurData, registrer) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.vendeurData = vendeurData;
        this.registrer = registrer;
    }
    PasswordFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs = this.registrer.get().subscribe(function (item) {
            _this.initForm(item);
        });
    };
    PasswordFormComponent.prototype.initForm = function (item) {
        this.resetForm = this.formBuilder.group({
            id: new forms_1.FormControl(''),
            newPassword: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(8), forms_1.Validators.maxLength(20)]),
            verifPassword: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(8), forms_1.Validators.maxLength(20)])
        }, {
            validator: this.mustMatch('newPassword', 'verifPassword')
        });
    };
    Object.defineProperty(PasswordFormComponent.prototype, "f", {
        get: function () { return this.resetForm.controls; },
        enumerable: true,
        configurable: true
    });
    PasswordFormComponent.prototype.onValidate = function () {
        this.vendeurData.changePassword({ id: this.resetForm.value.id, password: this.resetForm.value.newPassword });
        this.onClose();
    };
    PasswordFormComponent.prototype.onClose = function () {
        $("#myPasswordModal").hide();
    };
    PasswordFormComponent.prototype.mustMatch = function (controlName, matchingControlName) {
        return function (formGroup) {
            var control = formGroup.controls[controlName];
            var matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                // return if another validator has already found an error on the matchingControl
                return;
            }
            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    };
    PasswordFormComponent = __decorate([
        core_1.Component({
            selector: 'app-password-form',
            templateUrl: './password-form.component.html',
            styleUrls: ['./password-form.component.scss']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            router_1.Router,
            vendeur_data_1.VendeurData,
            registrer_data_1.Registrer])
    ], PasswordFormComponent);
    return PasswordFormComponent;
}());
exports.PasswordFormComponent = PasswordFormComponent;
//# sourceMappingURL=password-form.component.js.map