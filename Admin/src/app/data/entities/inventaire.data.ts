import { Injectable } from '@angular/core';
import { Entity } from './entity';
import { DataService } from '../../services/data.service';
import { ApiService } from '../../services/api.service';
import { Inventaire } from '../../Models/inventaire.model';

@Injectable({ providedIn: 'root' })

export class InventaireData extends Entity {
    activities: any[];
    activitieMaisons
    profil: any;
    archives: any[];
    archiveMaisons: any[];
    dataMaison = [];
    constructor(
        public dataService: DataService,
        public api: ApiService
    ) {
        super();
        this.dataService.inventaires.subscribe(
            data => this.data = data
        );
        this.dataService.inventaireMaisons.subscribe(
            data => this.dataMaison = data
        );
    }

    add(data: any) {
        this.api.post('inventaireAdd', data);
    }

    edit(data: any) {
        this.api.post('inventaireUpdate', data);
    }

    addMaison(data: any) {
        this.api.post('inventaireMaisonAdd', data);
    }

    editMaison(data: any) {
        this.api.post('inventaireMaisonUpdate', data);
    }

    delete(data: Inventaire) {
        this.api.post('inventaireDestroy', data);
    }

    deleteMaison(data: Inventaire) {
        this.api.post('inventaireMaisonDestroy', data);
    }

    
    restore(data: Inventaire) {
        this.api.post('inventaireRestore', data);
    }

    restoreMaison(data: Inventaire) {
        this.api.post('inventaireMaisonRestore', data);
    }


    get() {
        this.api.get('inventaire').subscribe(
            (res: any) => this.data = res
        );
    }

    show(id: number) {
        return this.api.getRoute('inventaire', id);
    }

    showMaison(id: number) {
        return this.api.getRoute('inventaireMaison', id);
    }

    getTrash() {
        this.api.get('inventaireTrash').subscribe(
            (res: any) => this.archives = res
        );
        this.api.get('inventaireMaisonTrash').subscribe(
            (res: any) => this.archiveMaisons = res
        );
    }

    getActivities(date: string) {
        this.api.getRoute('inventaire', date).subscribe(
            (res: any) => this.activities = res
        );
        this.api.getRoute('inventaireMaison', date).subscribe(
            (res: any) => this.activitieMaisons = res
        );
    }
}