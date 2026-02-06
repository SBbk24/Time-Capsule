const PASSWORD = "Bs220225"; // Şifreyi buradan değiştirebilirsin

function login() {
  const input = document.getElementById("password").value;
  if(input === PASSWORD){
    // Şifre doğruysa ekran değişimi
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("capsuleScreen").style.display = "block";

    // Işık efekti
    const light = document.getElementById("lightEffect");
    light.classList.add("light-on");

    // Yaprak dökme / solma animasyonu
    setTimeout(updateRose, 100); // küçük gecikme
  } else {
    alert("Yanlış şifre");
  }
}

// Gül yapraklarının solması mantığı
function updateRose(){
  const rose = document.getElementById("rose");

  // Örnek: toplam 6 yaprak, gün sayısına göre soluyor
  const totalDays = 30;
  const daysLeft = Math.floor(Math.random() * totalDays); // test için rastgele

  // Gün azaldıkça gül küçülür ve hafif dökülme efekti
  const scale = 1 - ((totalDays - daysLeft)/ totalDays) * 0.5; // en az %50 küçülme
  const opacity = 1 - ((totalDays - daysLeft)/ totalDays) * 0.5;

  rose.style.transform = `scale(${scale})`;
  rose.style.opacity = opacity;
}