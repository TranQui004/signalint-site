export interface DocsVersion {
	version: string;
	label: string;
	path: string;
	status: 'current' | 'archived';
}

export const DOCS_VERSIONS: readonly DocsVersion[] = [
	{ version: '0.4.0', label: '0.4.0 · current', path: 'docs/', status: 'current' },
	{ version: '0.1.0', label: '0.1.0 · archive', path: 'docs/versions/0.1/', status: 'archived' },
];