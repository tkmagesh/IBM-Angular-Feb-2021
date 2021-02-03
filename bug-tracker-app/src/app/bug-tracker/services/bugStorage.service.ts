import { Injectable } from "@angular/core";
import { Bug } from '../models/Bug';

@Injectable({
    providedIn: 'root'
})
export class BugStorageService{
    private storage : Storage = window.localStorage;
    private currentBugId : number = 0;
    getAll() : Bug[] {
        const bugs : Bug[] = [];
        for(let index = 0, count = this.storage.length; index < count; index++){
            const key = this.storage.key(index) || '';
            if (key.startsWith('bug-')){
                const rawData = this.storage.getItem(key) || 'null',
                    bug = JSON.parse(rawData);
                bugs.push(bug);
                this.currentBugId = this.currentBugId < bug.id ? bug.id : this.currentBugId;
            }
        }
        return bugs;
    }

    save(bug : Bug) : Bug {
        if (bug.id === 0){
            bug.id = ++this.currentBugId;
        }
        this.storage.setItem(`bug-${bug.id}`, JSON.stringify(bug));
        return bug;
    }

    remove(bug : Bug) : void {
        this.storage.removeItem(`bug-${bug.id}`);
    }
}