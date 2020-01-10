import { Component, OnInit } from '@angular/core';
import { EntreeData } from '../../../../data/entities/entree.data';
import { ModalService } from '../../../../services/modal.service';
import { SearchService } from '../../../../services/search.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-date-entree',
  templateUrl: './date-entree.component.html',
  styleUrls: ['./date-entree.component.scss']
})
export class DateEntreeComponent implements OnInit {
  menu="GM";
  constructor(
    public entreeData: EntreeData,
    public modal: ModalService,
    public searchService: SearchService,
  ) { }

  ngOnInit() {
  }
  
  onEdit(item: any) {
    this.modal.setData(item);
    $("#myEditModal").show();
  }

  onAdd() {
    this.modal.setData({});
    $("#myEditModal").show();
  }

  onShow(item) {
    this.modal.setData(item);
    $("#myProfilModal").show();
  }

  onDelete(item) {
    if (window.confirm("Voulez vous supprimer l'entree "+ item.nom + " "+ item.numero + "?")) {
          this.entreeData.delete(item);
    }
  }


}
