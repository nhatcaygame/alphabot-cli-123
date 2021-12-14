# alphabot-cli
## Cài đặt
```shellscript
npm i alphabot-cli -g
```
Nhớ cài alphabot-cli global nhé các bạn!
##  Các câu lệnh
### 1. Lệnh tải alphabot
```shellscript
alphabot-cli clone
```
Lệnh này sẽ tự động tải alphabot phiên bản mới nhất trên github về ~/alphabot (https://github.com/nhatcaygame/alphabot)
### 2. Lệnh tạo plugin mới
```shellscript
alphabot-cli create-plugin <tên plugin> [--clean]
```
<tên plugin>: Tên file của plugin<br>
--clean: Xóa hết comment hướng dẫn trong file đó
### 3. Lệnh tạo command mới
```shellscript
alphabot-cli create-command <tên command> [--clean]
```
### 4. Lệnh đổi mới cấu trúc command
```shellscript
alphabot-cli rebase <đường dẫn tới file command> [--clean]
```
Lệnh này sẽ comment hết code của file sau đó ghép cấu trúc mới vào (dành cho nhà phát triển)
<br><br>
*Các bạn có thể xem danh sách lệnh bằng cách gõ:*
```shellscript
alphabot-cli help
```
