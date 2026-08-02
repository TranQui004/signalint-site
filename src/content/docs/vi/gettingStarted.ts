import type { DocsPageContent } from '../types';

export const gettingStartedVi: DocsPageContent = {
	slug: '',
	title: 'Bắt đầu với Signalint',
	description: 'Cài một MCP server chạy cục bộ, kết nối coding agent và nhận phản hồi chẩn đoán gọn theo schema 1.1.',
	eyebrow: 'Tài liệu tiếng Việt',
	sections: [
		{ title: 'Signalint làm gì?', paragraphs: ['Signalint không thay thế linter hay TypeScript. Nó gọi engine sẵn có, chuẩn hóa kết quả, dùng lại phần check an toàn và gom lỗi lặp trước khi trả về qua MCP.', 'Mọi thứ chạy bằng stdio ngay trên máy. Signalint không mở HTTP server và không tự gửi mã nguồn sang dịch vụ riêng.'] },
		{ title: 'Yêu cầu', bullets: ['Node.js 20.19+ hoặc 22.12+.', 'Một project JavaScript hoặc TypeScript.', 'Muốn chạy tsc cần tsconfig.json ở project root.'] },
		{ title: 'Cài và khởi tạo', paragraphs: ['Cài package trong project cần kiểm tra. init dò engine và MCP client trước khi đề nghị ghi signalint.config.json hoặc entry client.'], codeLabel: 'Terminal', code: 'npm install --save-dev signalint-mcp\nnpx signalint-mcp init', note: 'Bạn luôn thấy lựa chọn trước khi xác nhận; init không âm thầm ghi cấu hình client.' },
		{ title: 'Kết nối MCP client', paragraphs: ['Signalint hỗ trợ Claude Code, Cursor và Antigravity. Dùng init là cách nhanh nhất; nếu cấu hình thủ công, xem trang Cài đặt và client để có snippet đúng cho hệ điều hành.'] },
		{ title: 'Claude Code', headingLevel: 3, paragraphs: ['Dùng project scope để chia sẻ .mcp.json trong repository; trên Windows dùng cmd /c trước npx.'] },
		{ title: 'Cursor', headingLevel: 3, paragraphs: ['Tạo .cursor/mcp.json trong project và bật server trong MCP settings sau khi restart Cursor.'] },
		{ title: 'Antigravity', headingLevel: 3, paragraphs: ['Đặt cwd tuyệt đối là project root. Trên Windows, cmd /c npx hoặc node trỏ thẳng vào compiled entrypoint tránh lỗi shim.'] },
		{ title: 'Xác minh kết nối', ordered: true, bullets: ['Reconnect MCP client sau khi thay đổi cấu hình.', 'Gọi ping với {} và nhận pong.', 'Gọi check_project với { "paths": ["."] }.'], note: 'Cache và lịch sử phiên nằm trong .signalint/. Thư mục này chỉ dùng cục bộ và không nên commit.' },
		{ title: 'Check không cần MCP client', paragraphs: ['Có thể chạy pipeline tương tự từ terminal. Exit code 1 khi tìm thấy lỗi là hành vi expected của lệnh check.'], code: 'npx --no-install signalint check .' },
	],
};
