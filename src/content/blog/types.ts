export interface BlogSection {
	heading: string;
	paragraphs: readonly string[];
	code?: string;
}

export interface BlogPost {
	slug: string;
	title: string;
	dek: string;
	publishedAt: string;
	displayDate: string;
	readingTime: string;
	tags: readonly string[];
	discussionNumber: number;
	discussionUrl: string;
	sections: readonly BlogSection[];
}
