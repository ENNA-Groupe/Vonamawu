import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VenteData } from '../../../data/entities/vente.data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  jourDebut: string;
  jourFin: string;
  constructor(
    public venteData: VenteData,
    public router: Router
  ) { }

  ngOnInit() {
  }

  search() {
    console.log(this.jourDebut);
    this.venteData.getActivities(this.jourDebut, this.jourFin);
    this.router.navigate(['private/dashboard/date']);
  }

}
