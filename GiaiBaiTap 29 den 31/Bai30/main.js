/*Viết chương trình đếm ngược thời gian theo từng giây(countdown)
Ví dụ thời gian làm bài là 45 phút nếu chạy về 0 thì thông báo hết thời gian
*/

function countDown(minutes){
    alert("Thời gian làm bài của bạn là "+minutes+ " phút");
    let seconds = minutes * 60;

    let countDownInterval = setInterval(function(){
        let minutesLeft = Math.floor(seconds / 60); // chia lấy nguyên 65/60 ~ 1.85 =>1
        let secondsLeft = seconds % 60; // chia lấy dư 65%60 =5

        let prefixSecond = secondsLeft < 10 ? "0" : "";
        console.log(`${minutesLeft}:${prefixSecond}${secondsLeft}`);

        if (seconds <= 0){
            clearInterval(countDownInterval);
            alert("Hết thời gian");
        }else {
            seconds--;
        }
    },1000);
}
let timeInput = Number(prompt("Nhập thời gian làm bài: "))
countDown(timeInput);