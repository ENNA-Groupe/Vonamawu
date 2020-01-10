import { Component, OnInit } from '@angular/core';
import { Stats } from '../../../../../data/stats.data';
import { SearchService } from '../../../../../services/search.service';
import * as $ from 'jquery';
import { ModalService } from '../../../../../services/modal.service';

@Component({
  selector: 'app-date-stats',
  templateUrl: './date-stats.component.html',
  styleUrls: ['./date-stats.component.scss']
})
export class DateStatsComponent implements OnInit {

  constructor(
    public statData: Stats,
    public modal: ModalService,
    public searchService: SearchService
  ) { }

  ngOnInit() {
  }

  onShow(item){
    this.modal.setData(item);
    $("#myProfilModal").show();
  }

}
