"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Produit = /** @class */ (function () {
    function Produit(id, categorie_id, nom, quantiteStock, quantiteReel, quantiteCritique, created_at, updated_at, deleted_at) {
        this.id = id;
        this.categorie_id = categorie_id;
        this.nom = nom;
        this.quantiteStock = quantiteStock;
        this.quantiteReel = quantiteReel;
        this.quantiteCritique = quantiteCritique;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.deleted_at = deleted_at;
    }
    return Produit;
}());
exports.Produit = Produit;
//# sourceMappingURL=produit.model.js.map