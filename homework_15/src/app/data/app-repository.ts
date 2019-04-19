import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { throttleTime, map } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';

@Injectable({
	providedIn: 'root'
})
export class AppRepository {
	private userskey = 'users'; // TODO use enum??
	constructor() {}

	saveUser(user: User): Observable<boolean> {
		return this.getUsers().pipe(
			map((users) => {
				let data: User[];
				if (!!users) {
					users.push(user);
					data = users;
				} else {
					data = [ user ];
				}
				localStorage.setItem(this.userskey, this.fromJson<User[]>(data));
				return true;
			})
		);
	}

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

	private fromJson<T>(value: T) {
		return JSON.stringify(value);
	}
}
