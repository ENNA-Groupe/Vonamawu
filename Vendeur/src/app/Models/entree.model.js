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
Object.defineProperty(exports, "__esModule", { value: true });
var operation_model_1 = require("./operation.model");
var Entree = /** @class */ (function (_super) {
    __extends(Entree, _super);
    function Entree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Entree;
}(operation_model_1.Operation));
exports.Entree = Entree;
//# sourceMappingURL=entree.model.js.map