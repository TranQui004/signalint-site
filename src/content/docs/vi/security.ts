import type { DocsPageContent } from '../types';

export const securityVi: DocsPageContent = {
	slug: 'security',
	title: 'Mô hình bảo mật',
	description: 'MCP argument có thể đến từ một model bị prompt injection, vì vậy mọi đầu vào đều phải qua ranh giới kiểm tra chung.',
	eyebrow: 'Ranh giới tin cậy',
	sections: [
		{ title: 'Phạm vi đánh giá', paragraphs: ['MCP argument có thể đến từ model bị prompt injection bởi nội dung repository. Vì vậy mọi argument tool đều là input không đáng tin và phải qua validation chung.'], note: 'Signalint là server stdio cục bộ; nhận xét về transport hiện tại không tự áp dụng nếu sau này có HTTP listener.' },
		{ title: 'Ranh giới argument', paragraphs: ['Zod schema từ chối property lạ, array sai kiểu và reference sai union. check_files giới hạn 512 path để một lần gọi không buộc server đọc số file quá mức.'] },
		{ title: 'Ranh giới tiến trình', paragraphs: ['Adapter gọi CLI entrypoint đã resolve, không đưa string do client cung cấp qua shell. Timeout, cancel và shutdown kết thúc process tree Windows/POSIX; output có byte ceiling để tránh tràn bộ nhớ.'] },
		{ title: 'Phạm vi filesystem', paragraphs: ['Signalint chỉ chấp nhận đường dẫn tương đối nằm trong project root. Absolute path, traversal, NUL, leading dash và symlink thoát root bị từ chối trước khi đọc file hoặc gọi adapter.'] },
		{ title: 'Transport', paragraphs: ['Bản hiện tại chỉ dùng stdio cục bộ. Nếu sau này thêm HTTP listener, phân tích bảo mật phải làm lại vì bề mặt tấn công đã thay đổi.'] },
		{ title: 'Dependency advisory', paragraphs: ['SECURITY.md ghi lại advisory của dependency chuyển tiếp và lý do stdio transport không đi qua static-server code path bị ảnh hưởng. Advisory phải được xem lại khi có bản vá mới.'] },
	],
};
