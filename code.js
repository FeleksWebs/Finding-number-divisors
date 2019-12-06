var oneToHunder = [];

//create an array based on user input
function createArr(){
  input = document.getElementById('inputAr')
  inputvalue = (parseInt(input.value))

  //push number 0->100 into oneToHunder array
for (var i = 0;i<=inputvalue;i++){
  oneToHunder.push(i);
}
 //randomise numbers in array
 while (oneToHunder.length) {
  var randomizer = oneToHunder.splice(Math.floor(Math.random() * oneToHunder.length), 1)


  //create p
  var p = document.createElement("p");
  p.id = randomizer
  p.setAttribute('onmouseover','onHover(this.id)')
  p.setAttribute('onmouseout','clearId(this.id)')

  var node = document.createTextNode(randomizer);

  //create div
  var element = document.getElementById("div1");
  element.appendChild(p);
  //append p -> div
  p.appendChild(node);

   //document.write("<p onmouseover='onHover(this.id)' onmouseout='clearId(this.id)' id='"+randomizer+"' </p>"+randomizer+" </br>")




}
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
