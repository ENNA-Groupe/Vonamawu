import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'byType'
})
export class ByTypePipe implements PipeTransform {

  transform(value: any[], args: string): any[] {
    if (!value) return [];
    if (!args) return value;
    if(args === 'user') {
      return value.filter(
        item => item.type==='admin'||item.type==='vendeur'||item.type==='magasinier'||item.type==='porteur'||item.type==='fournisseur'
      );
    }
    return value.filter(
      item => item.type===args
    );
  }

}
