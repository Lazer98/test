
window.onload = () => {
  declareEvents();
}

const declareEvents = () => {
  // keydown -> אירוע שפועל לא משנה על איזה מקש לחצנו
  document.addEventListener("keydown" , (e) => {
    console.log("click",e.key);
    if(e.key == "g"){
      document.querySelector("#id_h2").style.background = "green";
    }
    else if(e.key == "o"){
      document.querySelector("#id_h2").style.background = "orange";
    }
    else if(e.key == "r"){
      document.querySelector("#id_h2").style.background = "red";
    }
    else{
      document.querySelector("#id_h2").style.background = "white";

    }
  })
}