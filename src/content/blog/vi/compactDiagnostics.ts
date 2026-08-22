import type { BlogPost } from '../types';

export const compactDiagnosticsVi: BlogPost = {
	slug: 'compact-diagnostics-for-coding-agents',
	title: 'VÃ¬ sao coding agent cáº§n cháº©n Ä‘oÃ¡n gá»n, khÃ´ng cáº§n log dÃ i',
	dek: 'MCP cÃ³ thá»ƒ chuyá»ƒn nguyÃªn má»™t báº£n ghi compiler, nhÆ°ng lÃ m váº­y hiáº¿m khi giÃºp agent sá»­a code tá»‘t hÆ¡n. Pháº£n há»“i há»¯u Ã­ch pháº£i vá»«a Ä‘á»§, cÃ³ nguá»“n gá»‘c rÃµ rÃ ng vÃ  dáº«n Ä‘Æ°á»£c tá»›i bÆ°á»›c tiáº¿p theo.',
	publishedAt: '2026-08-02',
	displayDate: '2 thÃ¡ng 8, 2026',
	readingTime: '7 phÃºt Ä‘á»c',
	tags: ['MCP', 'Cháº©n Ä‘oÃ¡n', 'CÃ´ng cá»¥ cho agent'],
	discussionNumber: 5,
	discussionUrl: 'https://github.com/TranQui004/signalint-site/discussions/5',
	sections: [
		{
			heading: 'Truyá»n dá»¯ liá»‡u khÃ´ng pháº£i pháº§n khÃ³ nháº¥t',
			paragraphs: [
				'MCP giÃºp cÃ´ng cá»¥ tráº£ dá»¯ liá»‡u cho agent theo má»™t giao thá»©c thá»‘ng nháº¥t. CÃ¢u há»i khÃ³ hÆ¡n lÃ  dá»¯ liá»‡u nÃ o tháº­t sá»± Ä‘Ã¡ng Ä‘i qua ranh giá»›i Ä‘Ã³. Má»™t báº£n log lint hoáº·c compiler Ä‘áº§y Ä‘á»§ cÃ³ váº» an toÃ n, nhÆ°ng cÃ¡c lá»—i láº·p láº¡i vÃ  Ä‘Æ°á»ng dáº«n dÃ i sáº½ chiáº¿m chá»— cá»§a pháº§n ngá»¯ cáº£nh agent cáº§n Ä‘á»ƒ suy luáº­n.',
				'ÄÆ¡n vá»‹ há»¯u Ã­ch khÃ´ng pháº£i tá»«ng dÃ²ng log. ÄÃ³ lÃ  má»™t lá»—i cÃ³ Ä‘á»‹nh danh á»•n Ä‘á»‹nh, vá»‹ trÃ­, rule sinh ra lá»—i vÃ  Ä‘á»§ báº±ng chá»©ng Ä‘á»ƒ chá»n láº§n chá»‰nh sá»­a káº¿ tiáº¿p.',
			],
		},
		{
			heading: 'Giá»¯ nguyÃªn nguá»“n cháº©n Ä‘oÃ¡n, chá»‰ tá»• chá»©c láº¡i pháº£n há»“i',
			paragraphs: [
				'Má»™t MCP server chuyÃªn cháº©n Ä‘oÃ¡n khÃ´ng nÃªn tá»± nghÄ© thÃªm lá»—i hoáº·c Ä‘á»•i má»©c Ä‘á»™ nghiÃªm trá»ng cho cÃ³ váº» thÃ´ng minh. Oxlint, TypeScript hay Biome váº«n lÃ  nguá»“n sá»± tháº­t. Pháº§n server chá»‰ chuáº©n hÃ³a trÆ°á»ng dá»¯ liá»‡u, gom lá»—i trÃ¹ng, giá»›i háº¡n kÃ­ch thÆ°á»›c vÃ  nÃ³i rÃµ engine nÃ o Ä‘Ã£ tháº¥t báº¡i.',
				'Äiá»ƒm phÃ¢n biá»‡t náº±m á»Ÿ Ä‘Ã¢y: nÃ©n bá»›t pháº§n láº·p, khÃ´ng lÃ m máº¥t báº±ng chá»©ng.',
			],
			code: `{
  "schemaVersion": "1.2",
  "engines": {
    "oxlint": { "status": "ok" },
    "tsc": { "status": "error", "message": "timed out" }
  },
  "clusters": []
}`,
		},
		{
			heading: 'Cache pháº£i Ä‘i theo cÃ¡ch engine tháº­t sá»± hoáº¡t Ä‘á»™ng',
			paragraphs: [
				'Lint theo tá»«ng file vÃ  kiá»ƒm tra kiá»ƒu toÃ n chÆ°Æ¡ng trÃ¬nh lÃ  hai mÃ´ hÃ¬nh khÃ¡c nhau. Hash cá»§a file cÃ³ thá»ƒ giÃºp bá» qua má»™t láº§n cháº¡y Oxlint khi file khÃ´ng Ä‘á»•i. Vá»›i TypeScript, hash chá»‰ nÃªn quyáº¿t Ä‘á»‹nh cÃ³ cáº§n gá»i compiler hay khÃ´ng; má»™t khi Ä‘Ã£ gá»i, compiler váº«n pháº£i nhÃ¬n tháº¥y toÃ n bá»™ project graph.',
				'CÃ´ng cá»¥ MCP tá»‘t cáº§n nÃ³i rÃµ nhá»¯ng ranh giá»›i nÃ y, thay vÃ¬ gom má»i thá»© vÃ o má»™t Ä‘Æ°á»ng cháº¡y â€œnhanhâ€ chung chung.',
			],
		},
		{
			heading: 'Payload nhá» hÆ¡n pháº£i giÃºp quyáº¿t Ä‘á»‹nh bÆ°á»›c tiáº¿p theo',
			paragraphs: [
				'Giáº£m sá»‘ byte chá»‰ cÃ³ Ã½ nghÄ©a khi pháº§n cÃ²n láº¡i váº«n giá»¯ Ä‘á»‹nh danh á»•n Ä‘á»‹nh, máº«u lá»—i cá»¥ thá»ƒ, severity, kháº£ nÄƒng sá»­a tá»± Ä‘á»™ng vÃ  tráº¡ng thÃ¡i cá»§a tá»«ng engine. Nhá» váº­y agent cÃ³ thá»ƒ há»i sÃ¢u vÃ o má»™t lá»—i mÃ  khÃ´ng pháº£i cháº¡y láº¡i toÃ n dá»± Ã¡n.',
				'Má»¥c tiÃªu khÃ´ng pháº£i tráº£ lá»i cÃ ng Ã­t cÃ ng tá»‘t. Má»¥c tiÃªu lÃ  pháº£n há»“i nhá» nháº¥t nhÆ°ng váº«n Ä‘á»§ Ä‘á»ƒ Ä‘Æ°a ra quyáº¿t Ä‘á»‹nh Ä‘Ãºng.',
			],
		},
	],
};
