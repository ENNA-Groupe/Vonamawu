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
var auth_service_1 = require("../../../services/auth.service");
var registrer_data_1 = require("../../../data/registrer.data");
var ChangePasswordFormComponent = /** @class */ (function () {
    function ChangePasswordFormComponent(formBuilder, auth, router, registrer) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.router = router;
        this.registrer = registrer;
    }
    ChangePasswordFormComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    ChangePasswordFormComponent.prototype.initForm = function () {
        this.resetForm = this.formBuilder.group({
            newPassword: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(8), forms_1.Validators.maxLength(20)]),
            verifPassword: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(8), forms_1.Validators.maxLength(20)])
        }, {
            validator: this.mustMatch('newPassword', 'verifPassword')
        });
    };
    Object.defineProperty(ChangePasswordFormComponent.prototype, "f", {
        get: function () { return this.resetForm.controls; },
        enumerable: true,
        configurable: true
    });
    ChangePasswordFormComponent.prototype.onValidate = function () {
        var _this = this;
        this.auth.changePassword(this.resetForm.value).then(function (ok) {
            if (ok)
                _this.router.navigate(['/private']);
        });
    };
    ChangePasswordFormComponent.prototype.mustMatch = function (controlName, matchingControlName) {
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
    ChangePasswordFormComponent = __decorate([
        core_1.Component({
            selector: 'app-change-password-form',
            templateUrl: './change-password-form.component.html',
            styleUrls: ['./change-password-form.component.scss']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            auth_service_1.AuthService,
            router_1.Router,
            registrer_data_1.Registrer])
    ], ChangePasswordFormComponent);
    return ChangePasswordFormComponent;
}());
exports.ChangePasswordFormComponent = ChangePasswordFormComponent;
//# sourceMappingURL=change-password-form.component.js.map