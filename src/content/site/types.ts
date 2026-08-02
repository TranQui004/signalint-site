export interface HomeStat {
	label: string;
	value: number;
	decimals?: number;
	suffix: string;
	secondaryValue?: number;
	detail: string;
}

export interface HomeCapability {
	number: string;
	kicker: string;
	title: string;
	body: string;
	code?: string;
	wide?: boolean;
}

export interface HomeEngine {
	name: string;
	analysis: string;
	receivesLabel: string;
	receives: string;
	body: string;
	cacheLabel: string;
	cacheScope: string;
	deadlineLabel: string;
	deadline: string;
}

export interface HomeClient {
	scope: string;
	name: string;
	body: string;
	command: string;
	icon: string;
}

export interface DiagnosticCopy {
	ariaLabel: string;
	steps: readonly { kicker: string; title: string; body: string }[];
	rawStatus: string;
	clusteredStatus: string;
	additionalIssues: string;
	clusterCount: string;
	priorityLabel: string;
	rawIssuesLabel: string;
	clustersLabel: string;
	playbackLabel: string;
	scrollLabel: string;
}

export interface FlowCopy {
	ariaLabel: string;
	incomingLabel: string;
	inputLabel: string;
	inputValue: string;
	workingDirectoryLabel: string;
	workingDirectoryValue: string;
	executionLabel: string;
	executionValue: string;
	steps: readonly { kicker: string; title: string; body: string; result?: string }[];
	engineResults: readonly { name: string; value: string }[];
	outcomes: readonly { name: string; value: string; muted?: boolean }[];
	outcomeNote: string;
}

export interface HomeContent {
	title: string;
	description: string;
	hero: { eyebrow: string; title: string; emphasis: string; lede: string; primaryAction: string; secondaryAction: string; manifestTitle: string; manifestState: string; installLabel: string };
	manifestLabels: readonly string[];
	statsAria: string;
	stats: readonly HomeStat[];
	storyHeading: { index: string; title: string; body: string };
	diagnostic: DiagnosticCopy;
	pipelineHeading: { index: string; title: string; body: string };
	flow: FlowCopy;
	capabilities: readonly HomeCapability[];
	enginesHeading: { index: string; title: string; body: string };
	engines: readonly HomeEngine[];
	clientsHeading: { index: string; title: string; body: string };
	clients: readonly HomeClient[];
	setupAction: string;
	schemaAction: string;
}
