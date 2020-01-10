import 'reflect-metadata';
import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from  '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicComponent } from './pages/public/public.component';
import { LoginComponent } from './pages/public/login/login.component';
import { ChangePasswordComponent } from './pages/public/change-password/change-password.component';
import { WellcomeComponent } from './pages/public/wellcome/wellcome.component';
import { PrivateComponent } from './pages/private/private.component';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';
import { VentesComponent } from './pages/private/ventes/ventes.component';
import { RapportsComponent } from './pages/private/rapports/rapports.component';
import { HistoriquesComponent } from './pages/private/historiques/historiques.component';
import { ProfilComponent } from './pages/private/profil/profil.component';
import { MarchandisesComponent } from './pages/private/marchandises/marchandises.component';
import { CategoriesComponent } from './pages/private/marchandises/categories/categories.component';
import { ProduitsComponent } from './pages/private/marchandises/produits/produits.component';
import { ProdProfilComponent } from './components/profils/prod-profil/prod-profil.component';
import { CatProfilComponent } from './components/profils/cat-profil/cat-profil.component';
import { AdminProfilComponent } from './components/profils/admin-profil/admin-profil.component';
import { VendeurProfilComponent } from './components/profils/vendeur-profil/vendeur-profil.component';
import { MagasinierProfilComponent } from './components/profils/magasinier-profil/magasinier-profil.component';
import { PorteurProfilComponent } from './components/profils/porteur-profil/porteur-profil.component';
import { FournisseurProfilComponent } from './components/profils/fournisseur-profil/fournisseur-profil.component';
import { FournisseurFormComponent } from './components/profils/fournisseur-form/fournisseur-form.component';
import { BilanComponent } from './pages/private/rapports/bilan/bilan.component';
import { InventairesComponent } from './pages/private/rapports/inventaires/inventaires.component';
import { StatsComponent } from './pages/private/rapports/stats/stats.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { ChangePasswordFormComponent } from './components/forms/change-password-form/change-password-form.component';
import { LoaderComponent } from './components/utils/loader/loader.component';
import { EntreeProfilComponent } from './components/profils/entree-profil/entree-profil.component';
import { ByCategoriePipe } from './pipes/by-categorie.pipe';
import { SearchEntityPipe } from './pipes/search-entity.pipe';
import { ByTypePipe } from './pipes/by-type.pipe';
import { SearchOperationPipe } from './pipes/search-operation.pipe';
import { SortieProfilComponent } from './components/profils/sortie-profil/sortie-profil.component';
import { InventaireProfilComponent } from './components/profils/inventaire-profil/inventaire-profil.component';
import { SearchInventairePipe } from './pipes/search-inventaire.pipe';
import { IdentifiantFormComponent } from './components/forms/identifiant-form/identifiant-form.component';
import { InfosComponent } from './pages/private/profil/infos/infos.component';
import { HistoriqueComponent } from './pages/private/profil/historique/historique.component';
import { ActivitesComponent } from './pages/private/profil/activites/activites.component';
import { PasswordFormComponent } from './components/forms/password-form/password-form.component';
import { EditVenteFormComponent } from './components/forms/edit-entree-form/edit-entree-form.component';
import { TodayComponent } from './pages/private/ventes/today/today.component';
import { AllComponent } from './pages/private/ventes/all/all.component';
import { DateComponent } from './pages/private/ventes/date/date.component';
import { BonSortieComponent } from './pages/prints/bon-sortie/bon-sortie.component';
import { PrintsComponent } from './pages/prints/prints.component';
import { PrintLayoutComponent } from './print-layout/print-layout.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PrintService } from './services/print.service';
import { SearchNotificationPipe } from './pipes/search-notification.pipe';
import { CoreModule } from './core/core.module';
import { ApercuComponent } from './components/profils/apercu/apercu.component';
import { SelectSearchDirective } from './select-search.directive';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    LoginComponent,
    ChangePasswordComponent,
    WellcomeComponent,
    PrivateComponent,
    DashboardComponent,
    VentesComponent,
    RapportsComponent,
    HistoriquesComponent,
    ProfilComponent,
    MarchandisesComponent,
    CategoriesComponent,
    ProduitsComponent,
    ProdProfilComponent,
    CatProfilComponent,
    AdminProfilComponent,
    VendeurProfilComponent,
    MagasinierProfilComponent,
    PorteurProfilComponent,
    FournisseurProfilComponent,
    FournisseurFormComponent,
    BilanComponent,
    InventairesComponent,
    StatsComponent,
    LoginFormComponent,
    ChangePasswordFormComponent,
    LoaderComponent,
    EntreeProfilComponent,
    ByCategoriePipe,
    SearchEntityPipe,
    ByTypePipe,
    SearchOperationPipe,
    SortieProfilComponent,
    InventaireProfilComponent,
    SearchInventairePipe,
    IdentifiantFormComponent,
    InfosComponent,
    HistoriqueComponent,
    ActivitesComponent,
    PasswordFormComponent,
    EditVenteFormComponent,
    TodayComponent,
    AllComponent,
    DateComponent,
    BonSortieComponent,
    PrintsComponent,
    PrintLayoutComponent,
    InvoiceComponent,
    SearchNotificationPipe,
    ApercuComponent,
    SelectSearchDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CoreModule  
  ],
  providers: [PrintService],
  bootstrap: [AppComponent]
})
export class AppModule { }
