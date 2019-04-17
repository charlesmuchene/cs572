import { UnknownUserComponent } from './unknown-user.component';
import { UnknownUserGuard } from './../guards/unknown-user.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { userRoutes } from './user.routes';
import { UserDetailsComponent } from './user-details.component';

@NgModule({
	declarations: [ UsersComponent, UserDetailsComponent, UnknownUserComponent ],
	imports: [ CommonModule, userRoutes ],
	providers: [ UnknownUserGuard ],
	bootstrap: [ UsersComponent ]
})
export class UserModule {}
