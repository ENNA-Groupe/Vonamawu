import { Injectable } from '@angular/core';
import { Entity } from './entity';
import { DataService } from '../../services/data.service';
import { ApiService } from '../../services/api.service';
import { Vendeur } from '../../Models/vendeur.model';

@Injectable({ providedIn: 'root' })

export class VendeurData extends Entity {
    activities: any[];
    activitieMaisons: any[];
    profil: any;
    profilMaison: any;
    archives: any[];
    archiveMaisons: any[];
    dataMaison: any[];

    constructor(
        public dataService: DataService,
        public api: ApiService
    ) {
        super();
        this.dataService.vendeurs.subscribe(
            data => {
                this.data = data.filter(item=>item.maison===0);
                this.dataMaison = data.filter(item=>item.maison===1);
            }
        )
    }

    add(data: Vendeur) {
        this.api.post('vendeurAdd', data);
    }

    edit(data: Vendeur) {
        this.api.post('vendeurUpdate', data);
    }

    delete(data: Vendeur) {
        this.api.post('vendeurDestroy', data);
    }

    restore(data: Vendeur) {
        this.api.post('vendeurRestore', data);
    }

    changePassword(data: Vendeur) {
        this.api.post('vendeurChangePassword', data);
    }


    resetPassword(data: Vendeur) {
        this.api.post('vendeurResetPassword', data);
    }

    changeIdentifiant(data: Vendeur) {
        this.api.post('vendeurChangeIdentifiant', data);
    }

    get() {
        this.api.get('vendeur').subscribe(
            (res: any) => this.data = res
        );
    }

    show(id: number) {
        return this.api.getRoute('vendeur', id);
    }

    getTrash() {
        this.api.get('vendeurTrash').subscribe(
            (res: any)  => {
                this.archives = res.filter(item=>item.maison===0);
                this.archiveMaisons = res.filter(item=>item.maison===1);
            }
        );
    }

    getActivities(id: number, date: string) {
        let params = id + "/" + date;
        return this.api.getRoute('vendeur', params);
    }

    activate(data: any){
        this.api.post('vendeurActivate',data);
    }
}