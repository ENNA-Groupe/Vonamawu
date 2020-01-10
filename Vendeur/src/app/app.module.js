"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("../polyfills");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var ngx_toastr_1 = require("ngx-toastr");
var ngx_spinner_1 = require("ngx-spinner");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var public_component_1 = require("./pages/public/public.component");
var login_component_1 = require("./pages/public/login/login.component");
var change_password_component_1 = require("./pages/public/change-password/change-password.component");
var wellcome_component_1 = require("./pages/public/wellcome/wellcome.component");
var private_component_1 = require("./pages/private/private.component");
var dashboard_component_1 = require("./pages/private/dashboard/dashboard.component");
var ventes_component_1 = require("./pages/private/ventes/ventes.component");
var rapports_component_1 = require("./pages/private/rapports/rapports.component");
var historiques_component_1 = require("./pages/private/historiques/historiques.component");
var profil_component_1 = require("./pages/private/profil/profil.component");
var marchandises_component_1 = require("./pages/private/marchandises/marchandises.component");
var categories_component_1 = require("./pages/private/marchandises/categories/categories.component");
var produits_component_1 = require("./pages/private/marchandises/produits/produits.component");
var prod_profil_component_1 = require("./components/profils/prod-profil/prod-profil.component");
var cat_profil_component_1 = require("./components/profils/cat-profil/cat-profil.component");
var admin_profil_component_1 = require("./components/profils/admin-profil/admin-profil.component");
var vendeur_profil_component_1 = require("./components/profils/vendeur-profil/vendeur-profil.component");
var magasinier_profil_component_1 = require("./components/profils/magasinier-profil/magasinier-profil.component");
var porteur_profil_component_1 = require("./components/profils/porteur-profil/porteur-profil.component");
var fournisseur_profil_component_1 = require("./components/profils/fournisseur-profil/fournisseur-profil.component");
var fournisseur_form_component_1 = require("./components/profils/fournisseur-form/fournisseur-form.component");
var bilan_component_1 = require("./pages/private/rapports/bilan/bilan.component");
var inventaires_component_1 = require("./pages/private/rapports/inventaires/inventaires.component");
var stats_component_1 = require("./pages/private/rapports/stats/stats.component");
var login_form_component_1 = require("./components/forms/login-form/login-form.component");
var change_password_form_component_1 = require("./components/forms/change-password-form/change-password-form.component");
var loader_component_1 = require("./components/utils/loader/loader.component");
var entree_profil_component_1 = require("./components/profils/entree-profil/entree-profil.component");
var by_categorie_pipe_1 = require("./pipes/by-categorie.pipe");
var search_entity_pipe_1 = require("./pipes/search-entity.pipe");
var by_type_pipe_1 = require("./pipes/by-type.pipe");
var search_operation_pipe_1 = require("./pipes/search-operation.pipe");
var sortie_profil_component_1 = require("./components/profils/sortie-profil/sortie-profil.component");
var inventaire_profil_component_1 = require("./components/profils/inventaire-profil/inventaire-profil.component");
var search_inventaire_pipe_1 = require("./pipes/search-inventaire.pipe");
var identifiant_form_component_1 = require("./components/forms/identifiant-form/identifiant-form.component");
var infos_component_1 = require("./pages/private/profil/infos/infos.component");
var historique_component_1 = require("./pages/private/profil/historique/historique.component");
var activites_component_1 = require("./pages/private/profil/activites/activites.component");
var password_form_component_1 = require("./components/forms/password-form/password-form.component");
var edit_entree_form_component_1 = require("./components/forms/edit-entree-form/edit-entree-form.component");
var today_component_1 = require("./pages/private/ventes/today/today.component");
var all_component_1 = require("./pages/private/ventes/all/all.component");
var date_component_1 = require("./pages/private/ventes/date/date.component");
var bon_sortie_component_1 = require("./pages/prints/bon-sortie/bon-sortie.component");
var prints_component_1 = require("./pages/prints/prints.component");
var print_layout_component_1 = require("./print-layout/print-layout.component");
var invoice_component_1 = require("./invoice/invoice.component");
var print_service_1 = require("./services/print.service");
var search_notification_pipe_1 = require("./pipes/search-notification.pipe");
var core_module_1 = require("./core/core.module");
var apercu_component_1 = require("./components/profils/apercu/apercu.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                public_component_1.PublicComponent,
                login_component_1.LoginComponent,
                change_password_component_1.ChangePasswordComponent,
                wellcome_component_1.WellcomeComponent,
                private_component_1.PrivateComponent,
                dashboard_component_1.DashboardComponent,
                ventes_component_1.VentesComponent,
                rapports_component_1.RapportsComponent,
                historiques_component_1.HistoriquesComponent,
                profil_component_1.ProfilComponent,
                marchandises_component_1.MarchandisesComponent,
                categories_component_1.CategoriesComponent,
                produits_component_1.ProduitsComponent,
                prod_profil_component_1.ProdProfilComponent,
                cat_profil_component_1.CatProfilComponent,
                admin_profil_component_1.AdminProfilComponent,
                vendeur_profil_component_1.VendeurProfilComponent,
                magasinier_profil_component_1.MagasinierProfilComponent,
                porteur_profil_component_1.PorteurProfilComponent,
                fournisseur_profil_component_1.FournisseurProfilComponent,
                fournisseur_form_component_1.FournisseurFormComponent,
                bilan_component_1.BilanComponent,
                inventaires_component_1.InventairesComponent,
                stats_component_1.StatsComponent,
                login_form_component_1.LoginFormComponent,
                change_password_form_component_1.ChangePasswordFormComponent,
                loader_component_1.LoaderComponent,
                entree_profil_component_1.EntreeProfilComponent,
                by_categorie_pipe_1.ByCategoriePipe,
                search_entity_pipe_1.SearchEntityPipe,
                by_type_pipe_1.ByTypePipe,
                search_operation_pipe_1.SearchOperationPipe,
                sortie_profil_component_1.SortieProfilComponent,
                inventaire_profil_component_1.InventaireProfilComponent,
                search_inventaire_pipe_1.SearchInventairePipe,
                identifiant_form_component_1.IdentifiantFormComponent,
                infos_component_1.InfosComponent,
                historique_component_1.HistoriqueComponent,
                activites_component_1.ActivitesComponent,
                password_form_component_1.PasswordFormComponent,
                edit_entree_form_component_1.EditVenteFormComponent,
                today_component_1.TodayComponent,
                all_component_1.AllComponent,
                date_component_1.DateComponent,
                bon_sortie_component_1.BonSortieComponent,
                prints_component_1.PrintsComponent,
                print_layout_component_1.PrintLayoutComponent,
                invoice_component_1.InvoiceComponent,
                search_notification_pipe_1.SearchNotificationPipe,
                apercu_component_1.ApercuComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                app_routing_module_1.AppRoutingModule,
                ngx_toastr_1.ToastrModule.forRoot(),
                ngx_spinner_1.NgxSpinnerModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                core_module_1.CoreModule
            ],
            providers: [print_service_1.PrintService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map