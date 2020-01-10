import { Injectable } from '@angular/core';
import { Entity } from './entity';
import { DataService } from '../../services/data.service';
import { ApiService } from '../../services/api.service';
import { Entree } from '../../Models/entree.model';

@Injectable({ providedIn: 'root' })

export class EntreeData extends Entity {
    activities: any[];
    profil: any;
    archives: any[];

    constructor(
        public dataService: DataService,
        public api: ApiService
    ) {
        super();
        this.dataService.entrees.subscribe(
            data => this.data = data
        );
    }

    add(data: any) {
        this.api.post('entreeMaisonAdd', data);
    }

    edit(data: any) {
        this.api.post('entreeMaisonUpdate', data);
    }

    delete(data: Entree) {
        this.api.post('entreeMaisonDestroy', data);
    }

    restore(data: Entree) {
        this.api.post('entreeMaisonRestore', data);
    }


    get() {
        this.api.get('entreeMaison').subscribe(
            (res: any) => this.data = res
        );
    }

    show(id: number) {
        return this.api.getRoute('entreeMaison', id);
    }

    getTrash() {
        this.api.get('entreeMaisonTrash').subscribe(
            (res: any) => this.archives = res
        );
    }

    getActivities(dateDebut: string, dateFin: string) {
        this.activities = [];
        let date = dateDebut + '/' + dateFin;
        return this.api.getRoute('entreeMaison', date).subscribe(
            (data: any) => {
                console.log(data);
                this.activities = data
            }
        );
    }

    validate(data: any) {
        this.api.getRoute('entreeMaisonValidation', data);
    }
}