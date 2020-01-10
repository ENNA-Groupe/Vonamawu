import { Injectable } from '@angular/core';
import { Entity } from './entity';
import { ApiService } from '../../services/api.service';
import { DataService } from '../../services/data.service';
import { Sortie } from '../../Models/sortie.model';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class VenteData extends Entity {
    activities: any[];
    profil: any;
    archives: any[];
    printable = new BehaviorSubject({operation: { id: null, nomClient: '', contactClient: '', numero: '', quantiteTotale: null, created_at: '', deleted_at: '', updated_at: '', status: null }, historiques: [{nom:'', prenom:''}], porteurs:[], produits: []});

    constructor(
        public dataService: DataService,
        public api: ApiService
    ) {
        super();
        this.dataService.sorties.subscribe(
            data => this.data = data
        );
    }

    add(data: any) {
        return this.api.post('sortieAdd', data).then(
            (res: any) => {
                if (res.data) this.printable.next(res.data);
            }
        );
    }

    edit(data: any) {
        this.api.post('sortieUpdate', data).then(
            (res: any) => {
                if (res.data) this.printable.next(res.data);
            }
        );
    }

    delete(data: Sortie) {
        this.api.post('sortieDestroy', data);
    }

    restore(data: Sortie) {
        this.api.post('sortieRestore', data);
    }


    get() {
        this.api.get('sortie').subscribe(
            (res: any) => this.data = res
        );
    }

    show(id: number) {
        return this.api.getRoute('sortie', id);
    }

    getTrash() {
        this.api.get('sortieTrash').subscribe(
            (res: any) => this.archives = res
        );
    }

    getActivities(dateDebut: string, dateFin: string) {
        this.activities = [];
        let date = dateDebut + '/' + dateFin;
        this.api.getRoute('sortie', date).subscribe(
            (res: any) => this.activities = res
        );
    }
}