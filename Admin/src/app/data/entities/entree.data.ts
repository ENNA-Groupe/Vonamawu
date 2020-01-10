import { Injectable } from '@angular/core';
import { Entity } from './entity';
import { DataService } from '../../services/data.service';
import { ApiService } from '../../services/api.service';
import { Entree } from '../../Models/entree.model';

@Injectable({providedIn: 'root'})

export class EntreeData extends Entity {
  activities: any[];
  activitieMaisons: any[];
  profil: any;
  archives: any[];
  archiveMaisons
    dataMaison: any;
  constructor(
      public dataService: DataService,
      public api: ApiService
  ) {
      super();
      this.dataService.entrees.subscribe(
          data => this.data = data
      );
      this.dataService.entreeMaisons.subscribe(
        data => this.dataMaison = data
    );
  }

  add(data: Entree) {
      this.api.post('entreeAdd', data);
  }

  edit(data: Entree) {
      this.api.post('entreeUpdate', data);
  }

  delete(data: Entree) {
      this.api.post('entreeDestroy', data);
  }

  restore(data: Entree) {
      this.api.post('entreeRestore', data);
  }


  get() {
      this.api.get('entree').subscribe(
          (res: any) => this.data = res
      );
  }

  show(id: number) {
     return  this.api.getRoute('entree', id);
  }

  showMaison(id: number) {
    return  this.api.getRoute('entreeMaison', id);
 }

  getTrash() {
      this.api.get('entreeTrash').subscribe(
          (res: any) => this.archives = res
      );
      this.api.get('entreeMaisonTrash').subscribe(
        (res: any) => this.archiveMaisons = res
    );
  }

  getActivities(dateDebut: string, dateFin: string) {
    this.activities = [];
      let date = dateDebut+'/'+dateFin; 
      this.api.getRoute('entree', date).subscribe(
          (data:any) =>{
              console.log(data);
              this.activities = data
          }
      );
      return this.api.getRoute('entreeMaison', date).subscribe(
        (data:any) =>{
            console.log(data);
            this.activitieMaisons = data
        }
    );
  }

  validate(data: any) {
    this.api.post('entreeValidate', data);
  }
  validateMaison(data: any) {
    this.api.post('entreeMaisonValidate', data);
  }
}