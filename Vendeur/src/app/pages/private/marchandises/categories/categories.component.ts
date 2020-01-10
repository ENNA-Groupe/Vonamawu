import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { CategorieData } from '../../../../data/entities/categorie.data';
import { ProduitData } from '../../../../data/entities/produit.data';
import { ModalService } from '../../../../services/modal.service';
import { ApiService } from '../../../../services/api.service';
import { SearchService } from '../../../../services/search.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  constructor(
     public catData: CategorieData,
     public produitData: ProduitData,
     public router: Router,
     public modal: ModalService,
     public apiService: ApiService,
     public searchService: SearchService
  ) { }

  ngOnInit() {
  }

  onGoToProduits(id: number) {
    this.router.navigate(['private/marchandises/produits/',id]);
  }
  onShow(item) {
    this.modal.setData(item);
    $("#myProfilModal").show();
  }

}
