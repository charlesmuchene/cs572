import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
	selector: 'app-user-details',
	templateUrl: './user-details.component.html',
	styles: []
})
export class UserDetailsComponent implements OnInit, OnDestroy {
	private uuid: string;

	private user;
	private routeSubscription: Subscription;

	constructor(private route: ActivatedRoute, private userService: UserService) {
		this.routeSubscription = route.params.subscribe((parameters) => {
			this.uuid = parameters['uuid'];
			this.user = userService.getUserData(this.uuid);
		});
	}

	ngOnInit() {}

	ngOnDestroy(): void {
		this.routeSubscription.unsubscribe();
	}
}
