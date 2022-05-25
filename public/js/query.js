
const queryParams = new URLSearchParams(location.search);

window.onload = () =>{
  init();
}

const init = () => {
  
  console.log(queryParams.get("color"));
  document.querySelector("#id_h2").style.color = queryParams.get("color")
  document.querySelector("#id_h2").style.background = queryParams.get("bg")
  
}