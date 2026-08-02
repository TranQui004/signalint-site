export type Locale = 'en' | 'vi';

export interface LocaleRoutes {
	en: string;
	vi: string;
}

/** Maps the current static route to its English and Vietnamese counterparts. */
export function getLocaleRoutes(pathname: string, base: string): LocaleRoutes {
	const normalizedBase = base.replace(/\/?$/, '/');
	const pathWithinSite = pathname.startsWith(normalizedBase)
		? pathname.slice(normalizedBase.length)
		: pathname.replace(/^\//, '');
	const englishPath = pathWithinSite.replace(/^vi\/?/, '');
	const safeEnglishPath = englishPath.startsWith('docs/versions/') ? 'docs/' : englishPath;
	return {
		en: `${normalizedBase}${safeEnglishPath}`,
		vi: `${normalizedBase}vi/${safeEnglishPath}`,
	};
}
