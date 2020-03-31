import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Course }                                  from '../model/course';

@Component( {
	selector: 'app-course-list',
	templateUrl: './course-list.component.html',
	styleUrls: [ './course-list.component.css' ]
} )
export class CourseListComponent implements OnInit, AfterViewInit {

	@Input() courses: Course[];

	constructor() { }

	ngOnInit(): void {

	}

	ngAfterViewInit(): void {
		console.log( 'Courses:', this.courses );
	}
}
