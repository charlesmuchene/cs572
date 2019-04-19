import { UserService } from './../services/user.service';
import { FormError } from './../models/form-error.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmailService } from './email.service';
import { map, tap } from 'rxjs/operators';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.template.html',
	styleUrls: [ './signup.style.css' ]
})
export class SignupComponent implements OnInit {
	private signupForm: FormGroup;
	private emailalreadyexists = 'emailalreadyexists';
	private unmatchedPasswords = 'unmatchedpasswords';

	constructor(formBuilder: FormBuilder, private userService: UserService) {
		userService.saveUser({
			firstname: 'Charlo',
			lastname: 'Muchene',
			email: 'charlo@internet.mwa',
			password: 'password'
		});
		this.createForm(formBuilder);
	}

	ngOnInit() {}

	private createForm(formBuilder: FormBuilder) {
		this.signupForm = formBuilder.group(
			{
				firstname: [ 'Charlo', [ Validators.required ] ],
				lastname: [ 'Muchene', [ Validators.required ] ],
				email: [
					'charlo@internet.mwa',
					[ Validators.required, Validators.email ],
					this.asyncEmailValidator.bind(this)
				],
				password: [ 'password', [ Validators.required, Validators.min(3) ] ],
				confirmpassword: [ 'password', [ Validators.required ] ],
				terms: [ 'true', [ Validators.required ] ]
			},
			{ validators: this.passwordMatchValidator }
		);
	}

	onSubmit() {
		console.log('We are one', this.signupForm);
	}

	private asyncEmailValidator(email: FormControl): Observable<FormError | null> {
		return this.userService
			.emailExists(email.value)
			.pipe(
				map((exists) => (exists ? new FormError(this.emailalreadyexists) : null)),
				tap((value) => console.log(value))
			);
	}

	private passwordMatchValidator(form: FormGroup): ValidationErrors | null {
		const password = form.get('password');
		const confirm = form.get('confirmpassword');
		return password && confirm && password.value === confirm.value ? null : { unmatchedpasswords: true };
	}
}
