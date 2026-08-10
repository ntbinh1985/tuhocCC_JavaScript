/*Viết chương trình nhập vào năm sinh và in ra số tuổi,
Kiểm tra điều kiện dữ liệu năm sinh nhập vào phải là số nguyên, phải lớn hơn
*/

function calculateAge(inputYear) {
// Ép kiểu dữ liệu truyền vào sang kiểu Number
let yearOfBirth = Number(inputYear);
// Kiếm tra xem năm sinh có phải là số nguyên, và lớn hơn 0 ?
if(!Number.isInteger(yearOfBirth) || yearOfBirth <= 0) {
alert("Năm sinh không hợp lệ. Năm sinh la số nguyen lon hơn 0");
return;
}
// Lấy năm hiện tại
let currentYear = new Date().getFullYear();
// Tính tuổi
let age = currentYear - yearOfBirth;
alert(`Tuổi của ban là ${age} tuổi` );
}

// Nhập năm sinh từ người dùng
let inputYear = prompt("Nhập năm sinh của bạn :");
// Gọi hàm tính tuổi
calculateAge(inputYear);