import { CommonModule }   from '@angular/common';
import { NgModule }       from '@angular/core';
import { MaterialModule } from '../../shared/material/material.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent }     from './home.component';


@NgModule( {
	declarations: [ HomeComponent ],
	imports: [
		CommonModule,
		HomeRoutingModule,
		MaterialModule
	]
} )
export class HomeModule {}
