import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Registrer } from '../data/registrer.data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  lastId: number;

  admins = new BehaviorSubject([]);
  vendeurs = new BehaviorSubject([]);
  porteurs = new BehaviorSubject([]);
  magasiniers = new BehaviorSubject([]);
  fournisseurs = new BehaviorSubject([]);
  categories = new BehaviorSubject([]);
  produits = new BehaviorSubject([]);
  produitMaisons = new BehaviorSubject([]);
  sorties = new BehaviorSubject([]);
  sortieMaisons = new BehaviorSubject([]);
  entrees = new BehaviorSubject([]);
  entreeMaisons = new BehaviorSubject([]);
  inventaires = new BehaviorSubject([]);
  inventaireMaisons = new BehaviorSubject([]);
  notifications = new BehaviorSubject([]);
  newNotifications = new BehaviorSubject([]);
  connexions = new BehaviorSubject([]);
  bilans = new BehaviorSubject([]);
  bilanMaisons = new BehaviorSubject([]);
  stats = new BehaviorSubject([]);
  statMaisons = new BehaviorSubject([]);

  constructor(
    public registrer: Registrer 
  ) { }

  setFirst(res: any) {
      if (res.admin)this.admins.next(res.admin);
      if(res.vendeur)this.vendeurs.next(res.vendeur);
      if(res.magasinier)this.magasiniers.next(res.magasinier);
      if(res.porteur)  this.porteurs.next(res.porteur);
      if(res.fournisseur)  this.fournisseurs.next(res.fournisseur);
      if(res.categorie)  this.categories.next(res.categorie);
      if(res.produit)  this.produits.next(res.produit);
      if(res.produitMaison)  this.produitMaisons.next(res.produitMaison);
      if(res.sortie)  this.sorties.next(res.sortie);
      if(res.sortieMaison)  this.sortieMaisons.next(res.sortieMaison);
      if(res.entree)  this.entrees.next(res.entree);
      if(res.entreeMaison)  this.entreeMaisons.next(res.entreeMaison);
      if(res.inventaire)  this.inventaires.next(res.inventaire);
      if(res.inventaireMaison)  this.inventaireMaisons.next(res.inventaireMaison);
      if(res.connexion)  this.connexions.next(res.connexion);
      if(res.notification)   {
        this.lastId = res.notification[0].id;
        this.notifications.next(res.notification);
      }  
      if(res.bilan) this.bilans.next(res.bilan);
      if(res.bilanMaison) this.bilanMaisons.next(res.bilanMaison);
      if(res.stat) this.stats.next(res.stat);
      if(res.statMaison) this.statMaisons.next(res.statMaison);
    }

  setData(data: any[]) {
    data.forEach((res)=>{
      if (res.admin){
        this.admins.next(res.admin);
        let item = res.admin.find(item=>item.id===this.registrer.registrerId);
        this.registrer.set(item);
      };
      if(res.vendeur)this.vendeurs.next(res.vendeur);
      if(res.magasinier)this.magasiniers.next(res.magasinier);
      if(res.porteur)  this.porteurs.next(res.porteur);
      if(res.fournisseur)  this.fournisseurs.next(res.fournisseur);
      if(res.categorie)  this.categories.next(res.categorie);
      if(res.produit)  this.produits.next(res.produit);
      if(res.produitMaison)  this.produitMaisons.next(res.produitMaison);
      if(res.sortie)  this.sorties.next(res.sortie);
      if(res.sortieMaison)  this.sortieMaisons.next(res.sortieMaison);
      if(res.entree)  this.entrees.next(res.entree);
      if(res.entreeMaison)  this.entreeMaisons.next(res.entreeMaison);
      if(res.inventaire)  this.inventaires.next(res.inventaire);
      if(res.inventaireMaison)  this.inventaireMaisons.next(res.inventaireMaison);
      if(res.connexion)  this.connexions.next(res.connexion);
      if(res.notification)   {
        this.lastId = res.notification[0].id;
        this.newNotifications.next(res.notification);
      }  
      if(res.bilan) this.bilans.next(res.bilan);
      if(res.bilanMaison) this.bilanMaisons.next(res.bilanMaison);
      if(res.stat) this.stats.next(res.stat);
      if(res.statMaison) this.statMaisons.next(res.statMaison);
    });
    }
    
  }
