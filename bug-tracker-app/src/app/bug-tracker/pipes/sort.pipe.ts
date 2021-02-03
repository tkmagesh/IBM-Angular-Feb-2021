import { Pipe, PipeTransform } from '@angular/core';

interface Comparer{
    (p1 : any , p2 : any) : number
}

@Pipe({
    name : 'sort'
})
export class SortPipe implements PipeTransform{

    private getComparerFor(attrName : string) : Comparer {
        return function(p1 : any , p2 : any) : number {
            if (p1[attrName] < p2[attrName]) return -1;
            if (p1[attrName] > p2[attrName]) return 1;
            return 0;
        }
    }
    transform(value: any[], attr : string = '', isDesc : boolean = false) : any[] {
        if (!value || !value.length || !attr) return value;
        const comparer = this.getComparerFor(attr);
        return value.sort(comparer);

    }

}