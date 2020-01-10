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
var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(formBuilder, auth, router) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.router = router;
        this.passwordType = 'password';
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    LoginFormComponent.prototype.seePassword = function () {
        if (this.passwordType === 'password')
            this.passwordType = 'text';
        else
            this.passwordType = 'password';
    };
    LoginFormComponent.prototype.initForm = function () {
        this.form = new forms_1.FormGroup({
            identifiant: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(20)]),
            password: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(8), forms_1.Validators.maxLength(20)])
        });
    };
    Object.defineProperty(LoginFormComponent.prototype, "identifiant", {
        get: function () { return this.form.get('identifiant'); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LoginFormComponent.prototype, "password", {
        get: function () { return this.form.get('password'); },
        enumerable: true,
        configurable: true
    });
    ;
    LoginFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.auth.login(this.form.value).then(function (isAuth) {
            if (isAuth) {
                if (_this.form.value.password === 'vonamawu2019') {
                    _this.router.navigate(['/public/changepassword']);
                }
                else {
                    _this.router.navigate(['/private']);
                }
            }
        });
    };
    LoginFormComponent = __decorate([
        core_1.Component({
            selector: 'app-login-form',
            templateUrl: './login-form.component.html',
            styleUrls: ['./login-form.component.scss']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            auth_service_1.AuthService,
            router_1.Router])
    ], LoginFormComponent);
    return LoginFormComponent;
}());
exports.LoginFormComponent = LoginFormComponent;
//# sourceMappingURL=login-form.component.js.map