import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SortieData } from '../../../data/entities/sortie.data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  jourDebut: string;
  jourFin: string;
  constructor(
    public sortieData: SortieData,
    public router: Router
  ) { }

  ngOnInit() {
  }

  search() {
    console.log(this.jourDebut);
    this.sortieData.getActivities(this.jourDebut, this.jourFin);
    this.router.navigate(['private/sorties/date']);
  }

}
