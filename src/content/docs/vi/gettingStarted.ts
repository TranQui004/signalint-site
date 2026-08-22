import type { DocsPageContent } from '../types';

export const gettingStartedVi: DocsPageContent = {
	slug: '',
	title: 'Báº¯t Ä‘áº§u vá»›i Signalint',
	description: 'CÃ i má»™t MCP server cháº¡y cá»¥c bá»™, káº¿t ná»‘i coding agent vÃ  nháº­n pháº£n há»“i cháº©n Ä‘oÃ¡n gá»n theo schema 1.2.',
	eyebrow: 'TÃ i liá»‡u tiáº¿ng Viá»‡t',
	sections: [
		{ title: 'Signalint lÃ m gÃ¬?', paragraphs: ['Signalint khÃ´ng thay tháº¿ linter hay TypeScript. NÃ³ gá»i engine sáºµn cÃ³, chuáº©n hÃ³a káº¿t quáº£, dÃ¹ng láº¡i pháº§n check an toÃ n vÃ  gom lá»—i láº·p trÆ°á»›c khi tráº£ vá» qua MCP.', 'Má»i thá»© cháº¡y báº±ng stdio ngay trÃªn mÃ¡y. Signalint khÃ´ng má»Ÿ HTTP server vÃ  khÃ´ng tá»± gá»­i mÃ£ nguá»“n sang dá»‹ch vá»¥ riÃªng.'] },
		{ title: 'YÃªu cáº§u', bullets: ['Node.js 20.19+ hoáº·c 22.12+.', 'Má»™t project JavaScript hoáº·c TypeScript.', 'Muá»‘n cháº¡y tsc cáº§n tsconfig.json á»Ÿ project root.'] },
		{ title: 'CÃ i vÃ  khá»Ÿi táº¡o', paragraphs: ['CÃ i package trong project cáº§n kiá»ƒm tra. init dÃ² engine vÃ  MCP client trÆ°á»›c khi Ä‘á» nghá»‹ ghi signalint.config.json hoáº·c entry client.'], codeLabel: 'Terminal', code: 'npm install --save-dev signalint-mcp\nnpx signalint-mcp init', note: 'Báº¡n luÃ´n tháº¥y lá»±a chá»n trÆ°á»›c khi xÃ¡c nháº­n; init khÃ´ng Ã¢m tháº§m ghi cáº¥u hÃ¬nh client.' },
		{ title: 'Káº¿t ná»‘i MCP client', paragraphs: ['Signalint há»— trá»£ Claude Code, Cursor vÃ  Antigravity. DÃ¹ng init lÃ  cÃ¡ch nhanh nháº¥t; náº¿u cáº¥u hÃ¬nh thá»§ cÃ´ng, xem trang CÃ i Ä‘áº·t vÃ  client Ä‘á»ƒ cÃ³ snippet Ä‘Ãºng cho há»‡ Ä‘iá»u hÃ nh.'] },
		{ title: 'Claude Code', headingLevel: 3, paragraphs: ['DÃ¹ng project scope Ä‘á»ƒ chia sáº» .mcp.json trong repository; trÃªn Windows dÃ¹ng cmd /c trÆ°á»›c npx.'] },
		{ title: 'Cursor', headingLevel: 3, paragraphs: ['Táº¡o .cursor/mcp.json trong project vÃ  báº­t server trong MCP settings sau khi restart Cursor.'] },
		{ title: 'Antigravity', headingLevel: 3, paragraphs: ['Äáº·t cwd tuyá»‡t Ä‘á»‘i lÃ  project root. TrÃªn Windows, cmd /c npx hoáº·c node trá» tháº³ng vÃ o compiled entrypoint trÃ¡nh lá»—i shim.'] },
		{ title: 'XÃ¡c minh káº¿t ná»‘i', ordered: true, bullets: ['Reconnect MCP client sau khi thay Ä‘á»•i cáº¥u hÃ¬nh.', 'Gá»i ping vá»›i {} vÃ  nháº­n pong.', 'Gá»i check_project vá»›i { "paths": ["."] }.'], note: 'Cache vÃ  lá»‹ch sá»­ phiÃªn náº±m trong .signalint/. ThÆ° má»¥c nÃ y chá»‰ dÃ¹ng cá»¥c bá»™ vÃ  khÃ´ng nÃªn commit.' },
		{ title: 'Check khÃ´ng cáº§n MCP client', paragraphs: ['CÃ³ thá»ƒ cháº¡y pipeline tÆ°Æ¡ng tá»± tá»« terminal. Exit code 1 khi tÃ¬m tháº¥y lá»—i lÃ  hÃ nh vi expected cá»§a lá»‡nh check.'], code: 'npx --no-install signalint check .' },
	],
};
