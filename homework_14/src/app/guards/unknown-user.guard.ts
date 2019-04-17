import { UserService } from './../services/user.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class UnknownUserGuard implements CanActivate {
	constructor(private userService: UserService, private router: Router) {}
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		const uuid = route.params['uuid'];
		const isAvailable = this.userService.isUserAvailable(uuid);
		if (!isAvailable) this.router.navigateByUrl('users/unknown');
		return isAvailable;
	}
}
