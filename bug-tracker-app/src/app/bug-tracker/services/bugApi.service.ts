import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Bug } from "../models/Bug";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BugApiService{

    private endPoint = 'http://localhost:3000/bugs';

    constructor(private httpClient : HttpClient){

    }

    getAll() : Observable<Bug[]>{
        return this.httpClient
            .get<Bug[]>(this.endPoint)
    }

    save(bugData : Bug) : Observable<Bug> {
        if (bugData.id === 0){
            return this.httpClient
                .post<Bug>(this.endPoint, bugData)
        } else {
            return this.httpClient
                .put<Bug>(`${this.endPoint}/${bugData.id}`, bugData)
        }
    }

    remove(bugData : Bug) : Observable<any> {
        return this.httpClient
                .delete<Bug>(`${this.endPoint}/${bugData.id}`)
    }
}