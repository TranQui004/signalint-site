import type { DocsPageContent } from '../types';

export const configurationVi: DocsPageContent = {
	slug: 'configuration',
	title: 'Cáº¥u hÃ¬nh',
	description: 'Báº­t hoáº·c táº¯t engine, loáº¡i trá»« Ä‘Æ°á»ng dáº«n vÃ  Ä‘áº·t timeout trong signalint.config.json.',
	eyebrow: 'Tham chiáº¿u',
	sections: [
		{ title: 'Cáº¥u hÃ¬nh máº·c Ä‘á»‹nh', paragraphs: ['Signalint Ä‘á»c signalint.config.json táº¡i project root. File lÃ  tÃ¹y chá»n; trÆ°á»ng bá»‹ bá» qua nháº­n default. KhÃ³a láº¡ hoáº·c sai kiá»ƒu dá»¯ liá»‡u táº¡o lá»—i cáº¥u hÃ¬nh.'], codeLabel: 'signalint.config.json', code: '{\n  "engines": { "oxlint": true, "tsc": true, "biome": false },\n  "ignore": ["node_modules/**", "dist/**", ".signalint/**"],\n  "timeoutsMs": { "oxlint": 30000, "tsc": 120000, "biome": 30000 }\n}' },
		{ title: 'CÃ¡c trÆ°á»ng cáº¥p cao nháº¥t', table: { headers: ['TrÆ°á»ng', 'Kiá»ƒu', 'Máº·c Ä‘á»‹nh', 'Ã nghÄ©a'], rows: [['engines', 'object', 'Xem dÆ°á»›i', 'Báº­t hoáº·c táº¯t tá»«ng engine tÃ­ch há»£p sáºµn'], ['ignore', 'string[]', 'node_modules/**, dist/**, .signalint/**', 'ÄÆ°á»ng dáº«n tÆ°Æ¡ng Ä‘á»‘i bá»‹ bá» khá»i file yÃªu cáº§u vÃ  diagnostic cuá»‘i'], ['timeoutsMs', 'object', 'Xem dÆ°á»›i', 'Deadline tiáº¿n trÃ¬nh, tÃ­nh báº±ng mili-giÃ¢y']] } },
		{ title: 'engines', paragraphs: ['Engine bá»‹ bá» qua giá»¯ default riÃªng cá»§a nÃ³, khÃ´ng tá»± bá»‹ Ã©p thÃ nh false.'], table: { headers: ['TrÆ°á»ng', 'Kiá»ƒu', 'Máº·c Ä‘á»‹nh', 'HÃ nh vi'], rows: [['oxlint', 'boolean', 'true', 'Cháº¡y diagnostic Oxlint theo file'], ['tsc', 'boolean', 'true', 'Cháº¡y diagnostic TypeScript toÃ n chÆ°Æ¡ng trÃ¬nh tá»« root tsconfig'], ['biome', 'boolean', 'false', 'Cháº¡y diagnostic Biome theo file']] } },
		{ title: 'ignore', paragraphs: ['Má»—i pháº§n tá»­ lÃ  má»™t glob tÆ°Æ¡ng Ä‘á»‘i, khÃ´ng rá»—ng. Signalint há»— trá»£ *, **, ? vÃ  chuáº©n hÃ³a dáº¥u phÃ¢n cÃ¡ch cá»§a Windows. VÃ¬ tsc lÃ  whole-program, compiler váº«n nhÃ¬n tháº¥y project Ä‘áº§y Ä‘á»§ khi Ä‘Ã£ cháº¡y; diagnostic khá»›p pattern chá»‰ bá»‹ bá» khá»i response.'], note: 'Diagnostic cÃ³ Ä‘Æ°á»ng dáº«n chá»©a node_modules luÃ´n bá»‹ loáº¡i trá»«, báº¥t ká»ƒ ignore Ä‘Æ°á»£c cáº¥u hÃ¬nh tháº¿ nÃ o.' },
		{ title: 'timeoutsMs', paragraphs: ['Khi timeout, Signalint káº¿t thÃºc process tree cá»§a engine Ä‘Ã³. Trong response schema 1.2, engine nháº­n status error bÃªn trong engines vÃ  diagnostic tá»« engine khÃ¡c Ä‘Ã£ xong váº«n Ä‘Æ°á»£c giá»¯.'], table: { headers: ['TrÆ°á»ng', 'Kiá»ƒu', 'Máº·c Ä‘á»‹nh'], rows: [['oxlint', 'sá»‘ nguyÃªn dÆ°Æ¡ng', '30.000 ms'], ['tsc', 'sá»‘ nguyÃªn dÆ°Æ¡ng', '120.000 ms'], ['biome', 'sá»‘ nguyÃªn dÆ°Æ¡ng', '30.000 ms']] } },
		{ title: 'Cáº¥u hÃ¬nh riÃªng cá»§a engine', paragraphs: ['Giá»¯ rule lint vÃ  compiler trong file native. Cache v1 nháº­n .oxlintrc, .oxlintrc.json, oxlint.json, tsconfig.json, biome.json vÃ  biome.jsonc á»Ÿ root. Thay Ä‘á»•i má»™t file nháº­n diá»‡n sáº½ vÃ´ hiá»‡u cache cá»§a engine liÃªn quan.'], note: 'CÃ¡c nguá»“n há»£p lá»‡ khÃ¡c nhÆ° .oxlintrc.jsonc, cáº¥u hÃ¬nh extends vÃ  config lá»“ng trong package chÆ°a tham gia cache hash v1. Sau khi Ä‘á»•i chÃºng, hÃ£y xÃ³a .signalint/.' },
	],
};
