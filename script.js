let luckybtn = Math.floor((Math.random() * 3) + 1);

function luckyButton(idBtn) {
  if (luckybtn == idBtn) {
    document.getElementById("result").innerHTML = "Congratulations you won!";
  } else {
    document.getElementById("result").innerHTML = "I'm sorry :( to try again";
  }
}