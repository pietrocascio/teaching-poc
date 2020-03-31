import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User }       from '../../shared/models/user';

const BASE_URL = 'http://localhost:3000';

@Injectable( {
	providedIn: 'root'
} )
export class UserService {

	constructor( private httpClient: HttpClient ) { }

	getUsers(): Observable<User[]> {
		return this.httpClient.get<User[]>( `${ BASE_URL }/users` );
	}
}
