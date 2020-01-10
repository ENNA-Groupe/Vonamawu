import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Registrer } from '../../../../data/registrer.data';
import { VendeurData } from '../../../../data/entities/vendeur.data';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent implements OnInit,OnDestroy {
  historiques = [];
  subs: Subscription;
  constructor(
     public registrer: Registrer,
     public vendeurData:VendeurData
  ) { }

  ngOnInit() {
    this.subs = this.registrer.get().subscribe(
      user => {
        this.vendeurData.show(user.id).subscribe(
          (res: any) => {
            console.log(res);
            this.historiques = res.historiques;
          },
          (error) => console.log(error)
        );
      }
    ); 
  }

  ngOnDestroy() {  
    this.subs.unsubscribe
  }
}
