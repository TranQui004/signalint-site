import type { DocsPageContent } from '../types';

export const architectureVi: DocsPageContent = {
	slug: 'architecture',
	title: 'Kiến trúc',
	description: 'Một pipeline cục bộ với ranh giới rõ giữa MCP, adapter, cache, cluster và session memory.',
	eyebrow: 'Bên trong Signalint',
	sections: [
		{ title: 'Các lớp', rows: [{ label: 'MCP client', value: 'Gọi tool contract nghiêm ngặt qua stdio.' }, { label: 'MCP server', value: 'Kiểm tra argument, đọc cấu hình, điều phối check và serialize response schema 1.2.' }, { label: 'Adapter', value: 'Ranh giới subprocess cho Oxlint, tsc và Biome với timeout cùng output ceiling.' }, { label: 'Cache', value: 'Kết quả file và trạng thái whole-program trong SQLite, khóa theo nội dung, config, phiên bản Signalint và phiên bản engine.' }, { label: 'Cluster', value: 'Gom theo rule, gán priority, lấy mẫu issue ID khác nhau và cắt response.' }, { label: 'Session memory', value: 'Signature vòng lặp, churn cùng lịch sử metric có giới hạn, được rotate.' }] },
		{ title: 'Luồng check_files', bullets: ['index.ts kiểm tra argument MCP nghiêm ngặt rồi đọc cấu hình project.', 'projectPaths resolve và kiểm tra containment; checkFiles đọc snapshot, hash file và tính hash cấu hình theo engine.', 'Cache hit theo file được dùng lại. Oxlint/Biome chỉ nhận cache miss; tsc chỉ bị bỏ qua khi snapshot TypeScript liên quan chưa đổi.', 'Engine chạy độc lập qua engineFanout. Adapter dùng subprocess; timeout hoặc cancel sẽ kết thúc process tree.', 'Default exclusion và ignore glob lọc diagnostic; clusterEngine gán clusterId và tạo response schemaVersion 1.2.', 'SessionMemory cập nhật signature, loop/churn warning và metric rồi ghi JSONL.'] },
		{ title: 'Chiến lược gọi engine', paragraphs: ['Oxlint và Biome là file-local: batch các file cache miss rồi tách kết quả về từng file. TypeScript là whole-program: hash chỉ quyết định có cần chạy hay không, không bao giờ được truyền như compiler root.'] },
		{ title: 'Oxlint và Biome', paragraphs: ['Khi check_files, mỗi file được hash và kết quả hợp lệ được tái sử dụng. Chỉ phần cache miss đi vào adapter, sau đó được lưu lại theo engine và file.'] },
		{ title: 'TypeScript', paragraphs: ['Root tsconfig thông thường dùng --project cùng --incremental và tsbuildinfo trong .signalint/cache. Root có references dùng --build để đi qua các project được tham chiếu.'] },
		{ title: 'Giới hạn lưu trữ', paragraphs: ['Cache SQLite theo LRU dừng ở 10.000 dòng. SessionMemory chỉ replay phần đuôi JSONL gần nhất và rotate log thành một bản .1 khi vượt ngân sách kích thước.'] },
		{ title: 'Ranh giới tin cậy', paragraphs: ['Argument MCP bị xem là không đáng tin. toolArguments kiểm tra schema; projectPaths từ chối absolute path, NUL, leading dash và containment thoát qua symlink. Chỉ adapter được phép gọi tiến trình ngoài.'] },
	],
};