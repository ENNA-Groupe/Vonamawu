import { Component, OnInit } from '@angular/core';
import { PrintService } from '../../../services/print.service';
import * as $ from 'jquery';
import { ModalService } from '../../../services/modal.service';
import { VenteData } from '../../../data/entities/vente.data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-apercu',
  templateUrl: './apercu.component.html',
  styleUrls: ['./apercu.component.scss']
})
export class ApercuComponent implements OnInit {
  subs: Subscription;
  constructor(
    public printService: PrintService,
    public modal: ModalService,
    public venteData: VenteData
  ) { }

  ngOnInit() {
  }

  onPrint() {
    let invoiceIds = ["1"];
    this.onClose();
    this.printService.printDocument('invoice', invoiceIds);
  }

  onEdit() {
   this.subs = this.venteData.printable.subscribe(
      (data) => {
        console.log(data.operation);
        this.modal.setData(data.operation);
        this.onClose();
        $("#myEditModal").show();
      }
    );
    this.subs.unsubscribe();
  }

  onClose(){
    $("#myApercuModal").hide();
  }

}
