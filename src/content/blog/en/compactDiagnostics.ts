import type { BlogPost } from '../types';

export const compactDiagnosticsEn: BlogPost = {
	slug: 'compact-diagnostics-for-coding-agents',
	title: 'Why coding agents need compact diagnostics',
	dek: 'MCP can carry a full compiler transcript. That does not mean it should. Useful diagnostic context is bounded, attributable, and shaped around the next decision.',
	publishedAt: '2026-08-02',
	displayDate: '2 August 2026',
	readingTime: '7 min read',
	tags: ['MCP', 'Diagnostics', 'Agent tooling'],
	discussionNumber: 4,
	discussionUrl: 'https://github.com/TranQui004/signalint-site/discussions/4',
	sections: [
		{
			heading: 'Transport is not the hard part',
			paragraphs: [
				'MCP gives tools a consistent way to return information to an agent. The harder question is what information deserves to cross that boundary. A raw linter or compiler transcript is technically complete, yet repeated diagnostics and long paths consume the context the agent needs for reasoning.',
				'The useful unit is not every emitted line. It is a stable issue, its location, the rule that produced it, and enough evidence to choose the next edit.',
			],
		},
		{
			heading: 'Preserve the engine, reshape the response',
			paragraphs: [
				'A diagnostics server should not invent findings or reinterpret severity to make the output look smarter. The engine remains the source of truth. The server can still normalize fields, group repetitions, bound response size, and expose partial engine failure explicitly.',
				'That distinction matters for trust: compression removes repetition, not evidence.',
			],
			code: `{
  "schemaVersion": "1.1",
  "engines": {
    "oxlint": { "status": "ok" },
    "tsc": { "status": "error", "message": "timed out" }
  },
  "clusters": []
}`,
		},
		{
			heading: 'Cache according to the tool’s real scope',
			paragraphs: [
				'File-local linting and whole-program type checking do not share an execution model. A file hash can safely skip an unchanged Oxlint invocation. For TypeScript it should only decide whether the compiler needs to run; when it runs, the compiler still needs the complete project graph.',
				'Good MCP tooling exposes those boundaries instead of hiding them behind one generic “fast” path.',
			],
		},
		{
			heading: 'A smaller payload should improve the next action',
			paragraphs: [
				'Byte reduction is useful only when the remaining response keeps stable identifiers, concrete samples, severity, fixability, and failure state. Those fields let an agent request detail without repeating the entire project check.',
				'The goal is not minimal output. It is the smallest response that still supports a correct next decision.',
			],
		},
	],
};
