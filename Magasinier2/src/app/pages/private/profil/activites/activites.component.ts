import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Registrer } from '../../../../data/registrer.data';
import { AdminData } from '../../../../data/entities/admin.data';
import { MagasinierData } from '../../../../data/entities/magasinier.data';

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
     public magasinierData: MagasinierData
  ) { }

  ngOnInit() {
    this.subs = this.registrer.get().subscribe(
      user => {
        this.magasinierData.show(user.id).subscribe(
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