import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course }     from './model/course';

const BASE_URL = 'http://localhost:3000/';

@Injectable( {
	providedIn: 'root'
} )
export class CourseService {

	constructor( private httpClient: HttpClient ) { }

	getCourses(): Observable<Course[]> {
		return this.httpClient.get<Course[]>( `${ BASE_URL }courses` );
	}
}
