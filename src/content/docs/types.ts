export interface DocsTable {
	headers: readonly string[];
	rows: readonly (readonly string[])[];
}

export interface DocsSection {
	title: string;
	headingLevel?: 2 | 3;
	paragraphs?: readonly string[];
	bullets?: readonly string[];
	ordered?: boolean;
	rows?: readonly { label: string; value: string }[];
	code?: string;
	codeLabel?: string;
	note?: string;
	table?: DocsTable;
}

export interface DocsPageContent {
	slug: string;
	title: string;
	description: string;
	eyebrow: string;
	sections: readonly DocsSection[];
}
