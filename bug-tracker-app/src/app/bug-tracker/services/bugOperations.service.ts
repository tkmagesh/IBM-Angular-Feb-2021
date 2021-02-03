import { Injectable } from "@angular/core";
import { Bug } from "../models/Bug";

@Injectable({
    providedIn: 'root',
})
export class BugOperationsService{
    private currentBugId : number = 0;

    createNew(bugName : string) : Bug {
        const newBug : Bug = {
            id : ++this.currentBugId,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        };

        return newBug;
    }

    toggle(bugToToggle : Bug) : Bug {
        const toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed };
        return toggledBug;
    }
}