import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { ProduitData } from '../../../../data/entities/produit.data';
import { ApiService } from '../../../../services/api.service';
import { ModalService } from '../../../../services/modal.service';
import { SearchService } from '../../../../services/search.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {
  id: number;
  constructor(
     public route: ActivatedRoute,
     public produitData: ProduitData,
     public apiService: ApiService,
     public modal: ModalService,
     public searchService: SearchService
  ) { }

  ngOnInit() {
    this.id = + this.route.snapshot.params['id'];
    console.log(this.id);
  }
  
  onShow(item) {
    this.modal.setData(item);
    $("#myProfilModal").show();
  }

}
