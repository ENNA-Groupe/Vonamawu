"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var public_component_1 = require("./pages/public/public.component");
var login_component_1 = require("./pages/public/login/login.component");
var change_password_component_1 = require("./pages/public/change-password/change-password.component");
var wellcome_component_1 = require("./pages/public/wellcome/wellcome.component");
var private_component_1 = require("./pages/private/private.component");
var dashboard_component_1 = require("./pages/private/dashboard/dashboard.component");
var categories_component_1 = require("./pages/private/marchandises/categories/categories.component");
var produits_component_1 = require("./pages/private/marchandises/produits/produits.component");
var ventes_component_1 = require("./pages/private/ventes/ventes.component");
var rapports_component_1 = require("./pages/private/rapports/rapports.component");
var profil_component_1 = require("./pages/private/profil/profil.component");
var historiques_component_1 = require("./pages/private/historiques/historiques.component");
var marchandises_component_1 = require("./pages/private/marchandises/marchandises.component");
var bilan_component_1 = require("./pages/private/rapports/bilan/bilan.component");
var inventaires_component_1 = require("./pages/private/rapports/inventaires/inventaires.component");
var stats_component_1 = require("./pages/private/rapports/stats/stats.component");
var infos_component_1 = require("./pages/private/profil/infos/infos.component");
var historique_component_1 = require("./pages/private/profil/historique/historique.component");
var activites_component_1 = require("./pages/private/profil/activites/activites.component");
var today_component_1 = require("./pages/private/ventes/today/today.component");
var all_component_1 = require("./pages/private/ventes/all/all.component");
var date_component_1 = require("./pages/private/ventes/date/date.component");
var print_layout_component_1 = require("./print-layout/print-layout.component");
var invoice_component_1 = require("./invoice/invoice.component");
var auth_guard_1 = require("./guards/auth.guard");
var routes = [
    { path: '', redirectTo: 'public', pathMatch: 'full' },
    {
        path: 'public',
        component: public_component_1.PublicComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: login_component_1.LoginComponent },
            { path: 'changepassword', component: change_password_component_1.ChangePasswordComponent },
            { path: 'wellcome', component: wellcome_component_1.WellcomeComponent },
        ]
    },
    { path: 'print',
        outlet: 'print',
        component: print_layout_component_1.PrintLayoutComponent,
        children: [
            { path: 'invoice/:invoiceIds', component: invoice_component_1.InvoiceComponent }
        ]
    },
    {
        path: 'private', canActivate: [auth_guard_1.AuthGuard], component: private_component_1.PrivateComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: dashboard_component_1.DashboardComponent,
                children: [
                    { path: '', redirectTo: 'today', pathMatch: 'full' },
                    { path: 'today', component: today_component_1.TodayComponent },
                    { path: 'hier', component: all_component_1.AllComponent },
                    { path: 'date', component: date_component_1.DateComponent },
                ]
            },
            {
                path: 'marchandises',
                component: marchandises_component_1.MarchandisesComponent,
                children: [
                    { path: '', redirectTo: 'categories', pathMatch: 'full' },
                    { path: 'categories', component: categories_component_1.CategoriesComponent },
                    { path: 'produits/:id', component: produits_component_1.ProduitsComponent },
                ]
            },
            {
                path: 'ventes',
                component: ventes_component_1.VentesComponent,
                children: [
                    { path: '', redirectTo: 'today', pathMatch: 'full' },
                    { path: 'today', component: today_component_1.TodayComponent },
                    { path: 'hier', component: all_component_1.AllComponent },
                    { path: 'date/:date', component: date_component_1.DateComponent },
                ]
            },
            {
                path: 'rapports',
                component: rapports_component_1.RapportsComponent,
                children: [
                    { path: '', redirectTo: 'bilan', pathMatch: 'full' },
                    { path: 'bilan', component: bilan_component_1.BilanComponent },
                    { path: 'inventaires', component: inventaires_component_1.InventairesComponent },
                    { path: 'stats', component: stats_component_1.StatsComponent }
                ]
            },
            {
                path: 'profil',
                component: profil_component_1.ProfilComponent,
                children: [
                    { path: '', redirectTo: 'infos', pathMatch: 'full' },
                    { path: 'infos', component: infos_component_1.InfosComponent },
                    { path: 'historique', component: historique_component_1.HistoriqueComponent },
                    { path: 'activites', component: activites_component_1.ActivitesComponent }
                ]
            },
            { path: 'historiques', component: historiques_component_1.HistoriquesComponent },
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map