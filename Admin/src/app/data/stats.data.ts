import { Injectable } from '@angular/core';
import { DataService } from '../services/data.service';
import { Entity } from './entities/entity';
import { ApiService } from '../services/api.service';

@Injectable({ providedIn: 'root' })
export class Stats extends Entity {
    usersOnline: number=0;
    bestSell: any ={nom:'', categorie: '', quantitevendue: null};
    worstSell: any ={nom:'', categorie: '', quantitevendue: null};
    bestSellMaison: any ={nom:'', categorie: '', quantitevendue: null};
    worstSellMaison: any ={nom:'', categorie: '', quantitevendue: null};
    admins =[];
    vendeurs=[];
    magasiniers=[];
    activities;
    activitieMaisons;
    individuals=[];
    individualMaisons=[];
    dataMaison;
    dateDebut;
    dateFin;
    constructor(
        public dataService: DataService,
        public api: ApiService
    ) {
        super();
        this.dataService.stats.subscribe(
            (res: any)=>{
                this.data = res;
                this.bestSell = res.reduce(function(prev, current) {
                    return (prev.quantiteVendue > current.quantiteVendue) ? prev : current
                },0); 
                this.worstSell = res.reduce(function(prev, current) {
                    return (prev.quantiteVendue < current.quantiteVendue) ? prev : current
                },0);  
            }
        );
        this.dataService.statMaisons.subscribe(
            (res: any)=>{
                this.dataMaison = res;
                this.bestSellMaison = res.reduce(function(prev, current) {
                    return (prev.quantiteVendue > current.quantiteVendue) ? prev : current
                },0); 
                this.worstSellMaison = res.reduce(function(prev, current) {
                    return (prev.quantiteVendue < current.quantiteVendue) ? prev : current
                },0);  
            }
        );
        this.dataService.admins.subscribe(
            admins=>{
                this.admins =admins;
                this.online();
            }
        );
        this.dataService.vendeurs.subscribe(
            vendeurs=>{
                this.vendeurs=vendeurs;
                this.online();
            }
        );
        this.dataService.magasiniers.subscribe(
            magasinier=>{
                this.magasiniers=magasinier;
                this.online();
            }
        );
        
    }

    online() {
        this.usersOnline = this.admins.concat(this.vendeurs, this.magasiniers).filter(item=>item.isOnline).length;
    }

    get() {
        this.api.get('stat').subscribe(
          (res: any) => this.data = res
      );
      }
    
      getActivities(dateDebut: string, dateFin: string) {
          this.dateDebut = dateDebut;
          this.dateFin = dateFin;
        let date = dateDebut+'/'+dateFin;
          this.api.getRoute('stat', date).subscribe(
              (res: any) => {
                this.activities = res
              }             
          );
          this.api.getRoute('statMaison', date).subscribe(
            (res: any) => {
              this.activitieMaisons = res
            }             
        );
      }

      getStat(id){
        let params = this.dateDebut+'/'+this.dateFin+'/'+id;
        return this.api.getRoute('stat', params);
      }
      getStatMaison(id){
        let params = this.dateDebut+'/'+this.dateFin+'/'+id;
        return this.api.getRoute('statMaison', params);
      }
}