import { Component } from '@angular/core';

interface Link {
	title: string,
	path: string,
	icon: string
}

@Component( {
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
} )
export class AppComponent {
	title = 'A Life of Learning';
	links: Link[] = [
		{ title: 'Home', path: '/home', icon: 'house' },
		{ title: 'Courses', path: '/courses', icon: 'assignment' },
		{ title: 'Users', path: '/users', icon: 'people' },
	];
}
