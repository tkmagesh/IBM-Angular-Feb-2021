import { Pipe, PipeTransform } from '@angular/core';
import { Bug } from '../models/Bug';

interface Comparer{
    (p1 : any , p2 : any) : number
}



@Pipe({
    name : 'sort'
})
export class SortPipe implements PipeTransform{

    private getDescComparerFor(comparer : Comparer ) : Comparer{
        return function(p1 : any , p2 : any) : number {
            return comparer(p1, p2) * -1;
        }
    }

    private getComparerFor(attrName : string, isDesc : boolean) : Comparer {
        const comparer = function(p1 : any , p2 : any) : number {
            if (p1[attrName] < p2[attrName]) return -1;
            if (p1[attrName] > p2[attrName]) return 1;
            return 0;
        }
        if (isDesc) return this.getDescComparerFor(comparer);
        return comparer;
    }
    
    transform(value: any[], attr : string = '', isDesc : boolean = false) : any[] {
        if (!value || !value.length || !attr) return value;
        const comparer = this.getComparerFor(attr, isDesc);
        return value.sort(comparer);

    }

}