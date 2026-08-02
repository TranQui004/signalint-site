import type { DocsPageContent } from '../types';

export const configurationVi: DocsPageContent = {
	slug: 'configuration',
	title: 'Cấu hình',
	description: 'Bật hoặc tắt engine, loại trừ đường dẫn và đặt timeout trong signalint.config.json.',
	eyebrow: 'Tham chiếu',
	sections: [
		{ title: 'Cấu hình mặc định', paragraphs: ['Signalint đọc signalint.config.json tại project root. File là tùy chọn; trường bị bỏ qua nhận default. Khóa lạ hoặc sai kiểu dữ liệu tạo lỗi cấu hình.'], codeLabel: 'signalint.config.json', code: '{\n  "engines": { "oxlint": true, "tsc": true, "biome": false },\n  "ignore": ["node_modules/**", "dist/**", ".signalint/**"],\n  "timeoutsMs": { "oxlint": 30000, "tsc": 120000, "biome": 30000 }\n}' },
		{ title: 'Các trường cấp cao nhất', table: { headers: ['Trường', 'Kiểu', 'Mặc định', 'Ý nghĩa'], rows: [['engines', 'object', 'Xem dưới', 'Bật hoặc tắt từng engine tích hợp sẵn'], ['ignore', 'string[]', 'node_modules/**, dist/**, .signalint/**', 'Đường dẫn tương đối bị bỏ khỏi file yêu cầu và diagnostic cuối'], ['timeoutsMs', 'object', 'Xem dưới', 'Deadline tiến trình, tính bằng mili-giây']] } },
		{ title: 'engines', paragraphs: ['Engine bị bỏ qua giữ default riêng của nó, không tự bị ép thành false.'], table: { headers: ['Trường', 'Kiểu', 'Mặc định', 'Hành vi'], rows: [['oxlint', 'boolean', 'true', 'Chạy diagnostic Oxlint theo file'], ['tsc', 'boolean', 'true', 'Chạy diagnostic TypeScript toàn chương trình từ root tsconfig'], ['biome', 'boolean', 'false', 'Chạy diagnostic Biome theo file']] } },
		{ title: 'ignore', paragraphs: ['Mỗi phần tử là một glob tương đối, không rỗng. Signalint hỗ trợ *, **, ? và chuẩn hóa dấu phân cách của Windows. Vì tsc là whole-program, compiler vẫn nhìn thấy project đầy đủ khi đã chạy; diagnostic khớp pattern chỉ bị bỏ khỏi response.'], note: 'Diagnostic có đường dẫn chứa node_modules luôn bị loại trừ, bất kể ignore được cấu hình thế nào.' },
		{ title: 'timeoutsMs', paragraphs: ['Khi timeout, Signalint kết thúc process tree của engine đó. Trong response schema 1.1, engine nhận status error bên trong engines và diagnostic từ engine khác đã xong vẫn được giữ.'], table: { headers: ['Trường', 'Kiểu', 'Mặc định'], rows: [['oxlint', 'số nguyên dương', '30.000 ms'], ['tsc', 'số nguyên dương', '120.000 ms'], ['biome', 'số nguyên dương', '30.000 ms']] } },
		{ title: 'Cấu hình riêng của engine', paragraphs: ['Giữ rule lint và compiler trong file native. Cache v1 nhận .oxlintrc, .oxlintrc.json, oxlint.json, tsconfig.json, biome.json và biome.jsonc ở root. Thay đổi một file nhận diện sẽ vô hiệu cache của engine liên quan.'], note: 'Các nguồn hợp lệ khác như .oxlintrc.jsonc, cấu hình extends và config lồng trong package chưa tham gia cache hash v1. Sau khi đổi chúng, hãy xóa .signalint/.' },
	],
};
