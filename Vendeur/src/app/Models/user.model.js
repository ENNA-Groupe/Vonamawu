"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(id, nom, contact, created_at, updated_at, deleted_at, prenom, isActive) {
        this.id = id;
        this.nom = nom;
        this.contact = contact;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.deleted_at = deleted_at;
        this.prenom = prenom;
        this.isActive = isActive;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.model.js.map