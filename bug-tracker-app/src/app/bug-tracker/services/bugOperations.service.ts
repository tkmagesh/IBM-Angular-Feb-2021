import { Injectable } from "@angular/core";
import { Bug } from "../models/Bug";
import { BugStorageService } from "./bugStorage.service";

@Injectable({
    providedIn: 'root',
})
export class BugOperationsService{
    
    constructor(private bugStorage : BugStorageService){

    }
    getAll() : Bug[] {
        return this.bugStorage.getAll();
    }

    createNew(bugName : string) : Bug {
        const newBugData : Bug = {
            id : 0,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        };

        return this.bugStorage.save(newBugData);
    }

    toggle(bugToToggle : Bug) : Bug {
        const toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed };
        return this.bugStorage.save(toggledBug);
    }

    remove( bugToRemove : Bug) : void {
        this.bugStorage.remove(bugToRemove);
    }
}