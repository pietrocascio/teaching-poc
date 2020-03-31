import { ComponentType }            from '@angular/cdk/overlay';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef }  from '@angular/material/dialog';
import { CourseInfoComponent }      from '../course-info/course-info.component';
import { EnrollComponent }          from '../enroll/enroll.component';
import { EnrollModelDialog }        from '../enroll/model/enroll-model-dialog';
import { Course }                   from '../model/course';

@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.css']
})
export class CardCourseComponent implements OnInit {

  @Input() course: Course;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  enroll() {
    let matDialogRef = this.openDialog( EnrollComponent, 300 );
    matDialogRef.afterClosed()
      .subscribe( result => console.log( `Result: ${ result }` ) );
  }

  getInfo() {
    let matDialogRef = this.openDialog(CourseInfoComponent, 800);
    matDialogRef.afterClosed()
      .subscribe( result => console.log( `Result: ${ result }` ) );
  }

  private openDialog( component: any, width: number ): MatDialogRef<any> {
    return this.dialog.open(component, {
      width: width + 'px',
      data: new EnrollModelDialog( this.course )
    });
  }
}
