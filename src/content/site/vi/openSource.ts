export const openSourceVi = {
	facts: [
		{ label: 'Giấy phép', value: 'MIT', detail: 'Được dùng, sửa và phân phối theo LICENSE của repository.' },
		{ label: 'Bản phát hành', value: '0.2.0', detail: 'Phiên bản latest hiện có trên npm registry.' },
		{ label: 'Ma trận CI', value: '4', detail: 'Windows, macOS, Ubuntu Node 22 và Ubuntu Node 20.19.' },
		{ label: 'Transport', value: 'stdio', detail: 'MCP cục bộ, không phụ thuộc hosted runtime.' },
	],
	links: [
		{ title: 'MIT License', body: 'Dùng, sao chép, chỉnh sửa và phân phối Signalint theo điều khoản MIT của repository.', href: 'https://github.com/TranQui004/signalint/blob/main/LICENSE' },
		{ title: 'Quy trình đóng góp', body: 'Thiết lập môi trường, cổng xác minh, chuẩn commit và các check CI đa nền tảng bắt buộc.', href: 'https://github.com/TranQui004/signalint/blob/main/CONTRIBUTING.md' },
		{ title: 'Mô hình bảo mật', body: 'MCP argument được xem là dữ liệu không đáng tin; phạm vi filesystem, kiểm soát tiến trình và dependency advisory đều được ghi rõ.', href: 'https://github.com/TranQui004/signalint/blob/main/SECURITY.md' },
		{ title: 'Kiến trúc', body: 'Ranh giới module, chiến lược engine, cache identity và data flow hiện tại.', href: 'https://github.com/TranQui004/signalint/blob/main/ARCHITECTURE.md' },
		{ title: 'Tests và CI', body: 'Test suite chạy trên Windows, Ubuntu và macOS, bao gồm dòng Node 20.19 được hỗ trợ.', href: 'https://github.com/TranQui004/signalint/actions' },
		{ title: 'Lịch sử dự án', body: 'Build plan, amendment log và các quyết định đã thay đổi trước khi phát hành.', href: 'https://github.com/TranQui004/signalint/tree/main/docs/history' },
	],
} as const;
