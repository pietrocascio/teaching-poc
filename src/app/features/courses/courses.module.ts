import { CommonModule }        from '@angular/common';
import { NgModule }            from '@angular/core';
import { MaterialModule }      from '../../shared/material/material.module';
import { TruncatePipe }        from '../../shared/pipes/truncate.pipe';
import { CardCourseComponent } from './card-course/card-course.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseService }       from './course.service';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent }     from './courses.component';
import { EnrollComponent }      from './enroll/enroll.component';

const components = [
	CoursesComponent,
	CardCourseComponent,
	CourseListComponent,
	TruncatePipe,
	EnrollComponent,
	CourseInfoComponent
];

@NgModule( {
	declarations: [ ...components ],
	imports: [
		CommonModule,
		CoursesRoutingModule,
		MaterialModule
	],
	providers: [ CourseService ]
} )
export class CoursesModule {}
