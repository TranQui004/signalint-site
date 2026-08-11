import type { BlogPost } from '../types';

const checkFilesAfter = `"Runs Oxlint and TypeScript (and optionally Biome) lint and type diagnostics on a specific list of files, using per-engine content-hash caching to skip unchanged files. Read-only; no files are written or modified. Use this for incremental checks after editing specific files; use check_project for a full project scan. The files parameter expects relative file paths (not glob patterns) within the project directory — absolute paths or paths outside the root return an error response. Caching is file-content-hash-based: a file is re-checked only when its content or the engine's config file (e.g., .oxlintrc, tsconfig.json) has changed since the last call, not based on git status. TypeScript is a whole-program engine: it re-runs whenever any TypeScript file in the request has changed content."`;

export const toolDescriptionsVi: BlogPost = {
	slug: 'improving-mcp-tool-descriptions',
	title: 'Cải thiện mô tả công cụ MCP từ hạng B lên hạng A',
	dek: 'Glama chấm điểm MCP server theo sáu tiêu chí. Signalint ở hạng B trước v0.3.4. Bài này trình bày rubric đo gì, chỗ nào còn thiếu, và bản viết lại đã thay đổi điều gì.',
	publishedAt: '2026-08-11',
	displayDate: '11 tháng 8, 2026',
	readingTime: '6 phút đọc',
	tags: ['MCP', 'Mô tả công cụ', 'TDQS'],
	discussionNumber: 7,
	discussionUrl: 'https://github.com/TranQui004/signalint-site/discussions/7',
	sections: [
		{
			heading: 'Rubric đo những gì',
			paragraphs: [
				'Glama công bố Tool Definition Quality Score (TDQS) cho các MCP server trong registry của họ. Điểm tổng được tính từ hai phần: Tool Definition Quality (70%) và Server Coherence (30%).',
				'Tool Definition Quality được tính bằng công thức 60% trung bình TDQS cộng 40% điểm thấp nhất của các công cụ. Phần 40% điểm thấp nhất đồng nghĩa với việc chỉ một công cụ mô tả kém cũng kéo điểm toàn server xuống, bất kể các công cụ còn lại tốt đến đâu. Mỗi công cụ được chấm 1–5 điểm trên sáu tiêu chí với trọng số khác nhau: Purpose Clarity — mô tả mục đích rõ hay không (25%), Usage Guidelines — có nói khi nào nên dùng không (20%), Behavioral Transparency — công cụ có tác dụng phụ không, lỗi trả về như thế nào (20%), Parameter Semantics — tham số nghĩa là gì, ràng buộc ra sao (15%), Conciseness & Structure — gọn và mạch lạc không (10%), và Contextual Completeness — đủ ngữ cảnh để gọi đúng không (10%).',
				'Server Coherence đánh giá xem các công cụ có làm việc ăn khớp với nhau không, gồm bốn tiêu chí ngang bằng nhau: khả năng phân biệt giữa các công cụ, tính nhất quán trong cách đặt tên, số lượng công cụ có hợp lý không, và tập hợp công cụ có đủ để hoàn thành luồng công việc không. Hạng được xác định theo thang điểm 5: A (≥3,5), B (≥3,0), C (≥2,0), D (≥1,0), dưới đó là F. Từ B trở lên được coi là đạt.',
			],
		},
		{
			heading: 'Điểm Signalint trước v0.3.4',
			paragraphs: [
				'Trước bản viết lại v0.3.4, mỗi công cụ của Signalint chỉ có một câu mô tả. Điểm tổng xếp Signalint vào hạng B. Công cụ kém nhất là check_files với 2,7 trên 5 — thấp nhất trong cả năm — đặc biệt yếu ở hai tiêu chí Behavioral Transparency và Completeness, cả hai chỉ đạt 2/5.',
				'check_files có mô tả ngắn nhất vào thời điểm đó: "Checks changed files with per-engine content and configuration caching." Câu này cho biết có dùng cache nhưng không nói cache dựa trên gì, công cụ có ghi file không, đường dẫn sai thì xảy ra điều gì, khi nào nên dùng thay cho check_project, hay "đường dẫn tương đối" cụ thể có nghĩa là gì.',
				'Điểm thấp về Behavioral Transparency không phải vấn đề riêng của check_files — tất cả năm công cụ đều mắc. Không mô tả nào tiết lộ công cụ có thay đổi trạng thái hệ thống không, tham số sai thì trả về gì, hay phản hồi "stale" (tham chiếu cũ) trông như thế nào.',
			],
		},
		{
			heading: 'check_files — ví dụ trước và sau cụ thể nhất',
			paragraphs: [
				'Bản viết lại v0.3.4 thay thế cả năm mô tả. check_files là ví dụ rõ nhất vì khoảng cách giữa trước và sau lớn nhất.',
				'Mô tả mới — trích nguyên văn từ src/index.ts trong repository signalint — là:',
			],
			code: checkFilesAfter,
		},
		{
			heading: 'Mỗi thay đổi giải quyết vấn đề gì',
			paragraphs: [
				'"Runs Oxlint and TypeScript (and optionally Biome) lint and type diagnostics" — Purpose Clarity. Từ "checks" trong bản cũ quá chung; khi công cụ thực sự gọi đến các engine cụ thể thì cần nói thẳng tên chúng ra. Tiêu chí này trước đó chỉ đạt 4/5 vì lý do đó.',
				'"Use this for incremental checks after editing specific files; use check_project for a full project scan" — Usage Guidelines. Trước bản viết lại, không một mô tả nào cho agent biết khi nào nên dùng công cụ này thay vì công cụ kia.',
				'"The files parameter expects relative file paths (not glob patterns)" — Parameter Semantics. Từ "changed files" trong bản cũ gợi ý rằng đây là thay đổi theo git; thực tế cache dựa trên hash nội dung file, không liên quan đến git.',
				'"Read-only; no files are written or modified" và "absolute paths or paths outside the root return an error response" — Behavioral Transparency, tiêu chí nhất quán chỉ được 2–3/5 trên toàn bộ các công cụ trước khi viết lại.',
				'"Caching is file-content-hash-based: a file is re-checked only when its content or the engine\'s config file has changed since the last call, not based on git status. TypeScript is a whole-program engine: it re-runs whenever any TypeScript file in the request has changed content." — Contextual Completeness. Đây là cơ chế cache thực sự quyết định khi nào công việc được bỏ qua; bản cũ chỉ nói "per-engine content and configuration caching" mà không giải thích cơ chế đó là gì.',
			],
		},
		{
			heading: 'Bài học rút ra',
			paragraphs: [
				'Mô tả công cụ MCP không phải tài liệu cho người đọc trên một trang registry. Đó là tín hiệu chính mà mô hình ngôn ngữ nhận được để hiểu cách dùng công cụ đúng. Mô tả nêu được công cụ làm gì đã có giá trị; nhưng nếu còn nói thêm công cụ có ghi dữ liệu không, từ chối đầu vào nào, và khi nào nên dùng nó thay vì công cụ khác, thì giá trị tăng lên rất nhiều.',
				'Sáu tiêu chí của TDQS — Purpose Clarity, Usage Guidelines, Behavioral Transparency, Parameter Semantics, Conciseness & Structure, Contextual Completeness — phản ánh đúng những gì agent cần biết trước khi quyết định gọi công cụ nào và truyền tham số gì. Rubric không thưởng điểm vì mô tả dài, mà thưởng vì mô tả trả lời đủ các câu hỏi đó một cách nhất quán và có thể kiểm chứng.',
				'Cách làm có hiệu quả ở đây rất đơn giản: đọc code thực, liệt kê các sự thật đã đúng (chỉ đọc, hash nội dung file, cách xác thực đường dẫn, tsc chạy toàn chương trình), rồi viết chúng ra thẳng thắn. Các mô tả cũ không sai — chúng chỉ không đầy đủ, và khoảng thiếu đó buộc mô hình phải đoán.',
			],
		},
	],
};
