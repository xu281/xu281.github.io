const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Huhuhuhu anh hết yêu bé rồi, anh là đồ tồi, còn không mau chọn lại";
  gif.src =
    "https://media1.giphy.com/media/iCVzZwwE6QNAV2tEE0/giphy.gif";
  yesBtn.style.display = "none";
});

noBtn.addEventListener("click", () => {
 question.innerHTML = "Yeahhhhh Bé cũng yêu anhhhhh 😘";
  gif.src =
    "https://i.imgur.com/RRhHW6N.jpeg";
});
