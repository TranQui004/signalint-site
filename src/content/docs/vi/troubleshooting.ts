import type { DocsPageContent } from '../types';

export const troubleshootingVi: DocsPageContent = {
	slug: 'troubleshooting',
	title: 'Khắc phục sự cố',
	description: 'Các lỗi kết nối, cấu hình TypeScript, npm shim và cache thường gặp.',
	eyebrow: 'Hỗ trợ',
	sections: [
		{ title: 'Bắt đầu với ping', paragraphs: ['Gọi ping trước để tách lỗi handshake khỏi lỗi engine hoặc cấu hình project. Nếu ping không trả pong, xem stderr của server và kiểm tra command/args của MCP client.'] },
		{ title: 'Windows command shim', paragraphs: ['npm link có thể tạo .cmd shim không ổn định cho signalint và signalint-mcp. Dùng node trỏ thẳng vào dist/src/cli.js cho stats hoặc dist/src/index.js cho MCP server.'], code: 'node <absolute-path>/dist/src/index.js' },
		{ title: 'TypeScript không báo lỗi như mong đợi', paragraphs: ['Cần tsconfig.json ở project root. Root solution config nên có files: [] và references tới sub-project composite; Signalint sẽ chọn tsc --build khi thấy references.'] },
		{ title: 'check_files có vẻ trả tsc cũ', paragraphs: ['check_files chỉ biết các file bạn gửi vào. Nếu dependency đổi nhưng không nằm trong lần gọi đó, tsc có thể bị skip dựa trên snapshot cũ. Gọi check_project hoặc đưa file dependency đã đổi vào paths.'] },
		{ title: 'Issue reference đã hết hạn', paragraphs: ['get_issue_detail chỉ đọc kết quả thành công gần nhất. Sau một lần check mới, clusterId hoặc issueId cũ có thể trả status stale; hãy chạy check_project rồi lấy reference mới.'] },
		{ title: 'Reset state cục bộ', paragraphs: ['Xóa .signalint/ chỉ khi cần reset cache, tsbuildinfo và session history. Đây là artifact cục bộ, không phải source code dự án.'] },
		{ title: 'Xem check từ terminal', paragraphs: ['Chạy lệnh CLI để xem cùng pipeline ngoài MCP client. Sau khi đổi source checkout, build lại và reconnect client vì tiến trình cũ vẫn có thể phục vụ dist cũ.'], code: 'npx --no-install signalint check .' },
	],
};
