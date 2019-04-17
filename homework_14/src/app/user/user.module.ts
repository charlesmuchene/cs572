import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { userRoutes } from './user.routes';
import { UserDetailsComponent } from './user-details.component';

@NgModule({
	declarations: [ UsersComponent, UserDetailsComponent ],
	imports: [ CommonModule, userRoutes ],
	bootstrap: [ UsersComponent ]
})
export class UserModule {}
