// var bar1 = document.getElementById("ns");
var nav1=document.getElementsByClassName("mob-nav");

// bar.addEventListener(click,function(){
//     close.classList.add(mob-nav)
// })
// bar1.addEventListener('click',myfunction())

function myFunction() {
    var element = document.getElementById("myDIV");
    element.classList.remove("close");
    document.getElementById("ns").style.display="none";
    document.getElementById("cross").style.display="initial";
    
    document.getElementById("logo").style.display="none";

  }

  function band(){
    document.getElementById("ns").style.display="initial";
    document.getElementById("cross").style.display="none";
    var element = document.getElementById("myDIV");
    element.classList.add("close");
    document.getElementById("logo").style.display="initial";
  }









// function ns(){
//  var close = document.getElementsByClassName("close");
//  element.classList.remove("close");


// }