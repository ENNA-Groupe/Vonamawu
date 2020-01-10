import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { InventaireData } from '../../../../data/entities/inventaire.data';
import { SearchService } from '../../../../services/search.service';
import { ModalService } from '../../../../services/modal.service';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-inventaires',
  templateUrl: './inventaires.component.html',
  styleUrls: ['./inventaires.component.scss']
})
export class InventairesComponent implements OnInit {
  showArchive=false;
  archives : any[] = [];
  constructor(
     public invData: InventaireData,
     public searchService: SearchService,
     public router: Router,
     public modal: ModalService,
     public apiService: ApiService
  ) { }

  ngOnInit() {

  }


  onShow(item) {
    this.modal.setData(item);
    this.apiService.getRoute('inventaire', item.id).subscribe(
      (res: any) => {
        console.log(res);
        this.modal.setHistoriques(res.historiques);
      },
      (error) => console.log(error)
    );
    $("#myProfilModal").show();
  }

 
}
