import { architectureVi } from './architecture';
import { cliVi } from './cli';
import { configurationVi } from './configuration';
import { faqVi } from './faq';
import { gettingStartedVi } from './gettingStarted';
import { securityVi } from './security';
import { setupVi } from './setup';
import { toolsVi } from './tools';
import { troubleshootingVi } from './troubleshooting';

export const docsVi = [
	gettingStartedVi,
	setupVi,
	configurationVi,
	toolsVi,
	cliVi,
	architectureVi,
	securityVi,
	faqVi,
	troubleshootingVi,
] as const;

export const docsViBySlug = new Map(docsVi.map((page) => [page.slug, page]));
