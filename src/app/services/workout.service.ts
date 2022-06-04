import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  count$ = new BehaviorSubject<number>(0);
  targetValue = 3;
  baseUrl = 'http://localhost:3000/workout';

  constructor(private readonly _http: HttpClient) { }

  changeCount(diff: number) {
    const count = this.count$.getValue();
    if (count === 0 && diff < 0) return;
    this.count$.next(count + diff);
  }

  resetCount() {
    this.count$.next(0);
  }

  getReps(): Observable<number> {
    return this._http.get<number>(`${this.baseUrl}/reps`);
  }

  resetSets(): Observable<number> {
    return this._http.get(`${this.baseUrl}/sets-reset`) as Observable<number>;
  }

  getSets(): Observable<number> {
    return this._http.get(`${this.baseUrl}/sets`) as Observable<number>;
  }

  updateSets(diff: number): Observable<number> {
    return this._http.post(`${this.baseUrl}/sets`, { diff }) as Observable<number>;
  }

  getTargetSets(): Observable<number> {
    return this._http.get(`${this.baseUrl}/targetSets`) as Observable<number>;
  }
}
