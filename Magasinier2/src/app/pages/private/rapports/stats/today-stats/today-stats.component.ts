import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../../../services/search.service';
import { Stats } from '../../../../../data/stats.data';
import * as $ from 'jquery';
import { ModalService } from '../../../../../services/modal.service';

@Component({
  selector: 'app-today-stats',
  templateUrl: './today-stats.component.html',
  styleUrls: ['./today-stats.component.scss']
})
export class TodayStatsComponent implements OnInit {

  constructor(
    public statData: Stats,
    public searchService: SearchService,
    public modal: ModalService
  ) { }

  ngOnInit() {
  }

  onShow(item){
    this.modal.setData(item);
    $("#myProfilModal").show();
  }

}
