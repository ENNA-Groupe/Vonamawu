import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchEntity'
})
export class SearchEntityPipe implements PipeTransform {

  transform(value: any[], args: string): any {
    if (!value) return [];
    if (!args) return value;
    return value.filter(
      item => {
        if( item.categorie) return item.categorie.toLowerCase().includes(args.toLowerCase()) || item.nom.toLowerCase().includes(args.toLowerCase());
        else return  item.nom.toLowerCase().includes(args.toLowerCase());
      }
    );
  }

}
