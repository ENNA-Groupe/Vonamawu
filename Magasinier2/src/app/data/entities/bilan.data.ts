import { Injectable } from '@angular/core';
import { Entity } from './entity';
import { DataService } from '../../services/data.service';
import { ApiService } from '../../services/api.service';

@Injectable({providedIn: 'root'})

export class BilanData extends Entity {
  activities: any[];
  profil: any;
  archives: any[];
  constructor(
      public dataService: DataService,
      public api: ApiService
  ) {
      super();
      this.dataService.bilans.subscribe(
          data => this.data = data
      );
      
  }

  add(data: any) {
      this.api.post('bilanMaisonAdd', data);
  }

  edit(data: any) {
      this.api.post('bilanMaisonUpdate', data);
  }

  delete(data: any) {
      this.api.post('bilanMaisonDestroy', data);
  }

  restore(data: any) {
      this.api.post('bilanMaisonRestore', data);
  }


  get() {
      this.api.get('bilanMaison').subscribe(
          (res: any) => this.data = res
      );
  }

  show(id: number) {
      this.api.getRoute('bilanMaison', id).subscribe(
          (res: any) => this.profil = res
      );
  }

  getTrash() {
      this.api.get('bilanMaisonTrash').subscribe(
          (res: any) => this.archives = res
      );
  }

  getActivities(date: string) {
      this.api.getRoute('bilanMaison', date).subscribe(
          (res: any) => this.data = res
      );
  }
}