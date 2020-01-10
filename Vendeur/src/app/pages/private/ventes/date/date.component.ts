import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { VenteData } from '../../../../data/entities/vente.data';
import { ModalService } from '../../../../services/modal.service';
import { SearchService } from '../../../../services/search.service';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  showArchive=false;
  archives : any[] = [];
  constructor(
     public sortieData: VenteData,
     public modal: ModalService,
     public searchService: SearchService,
  ) { }

  ngOnInit(){

  }

  
  onEdit(item: any) {
    this.modal.setData(item);
    $("#myModal").show();
  }

  onAdd() {
    $("#myModal").show();
  }

  onShow(item) {
    this.modal.setData(item);
    $("#myProfilModal").show();
  }

  onDelete(item) {
    if (window.confirm("Voulez vous supprimer la vente "+ item.nom + "?")) {
          this.sortieData.delete(item);
    }
  }
  onShowTrash() {
    this.showArchive = true;
    this.sortieData.getTrash();
  }

  onBackToData() {
    this.showArchive = false;
  }

  onRestore(item) {
    if (window.confirm("Voulez vous restaurer la catégorie "+ item.nom + "?")) {
      this.sortieData.restore(item);
      this.onShowTrash();
    }
  }
}