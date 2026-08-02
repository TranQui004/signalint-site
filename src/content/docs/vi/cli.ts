import type { DocsPageContent } from '../types';

export const cliVi: DocsPageContent = {
	slug: 'cli',
	title: 'CLI và số liệu phiên',
	description: 'Thiết lập dự án, chạy check trực tiếp và đọc số liệu dogfooding từ session log.',
	eyebrow: 'Dòng lệnh',
	sections: [
		{ title: 'init', code: 'npx signalint-mcp init', paragraphs: ['Dò engine, file cấu hình và MCP client gần project; tạo signalint.config.json hợp lý rồi đề nghị merge entry server.'] },
		{ title: 'check', code: 'npx --no-install signalint check .', paragraphs: ['Chạy cùng check pipeline với MCP server. Exit code 1 khi có diagnostic là kết quả check, không phải crash khi khởi động CLI.'] },
		{ title: 'stats', code: 'npx --no-install signalint stats', paragraphs: ['Đọc session.jsonl đang hoạt động cùng file .1 đã rotate, rồi tổng hợp payload reduction, engine-file cache hit rate, latency trung bình/tối đa và số loop warning.'], note: 'Số liệu này phản ánh các lần check thật đã được ghi lại, không phải ước lượng.' },
		{ title: 'Định nghĩa metric', table: { headers: ['Metric', 'Ý nghĩa'], rows: [['Payload reduction', 'Mức giảm byte từ raw issue list sang clustered response'], ['Engine-file cache hit rate', 'Tỷ lệ lookup theo cặp engine + file trả cache hit; không phải tỷ lệ unique file hay tỷ lệ tránh subprocess'], ['Latency', 'Thời gian tường thành của cả check_project hoặc check_files'], ['Loop warnings', 'Số lần phản hồi có cảnh báo signature biến mất rồi quay lại']] } },
		{ title: 'Artifact cục bộ', table: { headers: ['Đường dẫn', 'Mục đích'], rows: [['.signalint/cache.sqlite', 'Cache SQLite có giới hạn LRU'], ['.signalint/cache/tsc.tsbuildinfo', 'Trạng thái incremental riêng của TypeScript'], ['.signalint/session.jsonl', 'Lịch sử signature và metric theo phiên'], ['.signalint/session.jsonl.1', 'Bản log trước khi rotate']] } },
	],
};
