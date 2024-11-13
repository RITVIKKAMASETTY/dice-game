a={1:"dice1.png",
    2:"dice2.png",
    3:"dice3.png",
    4:"dice4.png",
    5:"dice5.png",
    6:"dice6.png",
};
e=[]
function diceimage()
{
b=Math.floor(Math.random()*6+1);
e.push(b);
return(a[b]);
}
img1=document.querySelector(".img1");
img2=document.querySelector(".img2");
img1.src=diceimage();
img2.src=diceimage();
console.log(e);
h1=document.querySelector("h1");
if(e[0]>e[1])
{
h1.innerHTML="player1 win";
}
else
{
h1.innerHTML="player2 win";
}