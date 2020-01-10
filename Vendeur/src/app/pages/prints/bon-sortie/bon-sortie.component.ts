import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrintService } from '../../../services/print.service';

@Component({
  selector: 'app-bon-sortie',
  templateUrl: './bon-sortie.component.html',
  styleUrls: ['./bon-sortie.component.scss']
})
export class BonSortieComponent implements OnInit {
  vente;
  produitsArray: [] = [];
  porteurs = [];
  invoiceIds: string;
  invoiceDetails: Promise<any>[];

  constructor(
     public route: ActivatedRoute,
     public printService: PrintService) {
    
  }

  ngOnInit() {
    this.invoiceIds = this.route.snapshot.params['invoiceIds'];
    console.log(this.invoiceIds);
    // this.invoiceDetails = this.invoiceIds.map(id => this.getInvoiceDetails(id));
    // Promise.all(this.invoiceIds).then(() => this.printService.onDataReady());
  }

  getInvoiceDetails(invoiceId) {
    const amount = Math.floor((Math.random() * 100));
    return new Promise(resolve =>
      setTimeout(() => resolve({ amount }), 1000)
    );
  }

}
