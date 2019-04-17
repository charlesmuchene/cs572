import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
	private users = [];
	constructor(private dataService: DataService) {
		this.users = dataService.getCachedData();
	}

	getUserData(uuid: string) {
		return this.users.find((user) => user.login.uuid == uuid);
	}

	isUserAvailable(uuid: string) {
		return this.getUserData(uuid) != null;
	}
}
