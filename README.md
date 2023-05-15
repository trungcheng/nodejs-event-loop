- Luồng chạy ưu tiên

  - B1: Run code tổng thể (Nếu code tổng thể nằm sau 1 micro-task thì ưu tiên micro task trước)
  - B2: Run micro-task (job queue) (Promise, async/await, process.nextTick..., nextTick có độ ưu tiên cao nhất kể từ vòng lặp thứ 2 v.v)
  - B3: Run macro-task (task queue) (setTimeout, setInterval, I/O, UI render...v.v).
  - Chú ý: Event Loop có thể rơi vào vòng lặp vô tận nếu có các hàm process.nextTick() gọi vào nhau.

- Main thread sẽ chạy code của người dùng đầu tiên sau đó mới khởi động Event Loop, main thread và event loop đều nằm trong 1 cái gọi là thread pool (single thread).

- Event Loop không có cơ chế stack, stack ở đây thuộc về JS Engine, chính xác hơn gọi là execution stack.
