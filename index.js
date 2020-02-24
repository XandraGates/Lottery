var fname = prompt("Please insert your first name");
prompt("Please insert your last name");
prompt("Please insert your age");
var luckyNumber = prompt("Please insert your lucky number");
prompt("If you win, what would you spend the money on?");

if(isNumeric(luckyNumber)){
  if(luckyNumber == 2){
    document.getElementById("lotteryresult").src="images/lottery2.png";
  }else if(luckyNumber == 10){
    document.getElementById("lotteryresult").src="images/lottery10.png";
  }else if(luckyNumber == 15){
    document.getElementById("lotteryresult").src="images/lottery15.png";
  }else if(luckyNumber == 17){
    document.getElementById("lotteryresult").src="images/lottery17.png";
  }else{
    document.getElementById("lotteryresult").src="images/lottery_lost.png";
    document.getElementById("wrongNumb").innerHTML= luckyNumber;
  }
  document.getElementById("thankU").innerHTML=`Thank you for playing, ${fname}`;
}else{
  alert("Not valid - please refresh the page and pick a number");
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
