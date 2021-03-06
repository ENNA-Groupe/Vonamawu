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
  sorties = new BehaviorSubject([]);
  entrees = new BehaviorSubject([]);
  inventaires = new BehaviorSubject([]);
  notifications = new BehaviorSubject([]);
  newNotifications = new BehaviorSubject([]);
  connexions = new BehaviorSubject([]);
  bilans = new BehaviorSubject([]);
  stats = new BehaviorSubject([]);

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
      if(res.produitMaison)  this.produits.next(res.produitMaison);
      if(res.sortieMaison)  this.sorties.next(res.sortieMaison);
      if(res.entreeMaison)  this.entrees.next(res.entreeMaison);
      if(res.inventaireMaison)  this.inventaires.next(res.inventaireMaison);
      if(res.connexion)  this.connexions.next(res.connexion);
      if(res.notification)   {
        this.lastId = res.notification[0].id;
        this.notifications.next(res.notification);
      }  
      if(res.bilanMaison) this.bilans.next(res.bilanMaison);
      if(res.statMaison) this.stats.next(res.statMaison);
    }

  setData(data: any[]) {
    data.forEach((res)=>{
      if (res.admin)this.admins.next(res.admin);
      if(res.vendeur)this.vendeurs.next(res.vendeur);
      if(res.magasinier){
        this.magasiniers.next(res.magasinier);
        let item = res.magasinier.find(item=>item.id===this.registrer.registrerId);
        this.registrer.set(item);
      }
      if(res.porteur)  this.porteurs.next(res.porteur);
      if(res.fournisseur)  this.fournisseurs.next(res.fournisseur);
      if(res.categorie)  this.categories.next(res.categorie);
      if(res.produitMaison)  this.produits.next(res.produitMaison);
      if(res.sortieMaison)  this.sorties.next(res.sortieMaison);
      if(res.entreeMaison)  this.entrees.next(res.entreeMaison);
      if(res.inventaireMaison)  this.inventaires.next(res.inventaireMaison);
      if(res.connexion)  this.connexions.next(res.connexion);
      if(res.notification)   {
        this.lastId = res.notification[0].id;
        this.newNotifications.next(res.notification);
      }  
      if(res.bilanMaison) this.bilans.next(res.bilanMaison);
      if(res.statMaison) this.stats.next(res.statMaison);
    });
    }
    
  }
