//32.2 Các phương thức làm việc với mảng phần 1
/*

STT phương thức
1 - concat ()
2 - push ()
3 - unshift ()
4 - pop ()
5 - shift ()
6 - slice ()
7 - includes()
*/

//1. concat(): Nối mảng hiện tại với mảng khác và trả về một mảng mới.
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let newArr = arr1.concat(arr2);
console.log(newArr);

// 2. push(): Thêm một hoặc nhiều phần tử vào cuối mảng gốc
let arr3 = [1,2,3];
arr3.push(4,5);
console.log(arr3); // output [1,2,3,4,5]

// 3. unshift(): Thêm một hoặc nhiều phần tử vào đầu mảng gốc 
let arr4 = [2,3];
arr4.unshift(1,"Bình"); 
console.log(arr4);// output [1,"Bình",2,3]

// 4. pop(): Loại bỏ phần tử cuối cùng của mảng và trả về phần tử bị loại bỏ
let arr5 = [1,2,3,"ABC"];
let removedItem = arr5.pop();
console.log(arr5);
console.log(removedItem);

// 5. shift(): Loại bỏ phần tử đầu tiên của mảng và trả về phần tử bị loại bỏ
let arr6 = [1,2, "ABC",3];
let removeItem2 = arr6.shift();
console.log(arr6);
console.log(removeItem2);

//6 . slice(start,end): tạo 1 bản sao của mảng cắt từ start đến end-1
//từ 1 vị trí bắt đầu đến 1 vị trí kế thúc ( không bao gồm vị trí kết thúc)
let arr7 = [1,2,3,4,5];
let sliceArr = arr7.slice(1,4);
console.log(arr7);
console.log(sliceArr);

// 7. includes(): kiểm tra xem 1 mảng có chứa 1 giá trị cụ thể hay không
// trả về true nếu có và false nếu không
let arr8 = [1,2,3,4,5,"ABC"];
let isPresent = 4;
console.log(arr8.includes(isPresent));

