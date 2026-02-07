const PASSWORD = "Bs220225"; // Şifreyi değiştir
const totalPetals = 365;
// Başlangıç tarihi (ÖZEL GÜN)
const startDate = new Date("2026-03-10");
// 3 yıl sonrası otomatik hesaplanır
const endDate = new Date(starDate);
endDate.setFullYear(endDate.getFullYear() + 3);
function login() {
  const input =
    document.getElementById("password").value;
  if (input === PASSWORD) {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("capsuleScreen").style.display = "block";
    createPetals();
    updateRose();
  } else {
    alert("Yanlış Şifre");
  }
}
function getPassedDays() {
  const today = new Date();
  const diff = today - starDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  return Math.max(days, 0);
}
function createPetals() {
  const rose = document.getElementById("rose");
  // Eğer tekrar giriş yapılırsa tekrar üretmesin 
if (rose.children.length > 0) return;
  for (let i = 0; i < totalPetals; i++) {
    const petal =
      document.createElement("div");
    petal.classList.add("petal");
    petal.dataset.index = i;
    // rastgele konum (gül gibi dağılması için)
  const angle = Math.random() * 360;
    const radius = Math.random() * 80;
    petal.style.transform =`
    rotate(${angle}deg)
    translate(${radius}px)
`;
    ;
    rose.appendChild(petal);
  }
}
function updateRose() {
  const passedDays = getPasseDays();
  const petals = 
  document.querySelectorAll(".petal");
  petals.forEach((petal, index) => {
    if (index < passedDays - 1) {
      // Eski yapraklar yerde sabit
    petal.classList.add("fallen-static");
    }
    if (index === passedDays - 1) {
      // Sadece bugünün yaprağı animasyonlu düşer
    petal.classList.add("fall-animate");
    }
  });
}
function openGlass() {
  if isFinalDay() {
  const today = new Date();
  return today >= endDate;
  const glass = 
  document.getElementById("glass");
  glass.classList.add("glass-open");
  setTimeout(() => {
    showFinalMessage() ;
  }, 1500);
}
function showFinalMessage() {
  const message =
    document.getElementById("message");
  message.innerText = "Ruhumun en güzel ve en temiz köşesinde sen varsın, seni sonsuza kadar seveceğim... Doğum Günün Kutlu Olsun.";
  message.style.opacity = "1";
}

