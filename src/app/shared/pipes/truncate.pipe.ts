import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
	name: 'truncate'
} )
export class TruncatePipe implements PipeTransform {

	transform( value: string, ...args: any[] ): string {
		let limitChar = args.length > 0 ? parseInt( args[ 0 ], 10 ) : 50;
		let trail = args.length > 1 ? args[ 1 ] : '...';

		return value.length > 1 ? value.substring( 0, limitChar ) + trail : value;
	}

}
