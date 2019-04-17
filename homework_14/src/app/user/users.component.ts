import { DataService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-users',
	templateUrl: './user.template.html',
	styles: []
})
export class UsersComponent implements OnInit {
	private users;
	constructor(private dataService: DataService) {
		this.users = dataService.getCachedData();
	}

	ngOnInit() {}
}
