
var input = document.getElementById("progressInput");
var progressPercentage = document.getElementById("progressPercentage");
var customText = document.getElementById("customText");
var percent = 0;

function updateProgressBar() {
    percent += 1;
    if (percent <= 100) {
        input.style.background = `linear-gradient(90deg, pink ${percent}%, violet ${percent}%)`; // Thay màu nền từ trắng sang hồng
        progressPercentage.innerText = percent + "%"; // Hiển thị phần trăm
        if (percent === 100) {
            // Khi đạt 100%, thay thế giá trị trong ô input bằng "Xong Rồi Đi Tiếp Thôi:))))"
            input.value = "Xong Rồi Đi Tiếp Nào:))))";
            input.classList.add("red-text"); // Thêm lớp để đặt màu chữ thành đỏ

            var button = document.createElement("button");
            button.innerHTML = "Tiếp Tục";
            button.classList.add("btn", "btn-primary"); // Thêm lớp Bootstrap để tạo nút màu xanh
            button.onclick = function() {
                window.location.href = "letters.html"; // Chuyển hướng sang trang "index.html"
            };
            customText.replaceWith(button);
        }
        setTimeout(updateProgressBar, 100); // Cập nhật sau mỗi 100ms
    }
}

updateProgressBar();
