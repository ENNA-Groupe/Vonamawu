import { Injectable } from '@angular/core';
import { Entity } from './entity';
import { DataService } from '../../services/data.service';
import { ApiService } from '../../services/api.service';
import { Inventaire } from '../../Models/inventaire.model';

@Injectable({ providedIn: 'root' })

export class InventaireData extends Entity {
    activities: any[];
    profil: any;
    archives: any[];
    constructor(
        public dataService: DataService,
        public api: ApiService
    ) {
        super();
        this.dataService.inventaires.subscribe(
            data => this.data = data
        );
    }

    add(data: any) {
        this.api.post('inventaireMaisonAdd', data);
    }

    edit(data: any) {
        this.api.post('inventaireMaisonUpdate', data);
    }


    delete(data: Inventaire) {
        this.api.post('inventaireMaisonDestroy', data);
    }

    
    restore(data: Inventaire) {
        this.api.post('inventaireMaisonRestore', data);
    }



    get() {
        this.api.get('inventaireMaison').subscribe(
            (res: any) => this.data = res
        );
    }

    show(id: number) {
        return this.api.getRoute('inventaireMaison', id);
    }

    getTrash() {
        this.api.get('inventaireMaisonTrash').subscribe(
            (res: any) => this.archives = res
        );
    }

    getActivities(date: string) {
        this.api.getRoute('inventaireMaison', date).subscribe(
            (res: any) => this.activities = res
        );
    }
}