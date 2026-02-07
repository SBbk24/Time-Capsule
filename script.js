/*************************
   AYARLAR
*************************/

const PASSWORD = "Bs220225";
const totalPetals = 365;

const startDate = new Date("2026-03-10");

const endDate = new Date(startDate);
endDate.setFullYear(endDate.getFullYear() + 3);


/*************************
   GİRİŞ
*************************/

function login() {
  const input = document.getElementById("password").value;

  if (input === PASSWORD) {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("capsuleScreen").style.display = "block";

    createPetals();
    updateRose();
  } else {
    alert("Yanlış Şifre");
  }
}


/*************************
   TARİH
*************************/

function getPassedDays() {
  const today = new Date();
  const diff = today - startDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  return Math.max(days, 0);
}

function isFinalDay() {
  const today = new Date();
  return today >= endDate;
}


/*************************
   YAPRAK OLUŞTURMA
*************************/

function createPetals() {
  const rose = document.getElementById("rose");

  if (rose.children.length > 0) return;

  for (let i = 0; i < totalPetals; i++) {

    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.dataset.index = i;

    const angle = Math.random() * 360;
    const radius = Math.random() * 80;

    petal.style.transform = `
      rotate(${angle}deg)
      translate(${radius}px)
    `;

    rose.appendChild(petal);
  }
}


/*************************
   GÜNLÜK DÖKÜM
*************************/

function updateRose() {

  const passedDays = getPassedDays();
  const petals = document.querySelectorAll(".petal");

  petals.forEach((petal, index) => {

    if (index < passedDays - 1) {
      petal.classList.add("fallen-static");
    }

    if (index === passedDays - 1) {
      petal.classList.add("fall-animate");
    }

  });
}


/*************************
   FANUS AÇMA
*************************/

function openGlass() {

  if (!isFinalDay()) return;

  const glass = document.getElementById("glass");
  glass.classList.add("glass-open");

  setTimeout(() => {
    showFinalMessage();
  }, 1500);
}


/*************************
   FİNAL MESAJ
*************************/

function showFinalMessage() {

  const message = document.getElementById("message");

  message.innerText =
    "Ruhumun en güzel ve en temiz köşesinde sen varsın, seni sonsuza kadar seveceğim... Doğum Günün Kutlu Olsun.";

  message.style.opacity = "1";
}
