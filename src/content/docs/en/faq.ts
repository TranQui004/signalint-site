export const faqEn = [
	{ question: 'Does Signalint replace my linter or TypeScript?', answer: 'No. Oxlint, TypeScript, and optional Biome remain the diagnostic sources. Signalint invokes them, normalizes their output, caches safe reuse, and clusters the response for an MCP client.' },
	{ question: 'Does project code leave my machine?', answer: 'Signalint is a local stdio server and does not add a network transport. The MCP client using the response has its own separate data-handling policy.' },
	{ question: 'Which languages are supported?', answer: 'JavaScript and TypeScript projects only. The built-in engines are Oxlint, tsc, and Biome; arbitrary custom engines are not supported in v1.' },
	{ question: 'Does Signalint apply fixes?', answer: 'No. It reports fixable: true only when an engine supplies a structured fix, but v1 does not modify source files.' },
	{ question: 'Is Signalint a security scanner?', answer: 'No. It is not a SAST tool and does not claim to find vulnerabilities. Signalint’s own MCP argument boundary is documented in the repository threat model.' },
	{ question: 'How do monorepos work?', answer: 'The tsc adapter requires one tsconfig.json at the project root. Monorepos should provide a solution-style root config using TypeScript Project References.' },
	{ question: 'What does loop detection track?', answer: 'Only normalized lint, type, and test issue signatures that disappear and return repeatedly. It does not classify the agent’s general conversation.' },
	{ question: 'Is there an IDE extension?', answer: 'Not yet. Current integrations use MCP clients or the command-line check and stats commands.' },
	{ question: 'What does it cost?', answer: 'Signalint is free and open source under the MIT License. It runs locally and has no hosted pricing tier.' },
] as const;
