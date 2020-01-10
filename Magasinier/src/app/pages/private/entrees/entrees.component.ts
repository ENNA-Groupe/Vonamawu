import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { EntreeData } from '../../../data/entities/entree.data';
import { ModalService } from '../../../services/modal.service';
import { SearchService } from '../../../services/search.service';
import { ApiService } from '../../../services/api.service';
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
    public router: Router,
    public modal: ModalService
  ) { }

  ngOnInit() {
  }

  search() {
    this.entreeData.getActivities(this.jourDebut, this.jourFin);
    this.router.navigate(['private/entrees/dateentree']);
  }

  onAdd() {
    this.modal.setData({});
    $("#myEditModal").show();
  }
}
  

 