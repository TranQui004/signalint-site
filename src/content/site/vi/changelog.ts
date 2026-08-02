export const changelogVi = [
	{
		version: '0.2.0',
		date: '1 tháng 8, 2026',
		dateTime: '2026-08-01',
		title: 'Lệnh thiết lập và bộ tài liệu hiện tại',
		items: [
			'Thêm npx signalint-mcp init để dò project và MCP client.',
			'Xuất bản tài liệu kiến trúc, đóng góp, bảo mật và lịch sử thiết kế.',
			'Gồm toàn bộ phần hardening về cache, engine fan-out, giới hạn lưu trữ và bảo mật trước khi phát hành.',
		],
	},
	{
		version: '0.1.0',
		date: '1 tháng 8, 2026',
		dateTime: '2026-08-01',
		title: 'Bản phát hành npm đầu tiên',
		items: [
			'MCP server stdio cục bộ với Oxlint, TypeScript và Biome tùy chọn.',
			'Cache SQLite, gom cụm theo rule và phát hiện vòng lặp trong phiên.',
			'Hướng dẫn kết nối Claude Code, Cursor, Antigravity và chạy CLI trực tiếp.',
		],
	},
] as const;
