import type { DocsPageContent } from '../types';

export const setupVi: DocsPageContent = {
	slug: 'setup',
	title: 'Cài đặt và kết nối MCP client',
	description: 'Cấu hình Signalint cho Claude Code, Cursor hoặc Antigravity mà không phụ thuộc vào global shim.',
	eyebrow: 'Thiết lập',
	sections: [
		{ title: 'Cài trong project cần kiểm tra', paragraphs: ['Chạy thiết lập ngay từ dự án JavaScript hoặc TypeScript mà Signalint sẽ kiểm tra. Cần Node.js 20.19+ hoặc 22.12+; kiểm tra TypeScript cũng cần tsconfig.json ở project root.'], codeLabel: 'Terminal', code: 'npm install --save-dev signalint-mcp\nnpx signalint-mcp init' },
		{ title: 'init sẽ dò những gì?', paragraphs: ['npx signalint-mcp init kiểm tra project trước khi ghi bất cứ thứ gì. Nó chỉ bật tsc khi có tsconfig.json ở root, bật Biome khi có file cấu hình và dùng Oxlint khi chưa thấy linter được cấu hình.'], table: { headers: ['Dấu hiệu tìm thấy', 'Cách init đề xuất'], rows: [['tsconfig.json ở root', 'Bật tsc theo whole-program'], ['Cấu hình Oxlint', 'Bật adapter Oxlint theo file'], ['biome.json hoặc biome.jsonc', 'Bật adapter Biome tùy chọn'], ['Một MCP client ở gần', 'Đề nghị merge entry Signalint sau khi xác nhận'], ['Nhiều hoặc không có client rõ ràng', 'Hỏi client muốn dùng hoặc in snippet để copy']] } },
		{ title: 'Cấu hình Signalint thủ công', paragraphs: ['Nếu không dùng init, tạo signalint.config.json ở project root. Xem trang Cấu hình để biết đầy đủ các trường hợp lệ.'], codeLabel: 'signalint.config.json', code: '{\n  "engines": { "oxlint": true, "tsc": true, "biome": false },\n  "ignore": ["node_modules/**", "dist/**", ".signalint/**"],\n  "timeoutsMs": { "oxlint": 30000, "tsc": 120000, "biome": 30000 }\n}' },
		{ title: 'Claude Code', paragraphs: ['Project scope tạo .mcp.json có thể chia sẻ trong repository. Trên macOS hoặc Linux dùng npx trực tiếp; trên Windows native cần bọc npx bằng cmd /c. Xem tài liệu MCP của Claude Code để biết phạm vi và các bước xử lý lỗi phía client.'], codeLabel: 'Terminal', code: 'claude mcp add --scope project signalint -- npx --no-install signalint-mcp\nclaude mcp get signalint\n\n# Windows\nclaude mcp add --scope project signalint -- cmd /c npx --no-install signalint-mcp' },
		{ title: 'Cursor', paragraphs: ['Tạo .cursor/mcp.json trong project đang kiểm tra. Trên Windows native, dùng command cmd và args bắt đầu bằng /c; sau đó bật signalint trong MCP settings của Cursor.'], codeLabel: '.cursor/mcp.json', code: '{\n  "mcpServers": {\n    "signalint": {\n      "command": "npx",\n      "args": ["--no-install", "signalint-mcp"]\n    }\n  }\n}' },
		{ title: 'Antigravity', paragraphs: ['Trên Windows, Antigravity thường dùng %USERPROFILE%\\.gemini\\antigravity\\mcp_config.json. Init có thể cập nhật sau khi được xác nhận. Trên macOS/Linux dùng npx trực tiếp và luôn đặt cwd là project root tuyệt đối.'], codeLabel: 'mcp_config.json', code: '{\n  "mcpServers": {\n    "signalint": {\n      "command": "cmd",\n      "args": ["/c", "npx", "--no-install", "signalint-mcp"],\n      "cwd": "<absolute-path-to-your-project>"\n    }\n  }\n}' },
		{ title: 'Kiểm tra kết nối', bullets: ['Restart hoặc reconnect MCP client sau khi sửa cấu hình.', 'Gọi ping với {} và kiểm tra kết quả là pong.', 'Gọi check_project với { "paths": ["."] }.'], note: 'Signalint ghi cache và session artifact vào .signalint/. Không commit thư mục này.' },
		{ title: 'Kiểm tra không cần MCP client', paragraphs: ['Lệnh này trả exit code 1 khi tìm thấy diagnostic; đó là kết quả kiểm tra bình thường, không phải lỗi CLI.'], code: 'npx --no-install signalint check .' },
	],
};
