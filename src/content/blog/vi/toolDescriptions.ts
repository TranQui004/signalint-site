import type { BlogPost } from '../types';

const checkFilesBefore = `"Checks changed files with per-engine content and configuration caching."`;
const checkFilesAfter = `"Runs Oxlint and TypeScript (and optionally Biome) lint and type diagnostics on a specific list of files, using per-engine content-hash caching to skip unchanged files. Read-only; no files are written or modified. Use this for incremental checks after editing specific files; use check_project for a full project scan. The files parameter expects relative file paths (not glob patterns) within the project directory — absolute paths or paths outside the root return an error response. Caching is file-content-hash-based: a file is re-checked only when its content or the engine's config file (e.g., .oxlintrc, tsconfig.json) has changed since the last call, not based on git status. TypeScript is a whole-program engine: it re-runs whenever any TypeScript file in the request has changed content."`;

export const toolDescriptionsVi: BlogPost = {
	slug: 'improving-mcp-tool-descriptions',
	title: 'Cải thiện mô tả công cụ MCP từ điểm B lên gần điểm A',
	dek: 'Glama chấm điểm MCP server theo sáu chiều tiêu chí. Signalint đạt 75% trước v0.3.4. Bài này trình bày rubric đo gì, chỗ nào thiếu, và bản viết lại đã thay đổi điều gì.',
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
				'Glama công bố Tool Definition Quality Score (TDQS) cho các MCP server được liệt kê trong registry. Điểm số gồm hai thành phần: Tool Definition Quality, đánh giá các mô tả công cụ và chiếm 70% tổng điểm; và Server Coherence, đánh giá sự nhất quán giữa các công cụ và chiếm 30% còn lại.',
				'Tool Definition Quality phân ra sáu chiều: Purpose (Mục đích), Usage Guidelines (Hướng dẫn sử dụng), Completeness (Đầy đủ thông tin), Parameter Semantics (Ngữ nghĩa tham số), Behavioral Transparency (Minh bạch hành vi) và Error Handling (Xử lý lỗi). Mỗi chiều được chấm 1–5 điểm cho từng công cụ, lấy trung bình trên toàn bộ các công cụ, với điều kiện công cụ có điểm thấp nhất được tính trọng số 40% của điểm trung bình cuối cùng.',
				'Điểm TDQS cấp server là kết hợp có trọng số của Tool Definition Quality và Server Coherence. Glama chấm lại định kỳ khi mô tả công cụ được cập nhật.',
			],
		},
		{
			heading: 'Điểm Signalint trước v0.3.4',
			paragraphs: [
				'Trước bản viết lại v0.3.4, năm công cụ của Signalint chỉ có mô tả một câu. Điểm tổng cấp server là 75% (khoảng B). Công cụ yếu nhất là check_files với 2,7 trên 5 — thấp nhất trong năm công cụ — đặc biệt thấp ở Behavioral Transparency (2/5) và Completeness (2/5).',
				'check_files có mô tả ngắn nhất vào thời điểm đó: "Checks changed files with per-engine content and configuration caching." Câu đó nêu rằng caching tồn tại nhưng không giải thích cache key là gì, công cụ có chỉ đọc không, điều gì xảy ra với đường dẫn không hợp lệ, khi nào nên dùng thay cho check_project, hay ý nghĩa thực của "đường dẫn file tương đối".',
				'Điểm Behavioral Transparency thấp là vấn đề chung của cả năm công cụ, không chỉ check_files. Không mô tả nào nêu rõ công cụ có thay đổi trạng thái không, điều gì xảy ra khi tham số không hợp lệ, hay phản hồi "stale" trông như thế nào.',
			],
		},
		{
			heading: 'Bản viết lại check_files làm ví dụ cụ thể',
			paragraphs: [
				'Bản viết lại v0.3.4 thay thế cả năm mô tả. check_files là minh chứng rõ nhất vì khoảng cách thiếu hụt lớn nhất ở đó.',
				'Mô tả mới — trích nguyên văn từ src/index.ts trong repository signalint — là:',
			],
			code: checkFilesAfter,
		},
		{
			heading: 'Từng thay đổi giải quyết vấn đề gì',
			paragraphs: [
				'"Runs Oxlint and TypeScript (and optionally Biome) lint and type diagnostics" — giải quyết trực tiếp chiều Purpose (trước đó 4/5: "checks" quá chung chung cho một công cụ thực sự gọi đến các engine cụ thể).',
				'"Use this for incremental checks after editing specific files; use check_project for a full project scan" — phần bổ sung cho Usage Guidelines. Trước khi viết lại, không mô tả nào nói cho agent biết khi nào nên dùng công cụ này thay cho công cụ kia.',
				'"The files parameter expects relative file paths (not glob patterns)" — Parameter Semantics. Cách diễn đạt gốc nói "changed files" gợi ý đây là git status; thực tế cache dựa trên hash nội dung file, không liên quan đến git.',
				'"Read-only; no files are written or modified" và "absolute paths or paths outside the root return an error response" — Behavioral Transparency và Error Handling, hai chiều nhất quán ở mức 2–3 điểm trên toàn bộ các công cụ.',
				'"Caching is file-content-hash-based: a file is re-checked only when its content or the engine\'s config file has changed since the last call, not based on git status. TypeScript is a whole-program engine: it re-runs whenever any TypeScript file in the request has changed content." — Completeness. Đây là hợp đồng caching thực tế quyết định khi nào công việc được bỏ qua; bản gốc chỉ nói "per-engine content and configuration caching" mà không giải thích cơ chế.',
			],
		},
		{
			heading: 'Bài học chung',
			paragraphs: [
				'Mô tả công cụ MCP không phải tài liệu cho người dùng đọc qua registry. Đây là tín hiệu chính mà mô hình ngôn ngữ nhận được để quyết định cách sử dụng công cụ đúng cách. Mô tả nêu được công cụ làm gì đã có ích; mô tả còn nêu thêm công cụ có tác dụng phụ không, từ chối gì, và khi nào nên dùng thay cho công cụ khác thì hữu ích hơn đáng kể.',
				'Sáu chiều mà rubric TDQS kiểm tra — Purpose, Usage Guidelines, Completeness, Parameter Semantics, Behavioral Transparency, Error Handling — ánh xạ trực tiếp vào các câu hỏi agent đặt ra trước khi quyết định gọi công cụ nào và truyền tham số gì. Mô tả trả lời đủ sáu chiều một cách nhất quán và có thể kiểm chứng — không chỉ dùng nhiều từ hơn — là điều rubric thưởng điểm.',
				'Quy trình đã có hiệu quả ở đây: đọc cài đặt thực tế, tìm các sự thật đã đúng trong code (chỉ đọc, hash nội dung file, hành vi xác nhận đường dẫn, tsc toàn chương trình) và trình bày rõ ràng. Các mô tả trước không sai; chúng thiếu theo cách khiến mô hình gọi phải đoán.',
			],
		},
	],
};
