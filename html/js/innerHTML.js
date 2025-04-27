function setup(){
  const s1 = document.getElementById("div1");
  let s = "";
  for(let i = 0; i < 10; i++){
    s += "<div><span>hello world.</span></div>";
  }
  s1.innerHTML = s;
}