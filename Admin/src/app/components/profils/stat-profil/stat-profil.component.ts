import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../services/modal.service';
import { Stats } from '../../../data/stats.data';
import { SearchService } from '../../../services/search.service';
import { Subscription } from 'rxjs';
import * as $ from 'jquery';

@Component({
  selector: 'app-stat-profil',
  templateUrl: './stat-profil.component.html',
  styleUrls: ['./stat-profil.component.scss']
})
export class StatProfilComponent implements OnInit {

  subs: Subscription;
  operation: any = { quantiteVendue: null, quantiteSortie: null, quantieEntree: null };
  titre: string = 'Statistiques';
  detailsArray: any[] = [];
  constructor(
    public statData: Stats,
    public modal: ModalService,
    public searchService: SearchService
  ) { }

  ngOnInit() {

    this.subs = this.modal.getData().subscribe(
      item => {
        this.operation = item;
        this.titre = "Statistique du produit " + item.categorie + " " + item.nom + " du " + this.statData.dateDebut + " au " + this.statData.dateFin;
        if (this.searchService.menu === 'GM') this.statData.getStat(item.id).subscribe(
          (details: any) => {
            console.log(details);
            this.detailsArray = details;
          }
        );
        else if (this.searchService.menu === 'M') this.statData.getStatMaison(item.id).subscribe(
          (details: any) => {
            console.log(details);
            this.detailsArray = details;
          }
        );
      }
    );
  }

  onClose() {
    this.detailsArray = [];
    $("#myProfilModal").hide();
  }
}
