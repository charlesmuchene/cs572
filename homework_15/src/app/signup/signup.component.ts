import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.template.html',
	styleUrls: [ './signup.style.css' ]
})
export class SignupComponent implements OnInit {
	private signupForm: FormGroup;
	private emailalreadyexists = 'emailalreadyexists';
	private unmatchedPasswords = 'unmatchedpasswords';

	constructor(formBuilder: FormBuilder) {
		this.createForm(formBuilder);
	}

	ngOnInit() {}

	private createForm(formBuilder: FormBuilder) {
		this.signupForm = formBuilder.group(
			{
				firstname: [ 'Charlo', [ Validators.required ] ],
				lastname: [ 'Muchene', [ Validators.required ] ],
				email: [ 'charlo@internet.mwa', Validators.required, this.asyncEmailValidator ],
				password: [ 'password', [ Validators.required, Validators.min(3) ] ],
				confirmpassword: [ 'password', [ Validators.required ] ],
				terms: [ 'true', [ Validators.required ] ]
			},
			{ validators: this.passwordMatchValidator }
		);
	}

	onSubmit() {
		console.log('We are one');
	}

	private asyncEmailValidator(
		email: FormControl
	): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
		// TODO Make unique email call to service
		return new Promise<ValidationErrors>((resolve, reject) => {
			setTimeout(() => resolve(null), 2000);
		});
	}

	private passwordMatchValidator(form: FormGroup): ValidationErrors | null {
		const password = form.get('password');
		const confirm = form.get('confirmpassword');
		return password && confirm && password.value === confirm.value ? null : { unmatchedpasswords: true };
	}
}
