import { NgModule }          from '@angular/core';
import { FlexLayoutModule }  from '@angular/flex-layout';
import { MatButtonModule }   from '@angular/material/button';
import { MatCardModule }     from '@angular/material/card';
import { MatDialogModule }   from '@angular/material/dialog';
import { MatIconModule }     from '@angular/material/icon';
import { MatSidenavModule }  from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule }    from '@angular/material/table';
import { MatToolbarModule }  from '@angular/material/toolbar';

const materialModules = [
	MatToolbarModule,
	MatIconModule,
	MatSidenavModule,
	MatCardModule,
	MatButtonModule,
	MatDialogModule,
	MatTableModule,
	MatSnackBarModule
];

@NgModule( {
	declarations: [],
	imports: [ FlexLayoutModule, ...materialModules ],
	exports: [ FlexLayoutModule, ...materialModules ]

} )
export class MaterialModule {}
