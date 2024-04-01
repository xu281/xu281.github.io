const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Huhuhuhu anh hết yêu bé rồi 🥺 dỗiiii x10000000, <br>còn không mau chọn lại";
  gif.src =
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcm45NDg1dDlna3ZmazIxNWMxOHM3MzVhYzRneDBxN2c1OXN4ejl6ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/N32n3cxZGUx0IHS8i7/giphy.gif";
  yesBtn.style.display = "none";
});

noBtn.addEventListener("click", () => {
 question.innerHTML = "Yeahhhhh <br> Bé cũng yêu anhhhhh 😘";
 // gif.src =
 //   "https://i.imgur.com/IyRqVIV.jpg";
  img.src="https://i.imgur.com/IyRqVIV.jpg";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});
