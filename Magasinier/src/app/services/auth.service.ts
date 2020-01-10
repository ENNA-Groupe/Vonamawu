import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Registrer } from '../data/registrer.data';
import { MagasinierData } from '../data/entities/magasinier.data';
import { Magasinier } from '../Models/magasinier.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private rootId: number;
  isAuth: boolean = false;
  message: string;

  constructor(
    public api: ApiService,
    public spinner: NgxSpinnerService,
    public register: Registrer,
    public magasinierData: MagasinierData 
  ) { }

  setRegistrer(item: Magasinier) {
    this.rootId=item.id;
    this.register.set(item);
  }

  changeIdentifiant(data) {
    this.api.login(data);
  }

  changePassword(data) {
    this.message = "Opération en cours";
    this.spinner.show();
    data.id=this.rootId;
    return this.magasinierData.changePassword({id: this.rootId, password: data.newPassword}).then(
      (res: any) =>{
        if (res) {
          this.spinner.hide();
          return true;
        } else {
          this.spinner.hide();
        }

        setTimeout(() => {
          this.spinner.hide();
        }, 30000);
      }
    );
  }

  login(data) {
    this.message = "connexion en cours";
    this.spinner.show();
    return this.api.login(data).then(
      (res: any) =>{
        if (res.isAuth) {
          this.isAuth = true;
          this.setRegistrer(res.user);
          this.spinner.hide();
          this.api.getAll();
          return this.isAuth;
        } else {
          this.spinner.hide();
        }
      }
    );
  }

  logout() {
    this.message = "Deconnexion en cours"
    this.spinner.show();
   return this.api.logout({id: this.rootId}).then(
      (res: any) => {
        this.spinner.hide();
        this.isAuth = false;
        return true;
      }
    ).catch(
      e=> {
        console.log(e);
        this.spinner.hide();
      }
    ).finally(
      () => this.spinner.hide()
    );
    
  }

}
