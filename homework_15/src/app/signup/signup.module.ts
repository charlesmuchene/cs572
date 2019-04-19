import { EmailService } from './email.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [ SignupComponent ],
	imports: [
		CommonModule,
		MatGridListModule,
		MatInputModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		MatCardModule,
		MatCheckboxModule,
		MatButtonModule
	],
	exports: [ SignupComponent ]
})
export class SignupModule {}
