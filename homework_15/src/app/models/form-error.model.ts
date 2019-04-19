/**
 * @description Represents a common error object in angular
 * 
 * @field message - The key, as a string, represents the captured error.
 * The value, a boolean, is redundant for the existence of the message key.
 */
export class FormError {
	constructor(message: string, value: boolean = true) {
		this[message] = value;
	}
}
