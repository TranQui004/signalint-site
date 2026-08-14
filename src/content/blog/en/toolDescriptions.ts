import type { BlogPost } from '../types';

const checkFilesAfter = `"Runs Oxlint and TypeScript (and optionally Biome) lint and type diagnostics on a specific list of files, using per-engine content-hash caching to skip unchanged files. Read-only; no files are written or modified. Use this for incremental checks after editing specific files; use check_project for a full project scan. The files parameter expects relative file paths (not glob patterns) within the project directory — absolute paths or paths outside the root return an error response. Caching is file-content-hash-based: a file is re-checked only when its content or the engine's config file (e.g., .oxlintrc, tsconfig.json) has changed since the last call, not based on git status. TypeScript is a whole-program engine: it re-runs whenever any TypeScript file in the request has changed content."`;

export const toolDescriptionsEn: BlogPost = {
	slug: 'improving-mcp-tool-descriptions',
	title: 'Improving MCP tool descriptions from a B to an A grade',
	dek: 'Glama grades MCP servers on six rubric dimensions. Signalint scored B tier before v0.3.4. Here is what the rubric actually measures, what was missing, and what the rewrite changed.',
	publishedAt: '2026-08-11',
	displayDate: '11 August 2026',
	readingTime: '6 min read',
	tags: ['MCP', 'Tool descriptions', 'TDQS'],
	discussionNumber: 17,
	discussionUrl: 'https://github.com/TranQui004/signalint-site/discussions/17',
	sections: [
		{
			heading: 'What the rubric measures',
			paragraphs: [
				'Glama publishes a Tool Definition Quality Score (TDQS) for MCP servers listed in its registry. The overall score combines two components: Tool Definition Quality (70%) and Server Coherence (30%).',
				'Tool Definition Quality is computed as 60% mean TDQS + 40% minimum TDQS across all tools. The minimum term means a single poorly described tool drags the server score down regardless of how well the others score. Each tool is rated 1–5 across six dimensions, which carry different weights: Purpose Clarity (25%), Usage Guidelines (20%), Behavioral Transparency (20%), Parameter Semantics (15%), Conciseness & Structure (10%), and Contextual Completeness (10%).',
				'Server Coherence evaluates how well the tools work together as a set, scoring four dimensions equally: Disambiguation, Naming Consistency, Tool Count Appropriateness, and Completeness. Tiers are A (≥3.5/5), B (≥3.0/5), C (≥2.0/5), D (≥1.0/5), and F below that. B and above is considered passing.',
			],
		},
		{
			heading: 'Where Signalint scored before v0.3.4',
			paragraphs: [
				'Before the v0.3.4 rewrite, Signalint\'s five tools had one-sentence descriptions. The Tool Definition Quality component — the server-level TDQS score computed from all five tools — placed it in B tier. The single weakest tool was check_files, which scored 2.7 out of 5 (the lowest of the five), with Behavioral Transparency and Completeness both at 2/5.',
				'check_files had the shortest description of any tool at the time: "Checks changed files with per-engine content and configuration caching." That sentence notes that caching exists but does not explain what the cache key is, whether the tool is read-only, what happens on invalid paths, when to prefer it over check_project, or what "relative file paths" means in practice.',
				'The Behavioral Transparency weakness was consistent across all five tools, not just check_files. None of the descriptions disclosed whether the tool modifies state, what happens on an invalid argument, or what a stale reference looks like.',
			],
		},
		{
			heading: 'The check_files rewrite as a concrete example',
			paragraphs: [
				'The v0.3.4 rewrite replaced all five descriptions. The check_files description is the clearest demonstration because the gap was largest there.',
				'The new description — quoted verbatim from src/index.ts in the signalint repository — reads:',
			],
			code: checkFilesAfter,
		},
		{
			heading: 'What each change addresses',
			paragraphs: [
				'"Runs Oxlint and TypeScript (and optionally Biome) lint and type diagnostics": Purpose Clarity. The original "checks" was too generic for a tool that names and runs specific engines; the rubric scored it 4/5 for this reason.',
				'"Use this for incremental checks after editing specific files; use check_project for a full project scan": Usage Guidelines. Before the rewrite, no tool description told the calling agent when to prefer one tool over another.',
				'"The files parameter expects relative file paths (not glob patterns)": Parameter Semantics. The original wording said "changed files", which implies git status; the real constraint is file-content-hash-based caching, unrelated to git.',
				'"Read-only; no files are written or modified" and "absolute paths or paths outside the root return an error response": Behavioral Transparency, the dimension that was consistently 2 to 3/5 across all five tools before the rewrite.',
				'"Caching is file-content-hash-based: a file is re-checked only when its content or the engine\'s config file has changed since the last call, not based on git status. TypeScript is a whole-program engine: it re-runs whenever any TypeScript file in the request has changed content.": Contextual Completeness. This is the actual caching contract that determines when work is skipped; the original said only "per-engine content and configuration caching" without explaining the mechanism.',
			],
		},
		{
			heading: 'The general lesson',
			paragraphs: [
				'MCP tool descriptions are not documentation for humans browsing a registry. They are the primary signal a language model receives about how to use a tool correctly. A description that states what a tool does is useful; one that also discloses side effects, what it refuses, and when to prefer it over a sibling tool is substantially more useful.',
				'The six TDQS dimensions — Purpose Clarity, Usage Guidelines, Behavioral Transparency, Parameter Semantics, Conciseness & Structure, Contextual Completeness — map directly to questions a calling agent asks before deciding which tool to invoke and what arguments to pass. A description that answers all six consistently and verifiably, not one that simply uses more words, is what the rubric rewards.',
				'The process that worked here: read the actual implementation, find the facts that are already true about the code (read-only, file-content hash, path validation behavior, whole-program tsc), and state them plainly. The original descriptions were not wrong; they were incomplete in ways that left the calling model to guess.',
			],
		},
	],
};
