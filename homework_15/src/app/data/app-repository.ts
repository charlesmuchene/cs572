import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AppRepository {
	private userskey = 'users'; // TODO use enum??
	constructor() {}

	getUsers(): Observable<User[] | null> {
		return this.getData<User>(this.userskey);
	}

	private getData<T>(key: string): Observable<T[] | null> {
		return Observable.create((subscriber: Subscriber<string>) =>
			subscriber.next(this.toJson(localStorage.getItem(key)))
		).pipe(throttleTime(Math.random() * 3000));
	}

	private toJson(value: string) {
		return JSON.parse(value);
	}
}
