import { Component, OnInit } from '@angular/core';
import { CategorieData } from '../../../data/entities/categorie.data';
import { ProduitData } from '../../../data/entities/produit.data';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-marchandises',
  templateUrl: './marchandises.component.html',
  styleUrls: ['./marchandises.component.scss']
})
export class MarchandisesComponent implements OnInit {

    id=0;
  constructor(
     public catData: CategorieData,
     public produitData: ProduitData,
     public serchService: SearchService 
  ) { }

  ngOnInit() {
  }

}
