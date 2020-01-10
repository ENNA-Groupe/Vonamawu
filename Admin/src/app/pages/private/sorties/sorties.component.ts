import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SortieData } from '../../../data/entities/sortie.data';

@Component({
  selector: 'app-sorties',
  templateUrl: './sorties.component.html',
  styleUrls: ['./sorties.component.scss']
})
export class SortiesComponent implements OnInit {
    jourDebut: string;
    jourFin:string;
  constructor(
    public sortieData: SortieData,
    public router: Router
  ) { }

  ngOnInit() {
  }

  search(){
    console.log(this.jourDebut);
    this.sortieData.getActivities(this.jourDebut, this.jourFin);
    this.router.navigate(['private/sorties/date']);
  }
}
