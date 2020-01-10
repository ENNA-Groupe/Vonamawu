import { Injectable } from '@angular/core';
import { Entity } from './entity';
import { DataService } from '../../services/data.service';
import { ApiService } from '../../services/api.service';
import { Inventaire } from '../../Models/inventaire.model';

@Injectable({ providedIn: 'root' })

export class InventaireData extends Entity {
  constructor(
    private dataService: DataService,
    private api: ApiService
  ) {
    super();
    this.dataService.inventaires.subscribe(
      data => this.data = data
    );
  }

  getProduits(id: number) {
    return this.api.getRoute('inventaire',id).subscribe(
      data =>  data
    );
  }

  add(route: string, data: any) {
    this.api.post(route, data);
  }

  edit(route: string, data: any) {
    console.log(data);
    this.api.post(route, data);
  }

  delete(route: string, data: Inventaire) {
    data.deleted_at = 'new';
    this.api.post(route, data);
  }
}