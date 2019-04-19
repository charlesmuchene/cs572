import { AppRepository } from './../data/app-repository';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	constructor(private appRepository: AppRepository) {}

	getUsers(): Observable<User[] | null> {
		return this.appRepository.getUsers();
	}

	emailExists(email: string): Observable<boolean> {
		return this.getUsers().pipe(
			map((users) => {
				if (!!users) return users.find((user) => user.email == email) != undefined;
				else return false;
			})
		);
	}

	saveUser(user: User) {
		this.appRepository.saveUser(user).subscribe((result) => console.log('Saved user'));
	}
}
