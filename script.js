const PASSWORD = "Bs220225";
const targetDate = new Date("2026-03-10");

function login(){
  const input = document.getElementById("password").value;

  if(input === PASSWORD){
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("capsuleScreen").style.display = "flex";
    document.getElementById("lightEffect").classList.add("light-on");
    checkDate();
  } else {
    alert("Yanlış şifre");
  }
}

function checkDate(){
  const today = new Date();

  // Final günü veya sonrası
  if(
    today.getFullYear() > targetDate.getFullYear() ||
    (today.getFullYear() === targetDate.getFullYear() &&
     today.getMonth() === targetDate.getMonth() &&
     today.getDate() >= targetDate.getDate())
  ){
    showFinalScene();
  } else {
    document.getElementById("countdown").innerText =
    "Sen arada bakabilirsin… Ama o, açılması gereken zamanı çok iyi bilir.";
  }
}

function showFinalScene(){
  const fanus = document.getElementById("fanus");
  const message = document.getElementById("message");

  // Final yaprak sadece 1 kez düşsün
  if(!document.querySelector(".petal.final")){
    createPetal(true);

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
  } else {
    // Zaten final sahne hazırsa direkt göster
    fanus.classList.add("zoom");
    message.style.opacity = "1";
  }
}

function normalDay(){
  for(let i=0; i<7; i++){
    setTimeout(()=>{
      createPetal(false);
    }, i * 500);
  }

  document.getElementById("countdown").innerText =
  "Sen arada bakabilirsin… Ama o, açılması gereken zamanı çok iyi bilir.";
}

function finalDay(){
  document.body.classList.add("final-background");

  createPetal(true);

  setTimeout(()=>{
    document.getElementById("fanus").classList.add("zoom");
  },2500);

  setTimeout(()=>{
    typeWriter(
      "Ruhumun en güzel ve en temiz köşesinde sen varsın, seni sonsuza kadar seveceğim... Doğum günün kutlu olsun Balım."
    );
  },4000);
}

function createPetal(isFinal){
  const fanus = document.getElementById("fanus");

  const petal = document.createElement("div");
  petal.className = isFinal ? "petal final" : "petal";

  petal.style.left = Math.random() * 220 + "px";

  fanus.appendChild(petal);

  // Eğer final değilse animasyon bitince sil
  if(!isFinal){
    setTimeout(()=>{
      petal.remove();
    }, 4000); // CSS animasyon süresiyle aynı olmalı
  }
}

function typeWriter(text){
  const message = document.getElementById("message");
  message.classList.add("final-message");
  message.style.opacity = "1";
  message.innerHTML = "";

  let i = 0;
  const speed = 40;

  function write(){
    if(i < text.length){
      message.innerHTML += text.charAt(i);
      i++;
      setTimeout(write, speed);
    }
  }

  write();
}



