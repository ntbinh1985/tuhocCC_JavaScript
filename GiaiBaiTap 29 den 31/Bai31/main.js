/*
Viết chương trình có tên timeSince, thông báo người dùng offline x phút ...
ví dụ: bạn đang chat với bạn A, sau đó bạn A offline
Yêu cầu: update hiển thị thời gian A offline 'x giây trước' 'x phút trước', 'x ngày
*/
function timeSync(timeStamp){
    let now = new Date();
    console.log("TimeStamp hiện tại: " + now.getTime());

    let timeDifferent = now - timeStamp;
    let seconds = Math.floor(timeDifferent/1000);
    let minutes = Math.floor(seconds/60);
    let hours = Math.floor(minutes/60);
    let days = Math.floor(hours/24);
    let months = Math.floor(days/30);
    let years = Math.floor(months/12);

    if (years>0){
        return `Online ${years} năm trước`;
    }else if(months>0){
        return `Online ${months} tháng trước`;
    }else if(days>0){
        return `Online ${days} ngày trước`;
    }else if(hours>0){
        return `Online ${hours} giờ trước`;
    }else if(minutes>0){
        return `Online ${minutes} phút trước`;
    }else{
        return `Online ${seconds} giây trước`;
    }
}

// Ví dụ sử dụng
let timeOffline = 1776229627927;
console.log(timeSync(timeOffline));