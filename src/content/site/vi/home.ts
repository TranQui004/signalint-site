import type { HomeContent } from '../types';

const cacheKey = `sha256(nội dung file)
: engine
: hash cấu hình engine
: phiên bản signalint
: phiên bản engine`;
const loopWarning = `{
  "signature": "no-unused-vars:<identifier> is unused",
  "occurrences": 3,
  "hint": "Lỗi này đã được sửa rồi quay lại 3 lần — nên thử cách khác"
}`;
const fanout = `"engines": {
  "oxlint": { "status": "ok" },
  "tsc": { "status": "error", "message": "..." },
  "biome": { "status": "disabled" }
}`;

export const homeVi: HomeContent = {
	title: 'Signalint — phản hồi chẩn đoán gọn cho coding agent',
	description: 'MCP server cục bộ, có cache và loop detection cho chẩn đoán JavaScript/TypeScript.',
	hero: { eyebrow: 'MCP stdio chạy cục bộ / signalint-mcp@0.2.0', title: 'Chẩn đoán từ engine.', emphasis: 'Phản hồi vừa tầm agent.', lede: 'Signalint chạy Oxlint, TypeScript và Biome ngay trong máy; phần việc không đổi được cache, lỗi lặp được gom lại, còn vòng lặp sửa–hỏng được cảnh báo trước khi phản hồi quay về coding agent.', primaryAction: 'Đọc hướng dẫn', secondaryAction: 'Xem mã nguồn ↗', manifestTitle: 'Thông tin runtime', manifestState: 'tiến trình cục bộ', installLabel: 'Cài từ npm' },
	manifestLabels: ['Transport', 'Package', 'Engine', 'Phản hồi', 'Giấy phép'],
	statsAria: 'Số liệu đã đo và giới hạn đã cam kết',
	stats: [
		{ label: 'Giảm payload', value: 86.53, decimals: 2, suffix: '%', detail: 'Fixture hiện tại: 9.151 B dữ liệu thô còn 1.233 B sau khi gom cụm.' },
		{ label: 'Kiểm tra tăng dần', value: 3.10, decimals: 2, suffix: ' ms', detail: 'Kết quả acceptance gần nhất; ngưỡng bắt buộc là dưới 300 ms.' },
		{ label: 'Gom lỗi fixture', value: 40, suffix: ' → ', secondaryValue: 4, detail: 'Bốn mươi lỗi thô được thu về bốn cụm theo rule.' },
		{ label: 'Giới hạn đầu vào', value: 512, suffix: '', detail: 'Số đường dẫn tương đối tối đa trong một lần gọi MCP.' },
	],
	storyHeading: { index: '01 / phản hồi', title: 'Xem đúng thứ agent nhận được.', body: 'Cuộn qua fixture 40 lỗi để thấy các dòng đã chuẩn hóa trở thành phản hồi schema 1.1 có giới hạn rõ ràng.' },
	diagnostic: { ariaLabel: 'Minh họa cuộn về cách nén chẩn đoán', steps: [
		{ kicker: '01 / output từ engine', title: 'Bốn mươi lỗi hợp lệ vẫn có thể là một phản hồi tệ.', body: 'Engine vẫn là nguồn sự thật. Signalint trước tiên chuẩn hóa vị trí, rule ID, severity và message.' },
		{ kicker: '02 / gom theo rule', title: 'Các triệu chứng lặp lại trở thành một mục cần xem.', body: 'Nhóm rule lớn trải trên nhiều file nhận một root-cause summary cùng các issue ID mẫu không trùng nhau.' },
		{ kicker: '03 / phản hồi có giới hạn', title: 'Agent nhận bốn cụm, không phải bốn mươi dòng.', body: 'Fixture kiểm soát giảm từ 9.151 byte còn 1.233 byte mà vẫn giữ trạng thái engine và tham chiếu issue.' },
	], rawStatus: 'thô / 40 lỗi', clusteredStatus: 'đã gom / 4 cụm', additionalIssues: '34 lỗi chuẩn hóa khác', clusterCount: '10 lỗi / 10 file', priorityLabel: 'ưu tiên 1 đứng trước', rawIssuesLabel: 'lỗi thô', clustersLabel: 'cụm', playbackLabel: 'tự chạy', scrollLabel: 'cuộn để theo dõi' },
	pipelineHeading: { index: '02 / cơ chế', title: 'Pipeline cục bộ với ranh giới rõ ràng.', body: 'Signalint giữ engine chẩn đoán làm nguồn sự thật và biểu diễn rõ trạng thái cache, lỗi tiến trình cùng loop detection.' },
	flow: { ariaLabel: 'Minh họa luồng request của Signalint', incomingLabel: 'MCP tool call đi vào', inputLabel: 'Đầu vào', inputValue: '3 đường dẫn tương đối', workingDirectoryLabel: 'Thư mục làm việc', workingDirectoryValue: 'project root', executionLabel: 'Thực thi', executionValue: 'tiến trình cục bộ', steps: [
		{ kicker: 'Ranh giới tin cậy', title: 'Kiểm tra trước khi đọc.', body: 'Zod từ chối argument sai shape. Canonical path check giữ mọi file đã chấp nhận bên trong project root.', result: 'chấp nhận 3 đường dẫn' },
		{ kicker: 'Chạy song song engine', title: 'Giữ đúng mô hình của từng engine.', body: 'Engine theo file chỉ nhận cache miss. TypeScript nhìn toàn bộ chương trình đã cấu hình khi file liên quan thay đổi.' },
		{ kicker: 'Contract chung', title: 'Chuẩn hóa rồi mới gom cụm.', body: 'Diagnostic riêng của engine trở thành normalized issue trước khi nhóm theo rule, gán priority và issue reference.', result: '40 lỗi → 4 cụm' },
		{ kicker: 'Phản hồi có giới hạn', title: 'Trả lại phần đã hoàn thành.', body: 'Schema 1.1 giữ outcome của từng engine, nên một engine lỗi không xóa chẩn đoán từ engine khác.', result: 'schemaVersion 1.1' },
	], engineResults: [{ name: 'oxlint', value: '1 cache miss' }, { name: 'tsc', value: 'toàn project' }, { name: 'biome', value: 'đang tắt' }], outcomes: [{ name: 'oxlint', value: 'ok' }, { name: 'tsc', value: 'ok' }, { name: 'biome', value: 'đang tắt', muted: true }], outcomeNote: 'Chẩn đoán đã hoàn thành vẫn còn nguyên khi một engine khác gặp lỗi.' },
	capabilities: [
		{ number: '01', kicker: 'cache identity', title: 'Dùng lại kết quả có nhận diện phiên bản', body: 'Kết quả chỉ được dùng lại khi nội dung file, cấu hình engine, phiên bản Signalint và phiên bản engine vẫn trùng khớp.', code: cacheKey, wide: true },
		{ number: '02', kicker: 'loop memory', title: 'Lỗi quay lại sẽ được nhìn thấy', body: 'Một lỗi biến mất rồi xuất hiện nhiều lần tạo cảnh báo hẹp, không suy diễn về toàn bộ cuộc trò chuyện của agent.', code: loopWarning },
		{ number: '03', kicker: 'engine fan-out', title: 'Kết quả từng phần vẫn được giữ', body: 'Một engine có thể lỗi mà không làm mất chẩn đoán engine khác đã hoàn thành.', code: fanout },
		{ number: '04', kicker: 'ranh giới tiến trình', title: 'Thời gian chạy có giới hạn', body: 'Mặc định Oxlint 30 giây, tsc 120 giây và Biome 30 giây. Timeout hoặc hủy request đều kết thúc cây tiến trình.' },
		{ number: '05', kicker: 'lưu trữ', title: 'Trạng thái cục bộ không tăng vô hạn', body: 'SQLite cache loại hàng ít dùng nhất khi vượt 10.000 mục. Session log chỉ đọc phần đuôi gần nhất và giữ một bản .1 sau khi rotate.' },
	],
	enginesHeading: { index: '03 / engine', title: 'Mỗi engine giữ nguyên mô hình thực thi.', body: 'Signalint điều phối ba công cụ mà không giả vờ chúng hoạt động giống nhau. Quyết định cache đi theo phạm vi thật của từng engine.' },
	engines: [
		{ name: 'Oxlint', analysis: 'Phân tích theo file', receivesLabel: 'Nhận', receives: 'Các file đã đổi và chưa có cache', body: 'Signalint gom các cache miss rồi lưu kết quả đã chuẩn hóa theo engine và file.', cacheLabel: 'Phạm vi cache', cacheScope: 'engine + file', deadlineLabel: 'Timeout', deadline: '30 giây' },
		{ name: 'TypeScript', analysis: 'Phân tích toàn chương trình', receivesLabel: 'Nhận', receives: 'Toàn bộ project đã cấu hình', body: 'Root thường dùng --project; root dạng solution có references dùng --build.', cacheLabel: 'Phạm vi cache', cacheScope: 'quyết định chạy', deadlineLabel: 'Timeout', deadline: '120 giây' },
		{ name: 'Biome', analysis: 'Theo file, bật tùy chọn', receivesLabel: 'Nhận', receives: 'File cache-miss khi engine được bật', body: 'Mặc định tắt và luôn có trạng thái riêng trong mỗi check response.', cacheLabel: 'Phạm vi cache', cacheScope: 'engine + file', deadlineLabel: 'Timeout', deadline: '30 giây' },
	],
	clientsHeading: { index: '04 / client', title: 'Kết nối server ngay nơi agent làm việc.', body: 'Một server cục bộ, ba vị trí cấu hình theo từng client. Lệnh init dò client ở gần và chỉ ghi file sau khi bạn xác nhận.' },
	clients: [
		{ scope: '01 / trong project', name: 'Claude Code', body: 'Chia sẻ MCP entry cục bộ qua .mcp.json.', command: 'claude mcp add --scope project signalint …', icon: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/claude/default.svg' },
		{ scope: '02 / trong project', name: 'Cursor', body: 'Dùng .cursor/mcp.json cùng binary đã phát hành trên npm.', command: 'npx --no-install signalint-mcp', icon: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/cursor/default.svg' },
		{ scope: '03 / cấu hình người dùng', name: 'Antigravity', body: 'Đặt working directory tuyệt đối trong mcp_config.json.', command: 'cmd /c npx --no-install signalint-mcp', icon: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/google-antigravity/default.svg' },
	],
	setupAction: 'Đọc hướng dẫn cài đặt',
	schemaAction: 'Xem các schema',
};
