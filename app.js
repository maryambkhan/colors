const colors = ["green","red","rgba(133,122,200)","#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListner("click". function() {
const randomNumber = 2;
                    
document.body.style.backgroundColor = colors[randomNumbers];
color.textContent = colors[randomNumber];
});

function getRandomNumber(){
  return Math.floor(Math.random() * colors.length);
}
