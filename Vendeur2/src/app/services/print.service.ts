import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrintService {
  isPrinting = false;
  isApercu = false;
  constructor( public router: Router) { }

  printDocument(documentName: string, documentData: string[]) {
    this.isPrinting = true;
    this.isApercu =true;
    this.router.navigate(['/',
      { outlets: {
        'print': ['print', documentName, documentData.join()]
      }}]);
  }

  onDataReady() {
    this.isApercu = false;
    setTimeout(() => {
      window.print();
      this.isPrinting = false;
      this.router.navigate([{ outlets: { print: null }}]);
    });
  }
}
