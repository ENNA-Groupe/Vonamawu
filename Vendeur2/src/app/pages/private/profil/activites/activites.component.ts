import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Registrer } from '../../../../data/registrer.data';
import { VendeurData } from '../../../../data/entities/vendeur.data';

@Component({
  selector: 'app-activites',
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.scss']
})
export class ActivitesComponent implements OnInit, OnDestroy {

  activites = [];
  subs: Subscription;
  constructor(
     public registrer: Registrer,
     public vendeurData: VendeurData
  ) { }

  ngOnInit() {
    this.subs = this.registrer.get().subscribe(
      user => {
        this.vendeurData.show(user.id).subscribe(
          (res: any) => {
            console.log(res);
            this.activites = res.activites;
          },
          (error) => console.log(error)
        );
      }
    ); 
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }
}