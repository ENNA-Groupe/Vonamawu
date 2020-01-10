import { Component, OnInit } from '@angular/core';
import { Stats } from '../../../../data/stats.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  jourDebut: string;
  jourFin: string;
  constructor(
     public statData: Stats,
     public router: Router
  ) { }

  ngOnInit() {
  }

  search(){
    this.statData.getActivities(this.jourDebut, this.jourFin);
    this.router.navigate(['private/rapports/stats/datestats']);
  }

}
