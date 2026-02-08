const PASSWORD = "Bs220225";
const targetDate = new Date("2026-03-10");

function login(){
  const input = document.getElementById("password").value;

  if(input === PASSWORD){
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("capsuleScreen").style.display = "flex";
    checkDate();
  } else {
    alert("Yanlış şifre");
  }
}

function checkDate(){
  const today = new Date();

  if(
    today.getFullYear() === targetDate.getFullYear() &&
    today.getMonth() === targetDate.getMonth() &&
    today.getDate() === targetDate.getDate()
  ){
    finalDay();
  } else {
    normalDay();
  }
}

function normalDay(){
  const fanus = document.getElementById("fanus");

  // 7 yaprak düşür
  for(let i=0; i<7; i++){
    setTimeout(()=>{
      createPetal(false);
    }, i * 400);
  }

  document.getElementById("countdown").innerText =
  "Sen arada bakabilirsin… Ama o, açılması gereken zamanı çok iyi bilir.";
}

function finalDay(){
  const fanus = document.getElementById("fanus");

  // Tek yaprak
  createPetal(true);

  setTimeout(()=>{
    fanus.classList.add("zoom");
  },2000);
}

function createPetal(isFinal){
  const fanus = document.getElementById("fanus");

  const petal = document.createElement("div");
  petal.className = "petal";

  petal.style.left = Math.random() * 230 + "px";

  if(isFinal){
    petal.classList.add("final-petal");

    const text = document.createElement("div");
    text.className = "petal-text";
    text.innerText =
    "Ruhumun en güzel ve en temiz köşesinde sen varsın, seni sonsuza kadar seveceğim... Doğum günün kutlu olsun Balım.";

    petal.appendChild(text);
  }

  fanus.appendChild(petal);
}
