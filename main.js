alert("Assalomu alaykum!")
var old = prompt("Yoshingizni kiriting")

if(old>=1 && old<18){
alert("Siz hali o'qishingiz kerak")
}
else if(old>=18 && old<50){
    alert("Siz ishlashingiz kerak!")
    
}
else if(old>=50 && old<60){
    alert("Yaqinda pensiyaga chiqasiz!")
}
else if(old>=60 && old<150){
    alert("Pensionerga o'xshaysiz, hali tirik bo'lsangiz")
}
else if(old>150){
    alert("bunday yoshli trik  inson aniqlanmagan !")
}
else if (  isNaN(old)  ){
    alert("Iltimos faqat raqamlar bilan yoshingizni ifodalang!")
}