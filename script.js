function animateHeart() {
  TweenMax.from($("#heart"), 1, {
    scaleX: 1.2, 
    scaleY: 1.2,
    transformOrigin: "50% 50%",
    ease: Elastic.easeOut.config(1, 0.3)
  });
  TweenMax.to($("#heart"), 1, {
    scaleX: 1, 
    scaleY: 1,
    ease: Elastic.easeOut.config(1, 0.3),
    onComplete: function() {
      setTimeout(animateHeart, 200);
    }
  });
}

new Vivus('message', {type: "oneByOne", duration: 1200}, function() {
  TweenMax.to($("path"), 5, {fillOpacity: 1, onComplete: function() {
    animateHeart();
  }});
});

$(function() {
  TweenMax.to("body", 20, {backgroundPositionY: -100, repeat: -1, ease: Power0.easeNone});
})



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
