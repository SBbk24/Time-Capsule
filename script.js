const PASSWORD = "Bs220225";
const targetDate = new Date("2026-03-10");

function login(){
  const input = document.getElementById("password").value;

  if(input === PASSWORD){
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("capsuleScreen").style.display = "flex";

    const light = document.getElementById("lightEffect");
    light.classList.add("light-on");

    checkDate();
  } else {
    alert("Yanlış şifre");
  }
}


function checkDate(){
  const today = new Date();

  // Eğer bugün 10.03.2026 ise
  if(
    today.getFullYear() === targetDate.getFullYear() &&
    today.getMonth() === targetDate.getMonth() &&
    today.getDate() === targetDate.getDate()
  ){
    finalDay();
  } else {
    document.getElementById("countdown").innerText =
    "Sen arada bakabilirsin… Ama o, açılması gereken zamanı çok iyi bilir.";
  }
}

function finalDay(){
  const fanus = document.getElementById("fanus");
  const message = document.getElementById("message");

  // Tek yaprak oluştur
  const petal = document.createElement("div");
  petal.classList.add("petal");
  petal.style.left = "120px";
  fanus.appendChild(petal);

  // Zoom efekti
  setTimeout(() => {
    fanus.classList.add("zoom");
  }, 2000);

  // Mesaj göster
  setTimeout(() => {
    message.innerText =
    "Ruhumun en güzel ve en temiz köşesinde sen varsın, seni sonsuza kadar seveceğim... Doğum günün kutlu olsun Balım.";
    message.style.opacity = "1";
  }, 3500);
}

