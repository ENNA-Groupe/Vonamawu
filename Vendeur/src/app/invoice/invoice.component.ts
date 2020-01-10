import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrintService } from '../services/print.service';
import { VenteData } from '../data/entities/vente.data';
import { Sortie } from '../Models/sortie.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit, OnDestroy {
  invoiceIds: string[];
  items = [];
  operation: Sortie = { id: null, nomClient: '', contactClient: '', numero: '', quantiteTotale: null, created_at: '', deleted_at: '', updated_at: '', status: null };
  porteurs = [];
  vendeur: any = { nom: '', prenom: '' }
  subs: Subscription;
  subs2: Subscription;
  isApercu: boolean;
  constructor(route: ActivatedRoute,
    public printService: PrintService,
    public venteData: VenteData) {
    // this.invoiceIds = route.snapshot.params['invoiceIds'];
    // let idOper = +this.invoiceIds[0];
  }

  ngOnInit() {
    this.subs = this.venteData.printable.subscribe(
      (data) => {
        console.log(data);
        this.operation = data.operation;
        this.items = data.produits;
        this.porteurs = data.porteurs.map(port => port.porteurPrenom);
        this.vendeur.nom = data.historiques[0].nom;
        this.vendeur.prenom = data.historiques[0].prenom;
        if (this.printService.isApercu) {
          this.printService.onDataReady();
        }

      }
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
    this.operation = null;
    this.items = [];
    this.porteurs = [];
    this.vendeur = null;
  }
}
