
var  head = document.querySelector("#btn1")
var  tails = document.querySelector("#btn2")
var  result = document.querySelector("#result")
var  img = document.querySelector("#img")
var  num;
function toss(para) {
    num = Math.ceil(Math.random(num) * 2)
    if (para === 1 && num === 1 || para === 2 && num === 2) {
        result.innerHTML = "The Winner Is Heads!"
        console.log("You Win The Toss!" + num);
        
    } else {
        console.log("You Loss The Toss!" + num);
        result.innerHTML = "The Winner Is Tails!"
    }
    if (num === 1) {
        img.src = "image./head.png"
        
    } else if (num === 2) {
        img.src = "image./tails.png"
    
    }
}