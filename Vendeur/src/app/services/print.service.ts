import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { ElectronService } from '../core/services';

@Injectable({
  providedIn: 'root'
})
export class PrintService {
  isPrinting = false;
  isApercu = false;

  constructor( 
    public router: Router,
    public electronService: ElectronService) { 
   
  }

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
      this.isPrinting = false;
      // if (this.electronService.isElectron) {
      //   this.electronService.ipcRenderer.send('print');
      //     this.electronService.ipcRenderer.on('print', ()=> {
      //     console.log('printed');
      //     this.router.navigate([{ outlets: { print: null }}]);
      //     })
      // } else {
        window.print();
        this.router.navigate([{ outlets: { print: null }}]);
      // }
      
    });
  }
}
