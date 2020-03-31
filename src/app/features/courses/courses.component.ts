import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs';
import { CourseService }     from './course.service';
import { Course }            from './model/course';

@Component( {
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: [ './courses.component.css' ]
} )
export class CoursesComponent implements OnInit {

	courses$: Observable<Course[]>;

	constructor( private courseService: CourseService ) { }

	ngOnInit(): void {
		this.courses$ = this.courseService.getCourses();
	}
}
