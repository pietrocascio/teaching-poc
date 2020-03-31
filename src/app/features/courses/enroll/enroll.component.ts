import { Component, Inject, OnInit }     from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar }                   from '@angular/material/snack-bar';
import { Course }                        from '../model/course';
import { EnrollModelDialog }             from './model/enroll-model-dialog';

@Component( {
	selector: 'app-enroll',
	templateUrl: './enroll.component.html',
	styleUrls: [ './enroll.component.css' ]
} )
export class EnrollComponent implements OnInit {

	course: Course;

	constructor( private _dialogRef: MatDialogRef<EnrollComponent>,
	             private _snackBar: MatSnackBar,
	             @Inject( MAT_DIALOG_DATA ) public data: EnrollModelDialog ) { }

	ngOnInit(): void {
		this.course = this.data.course;
	}

	enroll() {
		this._snackBar.open( 'You enrolled successfully into the course!', 'Enrolled!', { duration: 2000 } );
		this._dialogRef.close( true );
	}

	cancel() {
		this._snackBar.open( 'You cancelled your enrollment in this course', 'Cancelled!', { duration: 2000 } );
		this._dialogRef.close( false );
	}
}
