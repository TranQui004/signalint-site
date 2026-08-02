import type { BlogPost } from '../types';

export const compactDiagnosticsVi: BlogPost = {
	slug: 'compact-diagnostics-for-coding-agents',
	title: 'Vì sao coding agent cần chẩn đoán gọn, không cần log dài',
	dek: 'MCP có thể chuyển nguyên một bản ghi compiler, nhưng làm vậy hiếm khi giúp agent sửa code tốt hơn. Phản hồi hữu ích phải vừa đủ, có nguồn gốc rõ ràng và dẫn được tới bước tiếp theo.',
	publishedAt: '2026-08-02',
	displayDate: '2 tháng 8, 2026',
	readingTime: '7 phút đọc',
	tags: ['MCP', 'Chẩn đoán', 'Công cụ cho agent'],
	discussionNumber: 5,
	discussionUrl: 'https://github.com/TranQui004/signalint-site/discussions/5',
	sections: [
		{
			heading: 'Truyền dữ liệu không phải phần khó nhất',
			paragraphs: [
				'MCP giúp công cụ trả dữ liệu cho agent theo một giao thức thống nhất. Câu hỏi khó hơn là dữ liệu nào thật sự đáng đi qua ranh giới đó. Một bản log lint hoặc compiler đầy đủ có vẻ an toàn, nhưng các lỗi lặp lại và đường dẫn dài sẽ chiếm chỗ của phần ngữ cảnh agent cần để suy luận.',
				'Đơn vị hữu ích không phải từng dòng log. Đó là một lỗi có định danh ổn định, vị trí, rule sinh ra lỗi và đủ bằng chứng để chọn lần chỉnh sửa kế tiếp.',
			],
		},
		{
			heading: 'Giữ nguyên nguồn chẩn đoán, chỉ tổ chức lại phản hồi',
			paragraphs: [
				'Một MCP server chuyên chẩn đoán không nên tự nghĩ thêm lỗi hoặc đổi mức độ nghiêm trọng cho có vẻ thông minh. Oxlint, TypeScript hay Biome vẫn là nguồn sự thật. Phần server chỉ chuẩn hóa trường dữ liệu, gom lỗi trùng, giới hạn kích thước và nói rõ engine nào đã thất bại.',
				'Điểm phân biệt nằm ở đây: nén bớt phần lặp, không làm mất bằng chứng.',
			],
			code: `{
  "schemaVersion": "1.1",
  "engines": {
    "oxlint": { "status": "ok" },
    "tsc": { "status": "error", "message": "timed out" }
  },
  "clusters": []
}`,
		},
		{
			heading: 'Cache phải đi theo cách engine thật sự hoạt động',
			paragraphs: [
				'Lint theo từng file và kiểm tra kiểu toàn chương trình là hai mô hình khác nhau. Hash của file có thể giúp bỏ qua một lần chạy Oxlint khi file không đổi. Với TypeScript, hash chỉ nên quyết định có cần gọi compiler hay không; một khi đã gọi, compiler vẫn phải nhìn thấy toàn bộ project graph.',
				'Công cụ MCP tốt cần nói rõ những ranh giới này, thay vì gom mọi thứ vào một đường chạy “nhanh” chung chung.',
			],
		},
		{
			heading: 'Payload nhỏ hơn phải giúp quyết định bước tiếp theo',
			paragraphs: [
				'Giảm số byte chỉ có ý nghĩa khi phần còn lại vẫn giữ định danh ổn định, mẫu lỗi cụ thể, severity, khả năng sửa tự động và trạng thái của từng engine. Nhờ vậy agent có thể hỏi sâu vào một lỗi mà không phải chạy lại toàn dự án.',
				'Mục tiêu không phải trả lời càng ít càng tốt. Mục tiêu là phản hồi nhỏ nhất nhưng vẫn đủ để đưa ra quyết định đúng.',
			],
		},
	],
};
