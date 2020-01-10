import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { VenteData } from '../../../../data/entities/vente.data';
import { ModalService } from '../../../../services/modal.service';
import { SearchService } from '../../../../services/search.service';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {
  showArchive=false;
  archives : any[] = [];
  constructor(
     public venteData: VenteData,
     public modal: ModalService,
     public searchService: SearchService,
     public apiService: ApiService
  ) { }

  ngOnInit(){
  }

  
  onEdit(item: any) {
    this.modal.setData(item);
    $("#myEditModal").show();
  }

  onAdd() {
    this.modal.setData({id: null, numero: '', nomClient: '', contactClient: '', quantiteTotale: null, porteurs:[], data: []});
    $("#myEditModal").show();
  }

  onShow(item) {
    this.modal.setData(item);
    $("#myProfilModal").show();
  }

  onDelete(item) {
    if (window.confirm("Voulez vous supprimer la vente "+ item.numero + "?")) {
          this.venteData.delete( item);
    }
  }

  onShowTrash() {
    this.showArchive = true;
    this.venteData.getTrash();
  }

  onBackToData() {
    this.showArchive = false;
  }

  onRestore(item) {
    if (window.confirm("Voulez vous restaurer la catégorie "+ item.nom + "?")) {
      this.venteData.restore(item);
      this.onShowTrash();
    }
  }

}
