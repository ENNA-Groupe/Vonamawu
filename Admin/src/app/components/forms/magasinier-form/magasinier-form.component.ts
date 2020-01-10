import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Magasinier } from '../../../Models/magasinier.model';
import { MagasinierData } from '../../../data/entities/magasinier.data';
import { ModalService } from '../../../services/modal.service';
import { SearchService } from '../../../services/search.service';


@Component({
  selector: 'app-magasinier-form',
  templateUrl: './magasinier-form.component.html',
  styleUrls: ['./magasinier-form.component.scss']
})
export class MagasinierFormComponent implements OnInit {


  form: FormGroup;
  defaultItem = { id: null, maison: null, nom: '', prenom: '', password: '', contact: '', identifiant: '', created_at: '', updated_at: '', deleted_at: '' };
  item: Magasinier;
  titre: string = "Ajout d'un magasinier";
  subs: Subscription;

  constructor(
    public magasinier: MagasinierData,
    public modal: ModalService,
    public searchService: SearchService
  ) {

  }

  ngOnInit() {
    this.subs = this.modal.getData().subscribe(
      item => {
        console.log(item);
        if (item.id) {
          this.item = item;
          this.titre = "Modification d'un magasinier";
        }
        else {
          if (this.searchService.menu === 'GM') this.defaultItem.maison = 0;
          else if (this.searchService.menu === 'M') this.defaultItem.maison = 1;
          this.item = this.defaultItem;
          this.titre = "Ajout d'un magasinier";
        }
        this.initForm(this.item);
      }
    );
    this.initForm(this.defaultItem);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  initForm(item) {
    this.form = new FormGroup({
      id: new FormControl(item.id),
      maison: new FormControl(item.maison, Validators.required),
      nom: new FormControl(item.nom, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
      prenom: new FormControl(item.prenom, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
      contact: new FormControl(item.contact, [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
      identifiant: new FormControl(item.identifiant, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    });
  }

  get nom() { return this.form.get('nom'); };
  get prenom() { return this.form.get('prenom'); };
  get contact() { return this.form.get('contact'); };
  get identifiant() { return this.form.get('identifiant'); };

  onSubmit() {
    console.log(this.form.value);
    if (!this.form.value.id) this.magasinier.add(this.form.value);
    else {
      console.log('edit');
      this.magasinier.edit(this.form.value);
    }
    this.onClose();
  }

  onClose() {
    $("#myModal").hide();
    this.modal.setData({});
    this.initForm(this.defaultItem);
  }
}
