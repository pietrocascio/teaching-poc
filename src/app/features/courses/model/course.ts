export interface Course {
	id: number,
	title: string,
	tagline: string,
	category: string,
	description?: string,
	featuredImage?: string;
	startDate: Date;
	endDate: Date;
	author: string;
}
