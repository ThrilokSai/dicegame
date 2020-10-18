

var ran1= ((Math.random()*6)+1);
ran1=Math.floor(ran1);
document.querySelectorAll("img")[0].setAttribute("src",`images/dice${ran1}.png`);
console.log(ran1);
var ran2= ((Math.random()*6)+1);
ran2=Math.floor(ran2);
document.querySelectorAll("img")[1].setAttribute("src",`images/dice${ran2}.png`);

console.log(ran2);

if(ran1>ran2)
    document.getElementsByTagName("h1")[0].innerHTML="Player 1 Wins";
else if(ran1<ran2)
document.getElementsByTagName("h1")[0].innerHTML="Player 2 Wins";
else if(ran1===ran2)
document.getElementsByTagName("h1")[0].innerHTML="Draw";

