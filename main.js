const btn1 = document.getElementById("Cinesioterapia");
const info1 = document.getElementById("info1");
const btn2 = document.getElementById("Eletroterapia");
const info2 = document.getElementById("info2");
const btn3 = document.getElementById("Terapia Manual");
const info3 = document.getElementById("info3");

// Alterna a visibilidade do conteúdo principal
btn1.onclick = function() {
  if (info1.style.display === "none" || info1.style.display === "") {
    info1.style.display = "flex"
  } else {
    info1.style.display = "none";
    texto.style.display = "none";
  }
};

btn2.onclick = function() {
  if (info2.style.display =='none' || info2.style.display ==''){
    info2.style.display = 'flex'
  } else{
    info2.style.display = 'none'
  }
}

btn3.onclick = function() {
  if (info3.style.display =='none' || info3.style.display ==''){
    info3.style.display = 'flex'
  } else{
    info3.style.display = 'none'
  }
}
function toggleTexto() {
  let texto = document.getElementById("texto");
  texto.style.display = texto.style.display === "none" ? "block" : "none";
}