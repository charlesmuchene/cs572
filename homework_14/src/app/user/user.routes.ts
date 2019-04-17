import { UserDetailsComponent } from './user-details.component';
import { UsersComponent } from './users.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', component: UsersComponent },
	{
		path: ':uuid',
		component: UserDetailsComponent
	}
];

export const userRoutes = RouterModule.forChild(routes);
