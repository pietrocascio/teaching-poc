import { Component, Inject, OnInit }     from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EnrollModelDialog }             from '../enroll/model/enroll-model-dialog';
import { Course }                        from '../model/course';

@Component( {
	selector: 'app-course-info',
	templateUrl: './course-info.component.html',
	styleUrls: [ './course-info.component.css' ]
} )
export class CourseInfoComponent implements OnInit {

	course: Course;

	constructor( public dialogRef: MatDialogRef<CourseInfoComponent>,
	             @Inject( MAT_DIALOG_DATA ) public data: EnrollModelDialog ) { }

	ngOnInit(): void {
		this.course = this.data.course;
	}

	close() {
		this.dialogRef.close();
	}
}
