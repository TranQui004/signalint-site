import type { DocsPageContent } from '../types';

export const faqQuestionsVi = [
	{ question: 'Signalint có thay thế linter hoặc TypeScript không?', answer: 'Không. Oxlint, TypeScript và Biome vẫn là nguồn chẩn đoán. Signalint chỉ điều phối, chuẩn hóa, cache phần an toàn và gom phản hồi cho MCP client.' },
	{ question: 'Mã nguồn có rời khỏi máy không?', answer: 'Signalint chạy bằng stdio cục bộ và không tự thêm network transport. MCP client nhận phản hồi có chính sách dữ liệu riêng của nó.' },
	{ question: 'Hỗ trợ ngôn ngữ nào?', answer: 'Hiện tại là JavaScript và TypeScript, với Oxlint, tsc và Biome. v1 chưa nhận engine tùy ý.' },
	{ question: 'Signalint có tự sửa code không?', answer: 'Không. fixable chỉ cho biết engine có đưa ra structured fix hay không; Signalint v1 không ghi thay đổi vào mã nguồn.' },
	{ question: 'Đây có phải công cụ quét bảo mật không?', answer: 'Không. Signalint không phải SAST và không tuyên bố tìm lỗ hổng. Phần bảo mật của chính MCP server được mô tả trong threat model.' },
	{ question: 'Dự án monorepo cần cấu hình thế nào?', answer: 'tsc adapter cần một tsconfig.json ở root. Monorepo nên dùng root solution config với TypeScript Project References.' },
	{ question: 'Loop detection theo dõi điều gì?', answer: 'Chỉ theo dõi signature của lỗi lint, type và test đã biến mất rồi quay lại. Nó không đánh giá vòng lặp trong toàn bộ hội thoại của agent.' },
	{ question: 'Đã có extension cho IDE chưa?', answer: 'Chưa. Hiện tại Signalint tích hợp qua MCP client hoặc các lệnh check và stats.' },
	{ question: 'Signalint có mất phí không?', answer: 'Không. Dự án miễn phí, mã nguồn mở theo MIT License và chạy cục bộ.' },
] as const;

export const faqVi: DocsPageContent = {
	slug: 'faq',
	title: 'Câu hỏi thường gặp',
	description: 'Phạm vi, cách engine hoạt động, quyền riêng tư và giới hạn của bản hiện tại.',
	eyebrow: 'Hỏi đáp',
	sections: [],
};
