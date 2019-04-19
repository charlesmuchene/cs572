import { AppRepository } from './../data/app-repository';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	constructor(private appRepository: AppRepository) {}

	getUsers(): Observable<User[] | null> {
		return this.appRepository.getUsers();
	}
}
