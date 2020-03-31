import { Component, Inject, OnInit }     from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course }                        from '../model/course';
import { EnrollModelDialog }             from './model/enroll-model-dialog';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {

  course: Course;
  constructor(public dialogRef: MatDialogRef<EnrollComponent>,
              @Inject(MAT_DIALOG_DATA) public data: EnrollModelDialog) { }

  ngOnInit(): void {
    this.course = this.data.course;
  }

	enroll() {
  	console.log(`The User has enrolled the course "${this.course.title}"`)
		this.dialogRef.close( true );
	}

	cancel() {
		console.log( 'The user has withdrew from the course' );
		this.dialogRef.close( false );
	}
}
