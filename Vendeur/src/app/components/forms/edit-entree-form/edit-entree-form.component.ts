import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import * as $ from 'jquery';
import { VenteData } from '../../../data/entities/vente.data';
import { CategorieData } from '../../../data/entities/categorie.data';
import { ProduitData } from '../../../data/entities/produit.data';
import { PorteurData } from '../../../data/entities/porteur.data';
import { ModalService } from '../../../services/modal.service';
import { PrintService } from '../../../services/print.service';
import { Sortie } from '../../../Models/sortie.model';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-edit-vente-form',
  templateUrl: './edit-entree-form.component.html',
  styleUrls: ['./edit-entree-form.component.scss']
})

export class EditVenteFormComponent implements OnInit, OnDestroy {


  categories: number[] = [];
  titre = "Ajout d'une vente";
  subs: Subscription;
  produitsArray: any[] = [];
  oldProduitsArray: any[] = [];
  porteurs: any[];
  operation: Sortie;
  searching = false;
  search: string = '';
  data = [];

  constructor(
    public venteData: VenteData,
    public catData: CategorieData,
    public produitData: ProduitData,
    public porteurData: PorteurData,
    public modal: ModalService,
    public printService: PrintService,
    public alert: AlertService
  ) {

  }

  ngOnInit() {

    this.operation = { id: null, nomClient: '', contactClient: '', numero: '', quantiteTotale: null, created_at: '', deleted_at: '', updated_at: '', status: null };
    this.subs = this.modal.getData().subscribe(
      item => {
        console.log(item);
        this.porteurs = this.porteurData.data;
        if (item.id) {
          this.titre = "Modification d'une vente";
          this.operation = {id:item.id, nomClient: item.nomClient, contactClient: item.contactClient, numero: item.numero, quantiteTotale: item.quantiteTotale, created_at: item.created_at, deleted_at: item.deleted_at, updated_at: item.updated_at, status: item.status };
          this.venteData.show(item.id).subscribe(
            (prod: any) => {
              console.log(prod);
              this.categories = [];
              this.produitsArray = prod.produits;
              prod.produits.forEach(element => {
                this.oldProduitsArray.push({produit_id: element.produit_id, oldQuantite: element.quantite}); 
              });
             
              prod.porteurs.forEach((element: any) => {
                this.porteurs.filter(item => item.id === element.porteur_id).map(item => item.isChecked = true);
              });
            }
          );
        } else {
          this.titre = "Ajout d'une vente";
          this.operation = { id: null, nomClient: '', contactClient: '', numero: '', quantiteTotale: null, created_at: '', deleted_at: '', updated_at: '', status: null };
          this.produitsArray = [];
          this.categories = [];
          this.porteurs.forEach(item => item.isChecked = false);
          this.onAddData();
        }
      }
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }



  onAddData() {
    this.produitsArray.push({ produit_id: null, quantite: null });
  }

  setQuantiteTotal(i?: number) {
    this.operation.quantiteTotale = this.produitsArray.map(item => item.quantite).reduce((b, c) => b + c, 0);
    if (i>=0) {
      if(this.produitsArray[i].quantite===0){
        this.alert.toast({ type: 'danger', message: 'la quantite ne peut pas etre 0!'});
        this.onDelete(i);
      } else if(!this.operation.id){
        console.log('not edit')
        let prod = this.produitData.data.find(prod => prod.id === + this.produitsArray[i].produit_id);
        if (prod.quantiteReel < this.produitsArray[i].quantite) {
          this.alert.toast({ type: 'danger', message: 'Il ne reste plus que ' + prod.quantiteReel});
          this.produitsArray[i].quantite = prod.quantiteReel;
          this.setQuantiteTotal(i);
        }
      } else{
        let i2 = this.oldProduitsArray.indexOf(this.oldProduitsArray.find(item=> item.produit_id === +this.produitsArray[i].produit_id));
        let prod = this.produitData.data.find(prod => prod.id === + this.produitsArray[i].produit_id);
        console.log('i2 =' +i2)
        if(i2!=-1) { 
          console.log('yes i2') ;
          console.log(this.oldProduitsArray[i2].oldQuantite + prod.quantiteReel);
          console.log(this.produitsArray[i].quantite);    
          if (this.oldProduitsArray[i2].oldQuantite + prod.quantiteReel < this.produitsArray[i].quantite) {
            this.alert.toast({ type: 'danger', message: 'Il ne reste plus que ' + (prod.quantiteReel + this.oldProduitsArray[i2].oldQuantite)});
            this.produitsArray[i].quantite = prod.quantiteReel + this.oldProduitsArray[i2].oldQuantite;
            this.setQuantiteTotal(i);
          }
        } else{
          console.log('not i2')  
          
          if (prod.quantiteReel < this.produitsArray[i].quantite) {
            this.alert.toast({ type: 'danger', message: 'Il ne reste plus que ' + prod.quantiteReel});
            this.produitsArray[i].quantite = prod.quantiteReel;
            this.setQuantiteTotal(i);
          }
        }
      }
    }
  }

  produitController(i:number){
    console.log('produit controlled');
    let long = this.produitsArray.filter(item=>item.produit_id===this.produitsArray[i].produit_id).length;
    console.log(long);
    if(long>1){
      this.alert.toast({ type: 'danger', message: 'Vous avez dejà ajouter ce produit'});
      this.onDelete(i);
    } 
    this.setQuantiteTotal(i);
  }

  onDelete(i: number) {
    this.produitsArray.splice(i, 1);
    this.setQuantiteTotal();
  }

  onSubmit() {
    if (!this.operation.nomClient) {
      this.alert.toast({ type: 'danger', message: 'Veuillez remplir le nom du client!'});
    } else if(this.porteurs.filter(item=>item.isChecked).length === 0) {
      this.alert.toast({ type: 'danger', message: 'Veuillez choisir au moins un porteur!'});
    } else if (this.produitsArray.filter(item=>item.produit_id===null||item.quantite===null||item.quantite<=0).length>0) {
      this.alert.toast({ type: 'danger', message: 'Veuillez remplir correctement toutes les cases!'});
    } else {
      let porteurIds = this.porteurs.filter(port => port.isChecked).map(item => { return { porteur_id: item.id } });
      if (this.operation.id) {
        this.venteData.edit({ id: this.operation.id, numero: this.operation.numero, nomClient: this.operation.nomClient, contactClient: this.operation.contactClient, quantiteTotale: this.operation.quantiteTotale, porteurs: porteurIds, data: this.produitsArray });
        this.onApercu();
        // this.onPrintInvoice()
      } else {
        this.venteData.add({ id: this.operation.id, numero: this.operation.numero, nomClient: this.operation.nomClient, contactClient: this.operation.contactClient, quantiteTotale: this.operation.quantiteTotale, porteurs: porteurIds, data: this.produitsArray });
        this.onApercu();
        // this.onPrintInvoice()
      }
    }

  }
  onPrintInvoice() {
    let invoiceIds = ["1"];
    this.printService
      .printDocument('invoice', invoiceIds);
  }

  reset() {

  }

  onApercu(){
     this.onClose();
    $("#myApercuModal").show();
  }

  onClose() {
    $("#myEditModal").hide();
    this.porteurs = [];
    this.modal.setData({ id: null, nomClient: '', contactClient: '', numero: '', quantiteTotale: null, created_at: '', deleted_at: '', updated_at: '' });
  }

  searchProduit (e,i) {
    console.log(e.target.value);
    if (e.target.value) {
      this.produitsArray[i].searching = true;
      this.data = this.produitData.data.filter(
        item => {
          if( item.categorie) return item.categorie.toLowerCase().includes(e.target.value.toLowerCase()) || item.nom.toLowerCase().includes(e.target.value.toLowerCase());
          else return  item.nom.toLowerCase().includes(e.target.value.toLowerCase());
        }
      );
    }
    else this.produitsArray[i].searching = false;
  }

  onSelectProduct(i, id, categorie, nom){
    console.log('id: '+ id);
    // this.produitsArray[i].searching = false;
    this.produitsArray[i].produit_id = id;
    this.produitsArray[i].nom = categorie + " "+ nom;
    this.produitsArray[i].searching = false;
    this.search = '';
    this.produitController(i);
  }

  throwId() {
    console.log('selected')
  }


}

