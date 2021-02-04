import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Bug } from "../models/Bug";

//using bugApi service (asynchronous)
import { BugApiService } from "./bugApi.service";

@Injectable({
    providedIn: 'root',
})
export class BugOperationsService{
    
    constructor(private bugApi : BugApiService){

    }
    getAll() : Observable<Bug[]> {
        return this.bugApi.getAll();
    }

    createNew(bugName : string) : Observable<Bug> {
        const newBugData : Bug = {
            id : 0,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        };

        return this.bugApi.save(newBugData);
    }

    toggle(bugToToggle : Bug) : Observable<Bug> {
        const toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed };
        return this.bugApi.save(toggledBug);
    }

    remove( bugToRemove : Bug) : Observable<any> {
        return this.bugApi.remove(bugToRemove);
    }
}

//using bugStorage service (synchronous)
/* import { BugStorageService } from "./bugStorage.service";

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
} */