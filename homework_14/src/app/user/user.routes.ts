import { UnknownUserComponent } from './unknown-user.component';
import { UserDetailsComponent } from './user-details.component';
import { UsersComponent } from './users.component';
import { Routes, RouterModule } from '@angular/router';
import { UnknownUserGuard } from '../guards/unknown-user.guard';

const routes: Routes = [
	{ path: '', component: UsersComponent },
	{ path: 'unknown', component: UnknownUserComponent },
	{
		path: ':uuid',
		component: UserDetailsComponent,
		canActivate: [ UnknownUserGuard ]
	}
];

export const userRoutes = RouterModule.forChild(routes);
