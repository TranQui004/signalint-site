import type { DocsPageContent } from '../types';

export const toolsVi: DocsPageContent = {
	slug: 'tools',
	title: 'Các MCP tool',
	description: 'Đầu vào được kiểm tra bằng schema nghiêm ngặt và mọi đường dẫn đều phải nằm trong project root.',
	eyebrow: 'MCP schema',
	sections: [
		{ title: 'Quy tắc đầu vào', paragraphs: ['Tool argument từ chối property lạ. Path array nhận tối đa 512 string tương đối; absolute path, path thoát project, NUL và leading dash đều bị từ chối.'], note: 'Mọi path được resolve qua một containment boundary chung trước khi bất kỳ adapter nào thấy chúng.' },
		{ title: 'ping', paragraphs: ['Kiểm tra kết nối stdio. Gọi với {} và nhận pong.'], table: { headers: ['Argument', 'Kết quả'], rows: [['{}', 'pong']] } },
		{ title: 'check_project', paragraphs: ['Chạy engine đang bật trên project hiện tại, giữ kết quả từng engine độc lập và trả cluster đã sắp theo priority 1 trước.'], code: '{ "paths": ["."] }' },
		{ title: 'check_files', paragraphs: ['Kiểm tra danh sách file tương đối. Oxlint/Biome chỉ nhận cache miss; tsc dùng file để quyết định có cần chạy, nhưng khi chạy luôn nhìn thấy toàn project.'], code: '{ "paths": ["src/index.ts", "src/config.ts"] }' },
		{ title: 'get_issue_detail', paragraphs: ['Lấy chi tiết theo clusterId hoặc issueId từ lần check thành công gần nhất. Tham chiếu hết hạn trả về status stale, không phải mảng rỗng hoặc lỗi chung chung.'], code: '{ "issueId": "issue-…" }' },
		{ title: 'get_loop_status', paragraphs: ['Cho biết signature lint/type/test nào đã biến mất rồi quay lại đủ số lần trong phiên.'], code: '{}' },
		{ title: 'CheckResponse · schema 1.1', codeLabel: 'JSON', code: '{\n  "schemaVersion": "1.1",\n  "engines": {\n    "oxlint": { "status": "ok" },\n    "tsc": { "status": "ok" },\n    "biome": { "status": "disabled" }\n  },\n  "clusters": [],\n  "truncated": false\n}' },
		{ title: 'Cluster', table: { headers: ['Trường', 'Ý nghĩa'], rows: [['clusterId', 'Định danh ổn định trong response hiện tại'], ['priority', '1 là khẩn nhất; response được sắp tăng dần'], ['sampleIssueIds', 'Mẫu issue ID khác nhau, không lặp'], ['rootCauseSummary', 'Tóm tắt nguyên nhân cho nhóm rule lớn']] } },
		{ title: 'NormalizedIssue', paragraphs: ['Mỗi issue có issueId, engine, rule, severity, message, file, location và fixable. clusterId chỉ có sau khi Cluster Engine gán cụm; absence trước khi cluster là hợp lệ.'] },
		{ title: 'Exceptional responses', paragraphs: ['Response schema 1.1 bảo toàn kết quả từ engine đã hoàn thành. Engine timeout hoặc vượt output limit có status error và message riêng dưới engines.'] },
		{ title: 'Engine timeout', paragraphs: ['Oxlint/Biome mặc định 30 giây, tsc 120 giây. Timeout kết thúc process tree và không làm treo MCP request.'] },
		{ title: 'Giới hạn output engine', paragraphs: ['Nếu stdout/stderr của engine vượt byte ceiling, Signalint dừng engine và trả lỗi có cấu trúc thay vì giữ buffer không giới hạn.'] },
	],
};
