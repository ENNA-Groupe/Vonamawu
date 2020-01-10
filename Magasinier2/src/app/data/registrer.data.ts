import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Registrer  {
    private userSubject = new BehaviorSubject(null);
    public registrerId;

    constructor(
    ) {
    }

    set(item) {
        this.userSubject.next(item);
        this.registrerId = item.id;
    }

    get() {
        return this.userSubject.asObservable();
    }
}