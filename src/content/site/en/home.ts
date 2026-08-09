import type { HomeContent } from '../types';

const cacheKey = `sha256(file content)
: engine
: engine config hash
: signalint version
: engine version`;
const loopWarning = `{
  "signature": "no-unused-vars:<identifier> is unused",
  "occurrences": 3,
  "hint": "This issue was fixed and reappeared 3 times — consider a different approach"
}`;
const fanout = `"engines": {
  "oxlint": { "status": "ok" },
  "tsc": { "status": "error", "message": "..." },
  "biome": { "status": "disabled" }
}`;

export const homeEn: HomeContent = {
	title: 'Signalint — compact diagnostics for coding agents',
	description: 'Published local MCP server for compact, cached, loop-aware JavaScript and TypeScript diagnostics.',
	hero: { eyebrow: 'Local stdio MCP / signalint-mcp@0.2.0', title: 'Engine diagnostics.', emphasis: 'Agent-sized responses.', lede: 'Signalint is a local stdio MCP server that runs Oxlint, TypeScript, and optional Biome checks—then caches unchanged work, clusters repeated issues, and flags fix loops before sending a versioned response back to the coding agent.', primaryAction: 'Read the setup', secondaryAction: 'Inspect the source ↗', manifestTitle: 'Runtime manifest', manifestState: 'local process', installLabel: 'Install from npm' },
	manifestLabels: ['Transport', 'Package', 'Engines', 'Response', 'License'],
	statsAria: 'Measured and contractual facts',
	stats: [
		{ label: 'Payload reduction', value: 86.53, decimals: 2, suffix: '%', detail: 'Current 40-issue fixture: 9,151 B raw versus 1,233 B clustered.' },
		{ label: 'Incremental check', value: 3.10, decimals: 2, suffix: ' ms', detail: 'Latest local acceptance run; the enforced ceiling is 300 ms for the 50-file fixture.' },
		{ label: 'Fixture compression', value: 40, suffix: ' → ', secondaryValue: 4, detail: 'Forty raw issues grouped into four rule-first clusters.' },
		{ label: 'Input boundary', value: 512, suffix: '', detail: 'Maximum project-relative paths accepted in one MCP call.' },
	],
	storyHeading: { index: '01 / response', title: 'See what the agent sees.', body: 'Scroll through the recorded 40-issue fixture as normalized rows become a bounded schema 1.1 response.' },
	diagnostic: { ariaLabel: 'Scroll-driven diagnostic compression demo', steps: [
		{ kicker: '01 / engine output', title: 'Forty valid issues can still be a poor agent response.', body: 'The engines stay authoritative. Signalint first normalizes their locations, rule IDs, severity, and messages.' },
		{ kicker: '02 / rule-first grouping', title: 'Repeated symptoms become one review target.', body: 'Large rule groups spanning multiple files receive one root-cause summary and distinct sample issue IDs.' },
		{ kicker: '03 / bounded response', title: 'The agent receives four clusters, not forty rows.', body: 'The controlled fixture falls from 9,151 bytes to 1,233 bytes while preserving engine state and issue references.' },
	], rawStatus: 'raw / 40 issues', clusteredStatus: 'clustered / 4 groups', additionalIssues: '34 additional normalized issues', clusterCount: '10 issues / 10 files', priorityLabel: 'priority 1 first', rawIssuesLabel: 'raw issues', clustersLabel: 'clusters', playbackLabel: 'passive playback', scrollLabel: 'scroll to trace' },
	pipelineHeading: { index: '02 / mechanics', title: 'A local pipeline with explicit boundaries.', body: 'Signalint preserves the diagnostic engines as the source of truth and makes cache, failure, and loop state explicit.' },
	flow: { ariaLabel: 'Animated Signalint request flow', incomingLabel: 'Incoming MCP tool call', inputLabel: 'Input', inputValue: '3 project-relative paths', workingDirectoryLabel: 'Working directory', workingDirectoryValue: 'project root', executionLabel: 'Execution', executionValue: 'local process', steps: [
		{ kicker: 'Trust boundary', title: 'Validate before reading.', body: 'Zod schemas reject malformed arguments. Canonical path checks keep every accepted file inside the project root.', result: '3 paths accepted' },
		{ kicker: 'Engine fan-out', title: "Preserve each engine's model.", body: 'File-local engines receive misses. TypeScript runs against the complete configured program when relevant files change.' },
		{ kicker: 'Common contract', title: 'Normalize, then cluster.', body: 'Engine-native diagnostics become normalized issues before rule-first grouping assigns priority and distinct issue references.', result: '40 issues → 4 clusters' },
		{ kicker: 'Bounded response', title: 'Return what completed.', body: "Schema 1.1 keeps each engine's outcome explicit, so one failure cannot erase another engine's diagnostics.", result: 'schemaVersion 1.1' },
	], engineResults: [{ name: 'oxlint', value: '1 cache miss' }, { name: 'tsc', value: 'whole project' }, { name: 'biome', value: 'disabled' }], outcomes: [{ name: 'oxlint', value: 'ok' }, { name: 'tsc', value: 'ok' }, { name: 'biome', value: 'disabled', muted: true }], outcomeNote: 'Completed diagnostics remain available even when another engine errors.' },
	capabilities: [
		{ number: '01', kicker: 'cache identity', title: 'Version-aware reuse', body: 'A result is reused only when file content, the recognized root engine-config hash, Signalint code version, and the installed engine version still match.', code: cacheKey, wide: true },
		{ number: '02', kicker: 'loop memory', title: 'Oscillation is visible', body: 'An issue that disappears and returns repeatedly produces a narrow warning, not a guess about the wider conversation.', code: loopWarning },
		{ number: '03', kicker: 'engine fan-out', title: 'Partial results survive', body: 'One engine can fail without discarding diagnostics another engine already completed.', code: fanout },
		{ number: '04', kicker: 'process boundary', title: 'Bounded execution', body: 'Default deadlines are 30 seconds for Oxlint, 120 seconds for tsc, and 30 seconds for Biome. Timeout and cancellation terminate the process tree.' },
		{ number: '05', kicker: 'storage', title: 'Local state stays bounded', body: 'The SQLite cache evicts least-recently-used rows above 10,000 entries. Session history replays a bounded tail and rotates to a single .1 backup.' },
	],
	enginesHeading: { index: '03 / engines', title: 'Each engine keeps its execution model.', body: "Signalint coordinates three tools without pretending they work alike. Cache decisions follow each engine's real scope." },
	engines: [
		{ name: 'Oxlint', analysis: 'File-local analysis', receivesLabel: 'Receives', receives: 'Only changed cache-miss paths', body: 'Signalint batches misses and stores normalized results per engine and file.', cacheLabel: 'Cache scope', cacheScope: 'engine + file', deadlineLabel: 'Deadline', deadline: '30 s' },
		{ name: 'TypeScript', analysis: 'Whole-program analysis', receivesLabel: 'Receives', receives: 'The complete configured project', body: 'Normal roots use --project; solution-style roots with references use --build.', cacheLabel: 'Cache scope', cacheScope: 'run decision', deadlineLabel: 'Deadline', deadline: '120 s' },
		{ name: 'Biome', analysis: 'Optional file-local analysis', receivesLabel: 'Receives', receives: 'Changed cache-miss paths when enabled', body: 'Disabled by default, with an explicit engine status in every check response.', cacheLabel: 'Cache scope', cacheScope: 'engine + file', deadlineLabel: 'Deadline', deadline: '30 s' },
	],
	clientsHeading: { index: '04 / clients', title: 'Connect the server where the agent works.', body: 'One local server, {COUNT} client-specific configuration paths. The init command detects nearby clients and writes only after confirmation.' },
	clients: [
		{ scope: '01 / project scope', name: 'Claude Code', body: 'Share a project-local MCP entry through .mcp.json.', command: 'claude mcp add --scope project signalint …', icon: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/claude/default.svg' },
		{ scope: '02 / project scope', name: 'Cursor', body: 'Use .cursor/mcp.json with the published npm binary.', command: 'npx --no-install signalint-mcp', icon: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/cursor/default.svg' },
		{ scope: '03 / user config', name: 'Antigravity', body: 'Set an explicit project working directory in mcp_config.json.', command: 'cmd /c npx --no-install signalint-mcp', icon: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/google-antigravity/default.svg' },
		{ scope: '04 / global or project', name: 'Codex CLI', body: 'Shared by the ChatGPT desktop app, Codex CLI, and IDE extension via config.toml.', command: 'codex mcp add signalint -- npx --no-install signalint-mcp', icon: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/codex/light.svg' },
	],
	setupAction: 'Read the setup guide',
	schemaAction: 'Inspect the schemas',
};
