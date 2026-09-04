export interface ReleaseItemVi {
	version: string;
	date: string;
	dateTime: string;
	title: string;
	items: readonly string[];
}

export const changelogVi: readonly ReleaseItemVi[] = [
	{
		version: '0.4.2',
		date: '5 tháng 9, 2026',
		dateTime: '2026-09-05',
		title: 'Mở rộng hash tsconfig và cache kết quả --showConfig',
		items: [
			'Mở rộng hash cấu hình tsc để theo dõi toàn bộ chuỗi extends và references đệ quy — thay đổi trong tsconfig.base.json hoặc bất kỳ project tsconfig được tham chiếu nào sẽ làm mất hiệu lực cache whole-program.',
			'Thêm cache kết quả tsc --showConfig ở phạm vi process, khóa theo SHA-256 của nội dung file tsconfig gốc — loại bỏ lần spawn --showConfig dư thừa trước mỗi lần chạy tsc --noEmit khi config không thay đổi.',
			'Không thay đổi schemaVersion. Không thay đổi hành vi đối với người dùng.',
		],
	},
	{
		version: '0.4.1',
		date: '25 tháng 8, 2026',
		dateTime: '2026-08-25',
		title: 'Bổ sung annotation cho công cụ MCP',
		items: [
			'Bổ sung readOnlyHint, destructiveHint, idempotentHint và openWorldHint cho cả 5 công cụ.',
			'Bốn hint được khai báo tường minh dưới dạng boolean (true, false, true, false) để đáp ứng yêu cầu của các kênh phân phối như OpenAI MCP directory.',
			'Không thay đổi hành vi và không nâng schemaVersion — annotation là metadata ở tầng tools/list, không ảnh hưởng đến cấu trúc response.',
		],
	},
	{
		version: '0.4.0',
		date: '22 tháng 8, 2026',
		dateTime: '2026-08-22',
		title: 'Phát hiện churn theo cặp (file, rule) và schemaVersion 1.2',
		items: [
			'Bổ sung cơ chế phát hiện churn theo cặp (file, rule) — loại cảnh báo vòng lặp thứ hai, độc lập với cơ chế chữ ký chính xác đã có.',
			'Khi cùng một cặp (file, rule) xuất hiện trong 3+ lần gọi check_files, hệ thống phát ra fileRuleChurnWarning bất kể thông điệp chính xác có thay đổi.',
			'Bổ sung fileChurning: boolean và mảng fileRuleChurns vào LoopStatus — hoàn toàn độc lập với looping và signatures.',
			'Bổ sung fileRuleChurnWarning: FileRuleChurnWarning | null vào CheckResponse. Nâng schemaVersion lên 1.2.',
			'Bộ đếm churn đặt lại về 0 khi cặp (file, rule) vắng mặt trong kết quả check_files; lệnh check_project không ảnh hưởng đến bộ đếm.',
			'Trạng thái churn được lưu vào session.jsonl qua trường activeFileRulePairs và phục hồi khi khởi động lại.',
		],
	},
	{
		version: '0.3.7',
		date: '19 tháng 8, 2026',
		dateTime: '2026-08-19',
		title: 'Hỗ trợ outputSchema và structuredContent chuẩn MCP 1.30',
		items: [
			'Khai báo outputSchema chặt chẽ cho toàn bộ 5 công cụ MCP theo chuẩn SDK 1.30.0.',
			'Trả về structuredContent có cấu trúc song song với khối text JSON để tương thích ngược 100%.',
			'Cập nhật tài liệu kỹ thuật về cơ chế phân phối kết quả chẩn đoán.',
		],
	},
	{
		version: '0.3.6',
		date: '16 tháng 8, 2026',
		dateTime: '2026-08-16',
		title: 'Cập nhật dependency và tương thích Node 20.19',
		items: [
			'Cập nhật @modelcontextprotocol/sdk lên 1.30.0.',
			'Nâng cấp oxlint lên 1.78.0 và xử lý chuỗi phản hồi không phải JSON.',
			'Nâng cấp @biomejs/biome lên 2.5.8.',
			'Giữ better-sqlite3 ở 12.6.2 để đảm bảo tương thích ổn định với Node 20.19.',
		],
	},
	{
		version: '0.3.5',
		date: '16 tháng 8, 2026',
		dateTime: '2026-08-16',
		title: 'Ví dụ nén chẩn đoán và mở rộng từ khóa tìm kiếm',
		items: [
			'Bổ sung ví dụ thực tế về gom cụm chẩn đoán (giảm 86,5% kích thước payload).',
			'Sắp xếp lại phần giới thiệu trong README trước danh sách registry.',
			'Mở rộng từ khóa tìm kiếm trên npm để tăng khả năng tiếp cận.',
		],
	},
	{
		version: '0.3.4',
		date: '11 tháng 8, 2026',
		dateTime: '2026-08-11',
		title: 'Chuẩn hóa mô tả công cụ MCP đạt hạng A trên Glama',
		items: [
			'Viết lại mô tả cho cả 5 công cụ MCP nhằm minh bạch hành vi và tác dụng phụ.',
			'Giải thích rõ cơ chế cache theo hash nội dung, không phụ thuộc vào git.',
			'Bổ sung cấu hình người duy trì glama.json.',
		],
	},
	{
		version: '0.3.3',
		date: '9 tháng 8, 2026',
		dateTime: '2026-08-09',
		title: 'Rút gọn mô tả server cho MCP Registry',
		items: [
			'Rút gọn chuỗi mô tả trong server.json dưới 100 ký tự theo chuẩn của MCP Registry.',
			'Tự động hóa luồng phát hành qua GitHub OIDC.',
		],
	},
	{
		version: '0.3.0',
		date: '8 tháng 8, 2026',
		dateTime: '2026-08-08',
		title: 'Phân luồng chẩn đoán và mở rộng hỗ trợ Biome',
		items: [
			'Nâng cấp schema response lên 1.1 với trạng thái chi tiết cho từng engine.',
			'Tích hợp adapter cho Biome để kiểm tra cú pháp và định dạng.',
			'Chẩn đoán của các engine hoàn thành vẫn được giữ lại nếu engine khác gặp lỗi.',
		],
	},
	{
		version: '0.2.0',
		date: '1 tháng 8, 2026',
		dateTime: '2026-08-01',
		title: 'Lệnh thiết lập và bộ tài liệu hoàn chỉnh',
		items: [
			'Thêm npx signalint-mcp init để tự động nhận diện dự án và cấu hình MCP client.',
			'Hoàn thiện tài liệu kiến trúc, đóng góp, bảo mật và lưu trữ phiên làm việc.',
			'Bổ sung toàn bộ phần hardening về cache, engine fan-out, giới hạn lưu trữ và bảo mật.',
		],
	},
	{
		version: '0.1.0',
		date: '1 tháng 8, 2026',
		dateTime: '2026-08-01',
		title: 'Bản phát hành npm đầu tiên',
		items: [
			'MCP server stdio cục bộ chạy Oxlint, TypeScript và Biome.',
			'Bộ nhớ cache SQLite theo nội dung file và phát hiện vòng lặp chẩn đoán.',
			'Hỗ trợ kết nối với Claude Code, Cursor và Antigravity.',
		],
	},
] as const;
