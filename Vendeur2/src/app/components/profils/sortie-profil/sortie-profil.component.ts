import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import * as $ from 'jquery';
import { Vente } from '../../../Models/vente.model';
import { VenteData } from '../../../data/entities/vente.data';
import { CategorieData } from '../../../data/entities/categorie.data';
import { ProduitData } from '../../../data/entities/produit.data';
import { PorteurData } from '../../../data/entities/porteur.data';
import { ModalService } from '../../../services/modal.service';
import { PrintService } from '../../../services/print.service';
import { Sortie } from '../../../Models/sortie.model';

@Component({
  selector: 'app-sortie-profil',
  templateUrl: './sortie-profil.component.html',
  styleUrls: ['./sortie-profil.component.scss']
})

export class SortieProfilComponent implements OnInit, OnDestroy {

  categories: number[] = [];
  titre = "";
  subs: Subscription;
  produitsArray : any[] =[];
  porteurs: []=[];
  operation: Sortie;
  vendeur: any={nom: '', prenom:''};
  magasinier: any={nom: '', prenom:''};
  constructor(
     public venteData: VenteData,
     public catData: CategorieData,
     public produitData: ProduitData,
     public porteurData: PorteurData,
     public modal: ModalService,
     public print: PrintService
  ) {
   
   }

  ngOnInit() {
    this.operation =  {id: null, nomClient: '', contactClient: '' , numero:'', quantiteTotale:null, created_at:'', deleted_at: '', updated_at:'', status:2};
    this.subs = this.modal.getData().subscribe(
      item => {
        console.log(item);
        this.produitsArray=[];
        if (item.id) {
          this.titre = "Vente numero "+item.numero;
          this.operation =item;
          this.venteData.show(item.id).subscribe(
            (prod: any) => {
              console.log(prod);
              this.produitsArray = prod.produits;
              this.porteurs = prod.porteurs.map(port=>port.porteurPrenom);
              this.vendeur.nom=prod.historiques[0].nom;
              this.vendeur.prenom=prod.historiques[0].prenom;
              this.magasinier = prod.magasinier[0];
            }
          );
        } 
      }
    ) ;
  
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }


  // onPrint() {
  //   this.venteData.item = this.operation;
  //   this.print.printDocument('invoice',["1"]);
  // }

  onDelete() {  
    this.venteData.delete(this.operation);
    this.onClose();
  }

  onClose() {
    this.produitsArray=[];
    $("#myProfilModal").hide();
  }
}

