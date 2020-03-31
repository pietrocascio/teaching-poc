import { CommonModule }         from '@angular/common';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
	{ path: 'courses', loadChildren: () => import('./features/courses/courses.module').then( m => m.CoursesModule) },
	{ path: 'users', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule) },
	{ path: '**', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) }
];

@NgModule( {
	declarations: [],
	imports: [
		CommonModule,
		RouterModule.forRoot( routes )
	],
	exports: [ RouterModule ]
} )
export class AppRoutingModule {
}
