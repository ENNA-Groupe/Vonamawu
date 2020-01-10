import { Injectable } from '@angular/core';
import { Entity } from './entity';
import { DataService } from '../../services/data.service';
import { ApiService } from '../../services/api.service';
import { Sortie } from '../../Models/sortie.model';

@Injectable({ providedIn: 'root' })

export class SortieData extends Entity {
    activities: any[];
    profil: any;
    archives: any[];

    constructor(
        public dataService: DataService,
        public api: ApiService
    ) {
        super();
        this.dataService.sorties.subscribe(
            data => this.data = data
        );
    }

    add(data: Sortie) {
        this.api.post('sortieMaisonAdd', data);
    }

    edit(data: Sortie) {
        this.api.post('sortieMaisonUpdate', data);
    }

    delete(data: Sortie) {
        this.api.post('sortieMaisonDestroy', data);
    }

    restore(data: Sortie) {
        this.api.post('sortieMaisonRestore', data);
    }


    get() {
        this.api.get('sortieMaison').subscribe(
            (res: any) => this.data = res
        );
    }

    show(id: number) {
        return this.api.getRoute('sortieMaison', id);
    }

    getTrash() {
        this.api.get('sortieMaisonTrash').subscribe(
            (res: any) => this.archives = res
        );
    }

    getActivities(dateDebut: string, dateFin: string) {
        this.activities = [];
        let date = dateDebut + '/' + dateFin;
        this.api.getRoute('sortieMaison', date).subscribe(
            (res: any) => {
                console.log(res);
                this.activities = res
            }
        );
    }
    
    validate(data: any) {
        this.api.post('sortieMaisonValidate', data);
    }
}