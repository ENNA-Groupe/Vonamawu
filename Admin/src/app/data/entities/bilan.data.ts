import { Injectable } from '@angular/core';
import { Entity } from './entity';
import { DataService } from '../../services/data.service';
import { ApiService } from '../../services/api.service';

@Injectable({providedIn: 'root'})

export class BilanData extends Entity {
  activities: any[];
  activitieMaisons: any[];
  profil: any;
  archives: any[];
  archiveMaison: any[];
dataMaison= [];
  constructor(
      public dataService: DataService,
      public api: ApiService
  ) {
      super();
      this.dataService.bilans.subscribe(
          data => this.data = data
      );
      this.dataService.bilanMaisons.subscribe(
        data => this.dataMaison = data
    );
  }

  add(data: any) {
      this.api.post('bilanAdd', data);
      this.api.post('bilanMaisonAdd', data);
  }

  edit(data: any) {
      this.api.post('bilanUpdate', data);
  }

  delete(data: any) {
      this.api.post('bilanDestroy', data);
  }

  restore(data: any) {
      this.api.post('bilanRestore', data);
  }


  get() {
      this.api.get('bilan').subscribe(
          (res: any) => this.data = res
      );
      this.api.get('bilanMaison').subscribe(
        (res: any) => this.dataMaison = res
    );
  }

  show(id: number) {
      this.api.getRoute('bilan', id).subscribe(
          (res: any) => this.profil = res
      );
  }

  getTrash() {
      this.api.get('bilanTrash').subscribe(
          (res: any) => this.archives = res
      );
  }

  getActivities(date: string) {
      this.api.getRoute('bilan', date).subscribe(
          (res: any) => this.data = res
      );
      this.api.getRoute('bilanMaison', date).subscribe(
        (res: any) => this.dataMaison = res
    );
  }
}