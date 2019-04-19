import { UserService } from '../services/user.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class EmailService {
	constructor(private userService: UserService) {}

	emailExists(email: string): Observable<boolean> {
		return this.userService.getUsers().pipe(
			map((users) => {
				if (!!users) return users.find((user) => user.email == email) != undefined;
				else return false;
			})
		);
	}
}
