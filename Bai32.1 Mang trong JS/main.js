//3 Khai báo mảng
// 3.1 Sử dụng cặp dấu []
// khai báo mảng rỗng
let arr1 = [];
console.log(arr1);
// tạo 1 mảng có sẵn các phần tử bên trong, các phần tử của mảng có thể khác kiểu dữ liệu nhau
let arr2 = [1,2,3,4,"Bình",true,[5,6,7]];
console.log(arr2);

// 3.2 Sủ dụng array constructor
//Khai báo mảng rỗng
let arr3 = new Array();
console.log(arr3);
// tạo mảng chứa nhiều giá trị bằng array constructor
let arr4 = new Array(1,2,3,"ABC");
console.log(arr4);
// tạo mảng với độ dài xác định, các phần tử là undefined
let arrayWithLength = new Array(5); 
console.log(arrayWithLength);

//4. Truy xuất phần tử của mảng qua vị trí index
let arr5 = [10,20,30,40,50];
console.log(arr5[0]); // 10
console.log(arr5[3]); // 30

// 5. Thuộc tính length trả về số phần tử của mảng (chiều dài mảng, bắt đầu từ 1)
console.log(arr5.length); //5

// 6. Gán , thay đổi giá trị cho mảng qua index
let arr6 = [5,6,7];
arr6[1] = 10;
console.log(arr6);

// 7 . Duyệt mảng
// 7.1 cách 1 dùng vòng lặp for
// có thể xem và sửa giá trị mảng
let arr7 = [1,2,3,4,5];
console.log(arr7);
for(let i=0; i < arr7.length; i++){
    arr7[i] = arr7[i]*2;
}
console.log(arr7);

// 7.2 cách 2 dùng for ... of chỉ có thể xem, không thể sửa giá trị
let arr8 = [1,2,3,4,5];
let count = 0;
for (let element of arr8){
    if (element % 2 === 0){
        count++;
    }
}
console.log("Só lượng số chẵn trong mảng: "+count);
console.log(arr8);