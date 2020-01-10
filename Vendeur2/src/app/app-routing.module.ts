import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './pages/public/public.component';
import { LoginComponent } from './pages/public/login/login.component';
import { ChangePasswordComponent } from './pages/public/change-password/change-password.component';
import { WellcomeComponent } from './pages/public/wellcome/wellcome.component';
import { PrivateComponent } from './pages/private/private.component';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';
import { CategoriesComponent } from './pages/private/marchandises/categories/categories.component';
import { ProduitsComponent } from './pages/private/marchandises/produits/produits.component';
import { VentesComponent } from './pages/private/ventes/ventes.component';
import { RapportsComponent } from './pages/private/rapports/rapports.component';
import { ProfilComponent } from './pages/private/profil/profil.component';
import { HistoriquesComponent } from './pages/private/historiques/historiques.component';
import { MarchandisesComponent } from './pages/private/marchandises/marchandises.component';
import { BilanComponent } from './pages/private/rapports/bilan/bilan.component';
import { InventairesComponent } from './pages/private/rapports/inventaires/inventaires.component';
import { StatsComponent } from './pages/private/rapports/stats/stats.component';
import { InfosComponent } from './pages/private/profil/infos/infos.component';
import { HistoriqueComponent } from './pages/private/profil/historique/historique.component';
import { ActivitesComponent } from './pages/private/profil/activites/activites.component';
import { TodayComponent } from './pages/private/ventes/today/today.component';
import { AllComponent } from './pages/private/ventes/all/all.component';
import { DateComponent } from './pages/private/ventes/date/date.component';
import { BonSortieComponent } from './pages/prints/bon-sortie/bon-sortie.component';
import { PrintsComponent } from './pages/prints/prints.component';
import { PrintLayoutComponent } from './print-layout/print-layout.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
{ path: '', redirectTo: 'public', pathMatch: 'full' },
{
  path: 'public',
  component: PublicComponent,
  children: [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'changepassword', component: ChangePasswordComponent },
    { path: 'wellcome', component: WellcomeComponent },
  ]
},
{ path: 'print',
outlet: 'print',
component: PrintLayoutComponent,
children: [
  { path: 'invoice/:invoiceIds', component: InvoiceComponent }
]
},
{
  path: 'private', canActivate: [AuthGuard], component: PrivateComponent,
  children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent,
    children: [
      { path:  '', redirectTo:  'today', pathMatch:  'full' },
      {path: 'today', component: TodayComponent},
      {path: 'hier', component: AllComponent},
      {path: 'date', component: DateComponent},
    ]
  },

    {
      path: 'marchandises',
      component: MarchandisesComponent,
      children: [
        { path: '', redirectTo: 'categories', pathMatch: 'full' },
        { path: 'categories', component: CategoriesComponent },
        { path: 'produits/:id', component: ProduitsComponent },
        // {path: 'marchandises', component: MarchandisesComponent}
      ]
    },
    {
      path: 'ventes',
      component: VentesComponent,
      children: [
        { path: '', redirectTo: 'today', pathMatch: 'full' },
        { path: 'today', component: TodayComponent },
        { path: 'hier', component: AllComponent },
        { path: 'date/:date', component: DateComponent },
      ]
    },
    {
      path: 'rapports',
      component: RapportsComponent,
      children: [
        { path: '', redirectTo: 'bilan', pathMatch: 'full' },
        { path: 'bilan', component: BilanComponent },
        { path: 'inventaires', component: InventairesComponent },
        { path: 'stats', component: StatsComponent }
      ]
    },
    {
      path: 'profil',
      component: ProfilComponent,
      children: [
        { path: '', redirectTo: 'infos', pathMatch: 'full' },
        { path: 'infos', component: InfosComponent },
        { path: 'historique', component: HistoriqueComponent },
        { path: 'activites', component: ActivitesComponent }
      ]
    },
    { path: 'historiques', component: HistoriquesComponent },
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
