import { Injectable } from '@angular/core';
import { Entity } from './entity';
import { DataService } from '../../services/data.service';
import { ApiService } from '../../services/api.service';
import { Sortie } from '../../Models/sortie.model';

@Injectable({ providedIn: 'root' })

export class SortieData extends Entity {
    activities: any[] =[];
    activitieMaisons: any[];
    profil: any;
    archives: any[];
    archiveMaisons: any[];
    dataMaison = [];
    constructor(
        public dataService: DataService,
        public api: ApiService
    ) {
        super();
        this.dataService.sorties.subscribe(
            data => this.data = data
        );
        this.dataService.sortieMaisons.subscribe(
            data => this.dataMaison = data
        );
    }

    add(data: Sortie) {
        this.api.post('sortieAdd', data);
    }

    edit(data: Sortie) {
        this.api.post('sortieUpdate', data);
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

    showMaison(id: number) {
        return this.api.getRoute('sortieMaison', id);
    }



    getTrash() {
        this.api.get('sortieTrash').subscribe(
            (res: any) => this.archives = res
        );
        this.api.get('sortieMaisonTrash').subscribe(
            (res: any) => this.archiveMaisons = res
        );
    }

    getActivities(dateDebut: string, dateFin: string) {
        this.activities = [];
        this.activitieMaisons = [];
        let date = dateDebut + '/' + dateFin;
        this.api.getRoute('sortie', date).subscribe(
            (res: any) => {
                console.log(res);
                this.activities = res
            }
        );
        this.api.getRoute('sortieMaison', date).subscribe(
            (res: any) => {
                console.log(res);
                this.activitieMaisons = res
            }
        );
    }

    find(id: number){
        return new Promise(
            (resolve,reject) => {
                this.api.getRoute('sortie', id).subscribe(
                    (res: any) =>{
                        res.operation = this.activities.find(item=>item.id===id);
                        resolve(res);
                    } 
                );
            }
        );
       
    }

    findMaison(id: number){
        return new Promise(
            (resolve,reject) => {
                this.api.getRoute('sortieMaison', id).subscribe(
                    (res: any) =>{
                        res.operation = this.activitieMaisons.find(item=>item.id===id);
                        resolve(res);
                    } 
                );
            }
        );
       
    }
}