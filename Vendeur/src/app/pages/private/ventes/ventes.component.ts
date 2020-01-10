import { Component, OnInit } from '@angular/core';
import { VenteData } from '../../../data/entities/vente.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventes',
  templateUrl: './ventes.component.html',
  styleUrls: ['./ventes.component.scss']
})
export class VentesComponent implements OnInit {
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
    this.router.navigate(['private/sorties/date']);
  }
}