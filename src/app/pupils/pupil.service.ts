import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { pupils } from "./dummy-data-pupils";
import Pupil from "./Pupil";

@Injectable({
    providedIn: 'root'
})
export class PupilService {

    constructor() { }

    public getPupils():Observable<Pupil[]>{
        return of (pupils);
    }


      public getPupil(id:string | null): Observable<Pupil | undefined>{
        for (const pupil of pupils) {
            if (pupil.id === id) {
              return of(pupil);
            }
          }
          return of (undefined);
        }
    }
