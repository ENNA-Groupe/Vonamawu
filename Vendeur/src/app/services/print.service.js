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
var services_1 = require("../core/services");
var PrintService = /** @class */ (function () {
    function PrintService(router, electronService) {
        this.router = router;
        this.electronService = electronService;
        this.isPrinting = false;
        this.isApercu = false;
    }
    PrintService.prototype.printDocument = function (documentName, documentData) {
        this.isPrinting = true;
        this.isApercu = true;
        this.router.navigate(['/',
            { outlets: {
                    'print': ['print', documentName, documentData.join()]
                } }]);
    };
    PrintService.prototype.onDataReady = function () {
        var _this = this;
        this.isApercu = false;
        setTimeout(function () {
            _this.isPrinting = false;
            // if (this.electronService.isElectron) {
            //   this.electronService.ipcRenderer.send('print');
            //     this.electronService.ipcRenderer.on('print', ()=> {
            //     console.log('printed');
            //     this.router.navigate([{ outlets: { print: null }}]);
            //     })
            // } else {
            window.print();
            _this.router.navigate([{ outlets: { print: null } }]);
            // }
        });
    };
    PrintService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            services_1.ElectronService])
    ], PrintService);
    return PrintService;
}());
exports.PrintService = PrintService;
//# sourceMappingURL=print.service.js.map