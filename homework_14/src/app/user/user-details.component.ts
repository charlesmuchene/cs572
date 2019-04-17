import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../api.service';

@Component({
	selector: 'app-user-details',
	templateUrl: './user-details.component.html',
	styles: []
})
export class UserDetailsComponent implements OnInit, OnDestroy {
	private uuid: string;
	private users = [];
	private user;
	private routeSubscription: Subscription;

	constructor(private route: ActivatedRoute, private dataService: DataService) {
		this.users = dataService.getCachedData();
		this.routeSubscription = route.params.subscribe((parameters) => {
			this.uuid = parameters['uuid'];
			this.user = this.getUserData(this.uuid);
		});
	}

	private getUserData(uuid: string) {
		return this.users.find((user) => user.login.uuid == uuid);
	}

	ngOnInit() {}

	ngOnDestroy(): void {
		this.routeSubscription.unsubscribe();
	}
}
