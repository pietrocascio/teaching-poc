export class User {
	constructor(
		private _firstName: string,
		private _lastName: string,
		private _userName: string,
		private _password: string,
		private _course: number[]
	) {
	}

	get course(): number[] {
		return this._course;
	}

	get firstName(): string {
		return this._firstName;
	}

	get lastName(): string {
		return this._lastName;
	}

	get userName(): string {
		return this._userName;
	}

	get password(): string {
		return this._password;
	}
}
