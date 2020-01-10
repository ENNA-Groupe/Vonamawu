import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminsComponent } from './pages/private/users/admins/admins.component';
import { PublicComponent } from './pages/public/public.component';
import { LoginComponent } from './pages/public/login/login.component';
import { ChangePasswordComponent } from './pages/public/change-password/change-password.component';
import { WellcomeComponent } from './pages/public/wellcome/wellcome.component';
import { PrivateComponent } from './pages/private/private.component';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';
import { UsersComponent } from './pages/private/users/users.component';
import { VendeursComponent } from './pages/private/users/vendeurs/vendeurs.component';
import { PorteursComponent } from './pages/private/users/porteurs/porteurs.component';
import { MagasiniersComponent } from './pages/private/users/magasiniers/magasiniers.component';
import { FournisseursComponent } from './pages/private/users/fournisseurs/fournisseurs.component';
import { CategoriesComponent } from './pages/private/marchandises/categories/categories.component';
import { ProduitsComponent } from './pages/private/marchandises/produits/produits.component';
import { EntreesComponent } from './pages/private/entrees/entrees.component';
import { VentesComponent } from './pages/private/ventes/ventes.component';
import { TodayVenteComponent } from './pages/private/ventes/today-vente/today-vente.component';
import { RapportsComponent } from './pages/private/rapports/rapports.component';
import { TodayComponent } from './pages/private/sorties/today/today.component';
import { SortiesComponent } from './pages/private/sorties/sorties.component';
import { ProfilComponent } from './pages/private/profil/profil.component';
import { HistoriquesComponent } from './pages/private/historiques/historiques.component';
import { MarchandisesComponent } from './pages/private/marchandises/marchandises.component';
import { AllVenteComponent } from './pages/private/ventes/all-vente/all-vente.component';
import { AllComponent } from './pages/private/sorties/all/all.component';
import { DateComponent } from './pages/private/sorties/date/date.component';
import { BilanComponent } from './pages/private/rapports/bilan/bilan.component';
import { InventairesComponent } from './pages/private/rapports/inventaires/inventaires.component';
import { StatsComponent } from './pages/private/rapports/stats/stats.component';
import { DateVenteComponent } from './pages/private/ventes/date-vente/date-vente.component';
import { InfosComponent } from './pages/private/profil/infos/infos.component';
import { HistoriqueComponent } from './pages/private/profil/historique/historique.component';
import { ActivitesComponent } from './pages/private/profil/activites/activites.component';
import { ControlComponent } from './pages/private/control/control.component';
import { DateEntreeComponent } from './pages/private/entrees/date-entree/date-entree.component';
import { TodayEntreeComponent } from './pages/private/entrees/today-entree/today-entree.component';
import { TodayStatsComponent } from './pages/private/rapports/stats/today-stats/today-stats.component';
import { DateStatsComponent } from './pages/private/rapports/stats/date-stats/date-stats.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [{ path:  '', redirectTo:  'public', pathMatch:  'full' },
{ path: 'public',
  component: PublicComponent,
  children: [
    { path:  '', redirectTo:  'login', pathMatch:  'full' },
    { path: 'login', component: LoginComponent },
    { path: 'changepassword', component: ChangePasswordComponent},
    { path: 'wellcome', component: WellcomeComponent},
  ]
 },
{ path: 'private', canActivate: [AuthGuard], component: PrivateComponent,
  children: [
    { path:  '', redirectTo:  'dashboard', pathMatch:  'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'users', 
    component: UsersComponent,
    children: [
      { path:  '', redirectTo:  'admins', pathMatch:  'full' },
      {path: 'admins', component: AdminsComponent },
      {path: 'vendeurs', component: VendeursComponent },
      {path: 'porteurs', component: PorteursComponent },
      {path: 'magasiniers', component: MagasiniersComponent },
      {path: 'fournisseurs', component: FournisseursComponent }
    ]
  },
    { path: 'marchandises', 
    component: MarchandisesComponent,
    children: [
      { path:  '', redirectTo:  'categories', pathMatch:  'full' },
      {path: 'categories', component: CategoriesComponent},
      {path: 'produits/:id', component: ProduitsComponent},
      // {path: 'marchandises', component: MarchandisesComponent}
    ]
  },
    { path: 'entrees',
    component: EntreesComponent,
    children: [
      { path:  '', redirectTo:  'todayentree', pathMatch:  'full' },
      {path: 'todayentree', component: TodayEntreeComponent},
      {path: 'dateentree', component: DateEntreeComponent}
    ]
  },
    { path: 'sorties',
    component: SortiesComponent,
    children: [
      { path:  '', redirectTo:  'today', pathMatch:  'full' },
      {path: 'today', component: TodayComponent},
      {path: 'all', component: AllComponent},
      {path: 'date', component: DateComponent},
    ]
  },
    { path: 'rapports', 
    component: RapportsComponent,
    children: [
      { path:  '', redirectTo:  'bilan', pathMatch:  'full' },
      {path: 'bilan', component: BilanComponent},
      {path: 'inventaires', component: InventairesComponent},
      {
        path: 'stats',
      component: StatsComponent,
      children: [
        { path:  '', redirectTo:  'todaystats', pathMatch:  'full' },
        {path: 'todaystats', component: TodayStatsComponent},
        {path: 'datestats', component: DateStatsComponent},
      ]
    }
    ]
  },
  { path: 'profil',
  component: ProfilComponent,
  children: [
    { path:  '', redirectTo:  'infos', pathMatch:  'full' },
    {path: 'infos', component: InfosComponent},
    {path: 'historique', component: HistoriqueComponent},
    {path: 'activites', component: ActivitesComponent}
  ]
},
    { path: 'historiques', component: HistoriquesComponent},
    {path: 'control', component: ControlComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
