import { Component, OnInit } from '@angular/core';
import { EntreeData } from '../../../data/entities/entree.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrees',
  templateUrl: './entrees.component.html',
  styleUrls: ['./entrees.component.scss']
})
export class EntreesComponent implements OnInit {
  jourDebut: string;
  jourFin: string;
  constructor(
    public entreeData: EntreeData,
    public router: Router
  ) { }

  ngOnInit() {
  }

  search() {
    this.entreeData.getActivities(this.jourDebut, this.jourFin);
    this.router.navigate(['private/entrees/dateentree']);
  }
}
