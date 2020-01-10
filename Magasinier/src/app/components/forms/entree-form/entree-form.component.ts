import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import * as $ from 'jquery';
import { Entree } from '../../../Models/entree.model';
import { EntreeData } from '../../../data/entities/entree.data';
import { CategorieData } from '../../../data/entities/categorie.data';
import { ProduitData } from '../../../data/entities/produit.data';
import { FournisseurData } from '../../../data/entities/fournisseur.data';
import { ModalService } from '../../../services/modal.service';
import { AlertService } from '../../../services/alert.service';


@Component({
  selector: 'app-entree-form',
  templateUrl: './entree-form.component.html',
  styleUrls: ['./entree-form.component.scss']
})

export class EntreeFormComponent implements OnInit, OnDestroy {

  
  categories: number[] = [];
  titre = "Ajout d'une entree";
  subs: Subscription;
  produitsArray : any[] =[];
  operation: Entree;
  constructor(
    public entreeData: EntreeData,
    public catData: CategorieData,
    public produitData: ProduitData,
    public fournisseurData: FournisseurData,
    public modal: ModalService,
    public alert: AlertService
  ) {
   
   }

  ngOnInit() {
    this.operation =  {id: null, numero:'', quantiteTotale:null, created_at:'', deleted_at: '', updated_at:'', status: null};
    this.categories=[];
    
    this.subs = this.modal.getData().subscribe(
      item => {
        console.log(item);
        this.produitsArray = [];
        if (item.id) {
         
          this.titre = "Modification de l' entree numero "+item.numero;
          this.operation = {id:item.id, numero: item.numero, quantiteTotale: item.quantiteTotale, created_at: item.created_at, deleted_at: item.deleted_at, updated_at: item.updated_at, status: item.status };
          this.entreeData.show(item.id).subscribe(
            (prod: any) => {
              console.log(prod);
              this.categories=[];
              prod.produits.forEach(element => {
                this.produitsArray.push({categorie_id: element.categorie_id, produit_id: element.produit_id, nom: element.nom, quantite: element.quantite, })
              });;
              this.categories = this.produitsArray.filter(prod=>this.produitData.data.find(item=>item.id===prod.categorie_id)).map(x=>x.categorie_id);
            }
          );
        } else {
          this.titre = "Ajout d'une entree";
          this.operation  =  {id: null, numero:'', quantiteTotale:null, created_at:'', deleted_at: '', updated_at:'',status: null};
          this.categories=[];
          this.onAddData();
        }
      }
    ) ;
  
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }



  onAddData() {
   this.produitsArray.push({ produit_id: null, quantite: null});
  }

  setQuantiteTotal() {
    this.operation.quantiteTotale = this.produitsArray.map(item=>item.quantite).reduce((b,c)=>b+c,0);
  }

  onDelete(i: number) {
   this.produitsArray.splice(i,1);
   this.categories.splice(i,1);
   this.setQuantiteTotal();
  }

  produitController(i:number){
    let long = this.produitsArray.filter(item=> +item.produit_id===+this.produitsArray[i].produit_id).length;
    if(long>1){
      this.alert.toast({ type: 'danger', message: 'Vous avez dejà ajouter ce produit'});
      this.onDelete(i);
    } 
    this.setQuantiteTotal();
  }


  onSubmit() {
    if (this.produitsArray.filter(item=>item.produit_id===null||item.quantite===null||item.quantite<=0).length>0) {
      this.alert.toast({ type: 'danger', message: 'Veuillez remplir correctement toutes les cases!'});
    } else if(this.operation.id) {
      this.entreeData.edit({id: this.operation.id , numero: this.operation.numero, quantiteTotale: this.operation.quantiteTotale, data: this.produitsArray});  
      this.onClose();
    } else{
      this.entreeData.add({id: this.operation.id , numero: this.operation.numero, quantiteTotale: this.operation.quantiteTotale, data: this.produitsArray});  
      this.onClose();
    }   
  }

  onSelectProduct(i, id, categorie, nom){
    console.log('id: '+ id);
    // this.produitsArray[i].searching = false;
    this.produitsArray[i].produit_id = id;
    this.produitsArray[i].nom = categorie + " "+ nom;
    this.produitsArray[i].searching = false;
    this.produitController(i);
  }

  onClose() {
    $("#myEditModal").hide();
  }
}

