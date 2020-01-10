import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Admin } from '../../../../Models/admin.model';
import { ModalService } from '../../../../services/modal.service';
import { Registrer } from '../../../../data/registrer.data';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent implements OnInit, OnDestroy {

  subs: Subscription;
  user: Admin;
  constructor(
     public modal: ModalService,
     public registrer: Registrer,
  ) { 

  }

  ngOnInit(
  ) {
    this.subs = this.registrer.get().subscribe(
      (user) => {
        this.user = user;
      }
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}