export interface ReleaseData {
	version: string;
	date: string;
	dateTime: string;
	title: string;
	items: string[];
}

export const fetchLiveNpmVersion = async (): Promise<string> => {
	try {
		const res = await fetch('https://registry.npmjs.org/signalint-mcp/latest');
		if (!res.ok) return '0.3.3';
		const data = await res.json();
		return data.version || '0.3.3';
	} catch (err) {
		return '0.3.3';
	}
};

export const fetchLiveReleases = async (): Promise<readonly ReleaseData[]> => {
	try {
		const res = await fetch('https://api.github.com/repos/TranQui004/signalint/releases', {
			headers: { 'User-Agent': 'signalint-site-build' }
		});
		if (!res.ok) return [];
		const data = await res.json();
		
		return data.map((release: any) => {
			const dateObj = new Date(release.published_at || release.created_at);
			const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
			const dateStr = `${dateObj.getDate()} ${monthNames[dateObj.getMonth()]} ${dateObj.getFullYear()}`;
			const dateTimeStr = dateObj.toISOString().split('T')[0];
			
			// Extract bullet points from markdown body
			const bodyLines = release.body ? release.body.split('\n') : [];
			const items = bodyLines
				.map((line: string) => line.trim())
				.filter((line: string) => line.startsWith('- ') || line.startsWith('* '))
				.map((line: string) => line.substring(2).trim());

			return {
				version: release.tag_name.replace(/^v/, ''),
				date: dateStr,
				dateTime: dateTimeStr,
				title: release.name || release.tag_name,
				items: items.length > 0 ? items : ['See GitHub release notes for details.']
			};
		});
	} catch (err) {
		return [];
	}
};
