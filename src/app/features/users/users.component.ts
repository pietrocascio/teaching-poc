import { Component, OnInit } from '@angular/core';
import { User }              from '../../shared/models/user';
import { UserService }       from './user.service';

@Component( {
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: [ './users.component.css' ]
} )
export class UsersComponent implements OnInit {

	displayedColumns: string[] = [
		'ID', 'firstName', 'lastName', 'username'
	];
	dataSource: User[];

	constructor( private userService: UserService ) { }

	ngOnInit(): void {
		this.userService.getUsers()
			.subscribe( data => this.dataSource = data );
	}

}
