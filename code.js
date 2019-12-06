var oneToHunder = [];


  //push number 0->100 into oneToHunder array
for (var i = 0;i<=100;i++){
  oneToHunder.push(i);
}

 //randomise numbers in array
 while (oneToHunder.length) {
  var randomizer = oneToHunder.splice(Math.floor(Math.random() * oneToHunder.length), 1)
   document.write("<p onmouseover='onHover(this.id)' onmouseout='clearId(this.id)' id='"+randomizer+"' </p>"+randomizer+" </br>")

}






//Find divisors of number
function divisors(integer){
    divs = [];
    if(integer > 1){
      for(i=0;i<=integer/2;i++){
        if(integer % i === 0){
          document.getElementById(i).style.backgroundColor="yellow"
        }
      }
    }
}




//on mouse hover change colors
function onHover(id){
document.getElementById(id).style.backgroundColor = "red";
divisors(id)
}

//on mouse exit remove color
function clearId(id){
  function divisors(integer){
    divs = [];
    if(integer > 1){
      for(i=0;i<=integer/2;i++){
        if(integer % i === 0){
          document.getElementById(i).style.backgroundColor="white"
        }
      }
    }
}
divisors(id)
document.getElementById(id).style.backgroundColor = "white";
  
}


//check input value, and highlight that number
var input = document.getElementById('inputNr')
function findNr(){
    var number = parseInt(inputNr.value)
    document.getElementById(number).style.backgroundColor = "red";
  //divisor number
  divisors(number);
}



//restart page
function reload(){
    location.reload()
}