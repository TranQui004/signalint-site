import type { BlogPost } from '../types';

const checkFilesBefore = `"Checks changed files with per-engine content and configuration caching."`;
const checkFilesAfter = `"Runs Oxlint and TypeScript (and optionally Biome) lint and type diagnostics on a specific list of files, using per-engine content-hash caching to skip unchanged files. Read-only; no files are written or modified. Use this for incremental checks after editing specific files; use check_project for a full project scan. The files parameter expects relative file paths (not glob patterns) within the project directory — absolute paths or paths outside the root return an error response. Caching is file-content-hash-based: a file is re-checked only when its content or the engine's config file (e.g., .oxlintrc, tsconfig.json) has changed since the last call, not based on git status. TypeScript is a whole-program engine: it re-runs whenever any TypeScript file in the request has changed content."`;

export const toolDescriptionsEn: BlogPost = {
	slug: 'improving-mcp-tool-descriptions',
	title: 'Improving MCP tool descriptions from a B to a near-A grade',
	dek: 'Glama grades MCP servers on six rubric dimensions. Signalint scored 75% before v0.3.4. Here is what the rubric actually measures, what was wrong, and what the rewrite changed.',
	publishedAt: '2026-08-11',
	displayDate: '11 August 2026',
	readingTime: '6 min read',
	tags: ['MCP', 'Tool descriptions', 'TDQS'],
	discussionNumber: 6,
	discussionUrl: 'https://github.com/TranQui004/signalint-site/discussions/6',
	sections: [
		{
			heading: 'What the rubric measures',
			paragraphs: [
				'Glama publishes a Tool Definition Quality Score (TDQS) for MCP servers listed in its registry. The score has two components: Tool Definition Quality, which covers the tool descriptions themselves and counts for 70% of the overall score, and Server Coherence, which covers consistency across tools and counts for the remaining 30%.',
				'Tool Definition Quality breaks down further into six dimensions: Purpose, Usage Guidelines, Completeness, Parameter Semantics, Behavioral Transparency, and Error Handling. Each dimension is scored 1–5 per tool, averaged across all tools, and then the rubric weights the lowest-scoring tool at 40% of the final average to penalize neglected outliers.',
				'The server-level TDQS score is a weighted combination of Tool Definition Quality and Server Coherence. Glama re-scores servers periodically as tool descriptions are updated.',
			],
		},
		{
			heading: 'Where Signalint scored before v0.3.4',
			paragraphs: [
				'Before the v0.3.4 rewrite, Signalint\'s five tools had one-sentence descriptions. The overall server-level score was 75% (approximately B). The single weakest tool was check_files, which scored 2.7 out of 5 — the lowest of the five — and scored particularly low on Behavioral Transparency (2/5) and Completeness (2/5).',
				'check_files had the shortest description of any tool at the time: "Checks changed files with per-engine content and configuration caching." That sentence states that caching exists but does not explain what the cache key is, whether the tool is read-only, what happens on invalid paths, when to prefer it over check_project, or what relative file paths means in practice.',
				'The Behavioral Transparency weakness was consistent across all five tools, not just check_files. None of the descriptions stated whether the tool modifies state, what happens on an invalid argument, or what a stale reference looks like.',
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
				'"Runs Oxlint and TypeScript (and optionally Biome) lint and type diagnostics" — this directly addresses Purpose (previously scored 4/5: "checks" was too generic for a tool that actually names specific engines).',
				'"Use this for incremental checks after editing specific files; use check_project for a full project scan" — this is the Usage Guidelines addition. Before the rewrite, no tool description told the calling agent when to prefer one tool over another.',
				'"The files parameter expects relative file paths (not glob patterns)" — Parameter Semantics. The original wording said "changed files" which implies git status; the real constraint is file-content-hash-based caching, unrelated to git.',
				'"Read-only; no files are written or modified" and "absolute paths or paths outside the root return an error response" — Behavioral Transparency and Error Handling, the two dimensions that were consistently 2–3 out of 5 across all tools.',
				'"Caching is file-content-hash-based: a file is re-checked only when its content or the engine\'s config file has changed since the last call, not based on git status. TypeScript is a whole-program engine: it re-runs whenever any TypeScript file in the request has changed content." — Completeness. This is the actual caching contract that determines when work is skipped; the original said only "per-engine content and configuration caching" without explaining the mechanism.',
			],
		},
		{
			heading: 'The general lesson',
			paragraphs: [
				'MCP tool descriptions are not documentation for humans browsing a registry. They are the primary signal a language model receives about how to use a tool correctly. A description that says what a tool does is useful; one that also says whether it has side effects, what it refuses, and when to prefer it over a sibling tool is substantially more useful.',
				'The dimensions the TDQS rubric tests — Purpose, Usage Guidelines, Completeness, Parameter Semantics, Behavioral Transparency, Error Handling — map directly to questions a calling agent asks before deciding which tool to invoke and what arguments to pass. A description that answers all six consistently and verifiably, not one that simply uses more words, is what the rubric rewards.',
				'The process that worked here: read the actual implementation, find the facts that are already true about the code (read-only, file-content hash, path validation behavior, whole-program tsc), and state them plainly. The before descriptions were not wrong; they were incomplete in ways that left the calling model to guess.',
			],
		},
	],
};
