import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { AlertService } from './alert.service';
import { Registrer } from '../data/registrer.data';
import { Vendeur } from '../Models/vendeur.model';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers = new HttpHeaders();
  options: any;
  url: string = 'http://vonamawu.ennagroupe.com/api/';
  // url: string = 'http://localhost/test/public/api/';
  user: Vendeur;
  public intervallTimer = interval(10000);
  private subscription;

  constructor(
    private http: HttpClient,
    private dataService: DataService,
    private alert: AlertService,
    private registrer: Registrer
  ) {
    this.headers.append('enctype', 'multipart/form-data');
    this.headers.append('Content-Type', 'Application/json');
    this.headers.append('X-Request-With', 'XMLHttpRequest');

    this.options = { headers: this.headers };

    this.registrer.get().subscribe(
      (registrer) => {
        this.user = registrer
        console.log(this.user);
      }
    );
  }

  getAll() {
    this.http.get<any[]>(this.url + 'data/vendeurMaison/' + this.user.id, this.options).subscribe(
      (res) => {
        console.log(res);
        this.dataService.setFirst(res);
        this.subscription = this.intervallTimer.subscribe(() => this.getData());
      }
    );
  }

  get(route: string) {
    return this.http.get<any[]>(this.url + route, this.options);
  }

  getRoute(route: string, data: any) {
    return this.http.get<any[]>(this.url + route + '/' + data, this.options);
  }

  post(route: string, data: any) {
    if (this.user.isActive) {
      data.registrer_id = this.user.id;
      data.registrer_nom = this.user.nom;
      data.registrer_prenom = this.user.prenom;
      return new Promise(
        (resolve, reject) => {
          this.http.post<any>(this.url + route, data, this.options).subscribe(
            (res: any) => {
              if (!res.data) this.alert.toast(res);
              resolve(res);
            },
            (error) => {
              console.log(error);
              this.alert.toast({ type: 'danger', message: 'Desolé, l\'operation a échoué!' });
              resolve();
            }
          );
        }
      );
    } else {
      this.alert.toast({ type: 'danger', message: 'Desolé, Vous etes desactivé!' });
    }
  }

  login(data: any) {
    return new Promise(
      (resolve, reject) => {
        this.http.post<any>(this.url + 'vendeurMaisonLogin', data, this.options).subscribe(
          (res: any) => {
            this.alert.toast({ type: res.type, message: res.message });
            resolve(res);
          },
          (error) => {
            console.log(error);
            this.alert.toast({ type: 'danger', message: 'Echec de connexion!' });
            resolve({ isAuth: false });
          }
        );
      }
    );
  }

  logout(data: any) {
    return new Promise(
      (resolve, reject) => {
        this.http.post<any>(this.url + 'vendeurLogout', data, this.options).subscribe(
          (res: any) => {
            this.alert.toast({ type: res.type, message: res.message });
            this.subscription.unsubscribe()
            resolve(res);
          },
          (error) => {
            console.log(error);
            this.alert.toast({ type: 'danger', message: 'Echec de connexion!' });
            this.subscription.unsubscribe()
            resolve({ isAuth: false });
          }
        );
      }
    );
  }

  getLastOperationId(lastId: number) {
    return new Promise(
      (resolve, reject) => {
        this.http.post<any>(this.url + 'reload', lastId, this.options).subscribe(
          (res: any) => {
            resolve(res);
          },
          (error) => {
            console.log(error);
            // this.alert.toast({type:'danger', message:'Echec de connexion!'});
            resolve({ isAuth: false });
          }
        );
      }
    );
  }

  getData() {
    console.log(this.dataService.lastId);
    this.getRoute('data', 'vendeurMaison/' + this.user.id + '/' + this.dataService.lastId).subscribe(
      (res: any) => {
        console.log(res);
        if (res) this.dataService.setData(res);

      }
    );
  }
}
