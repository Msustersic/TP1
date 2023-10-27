const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// Select tab content
function selectItem(e) {
  removeBorder();
  removeShow();
  // Add border to current tab
  this.classList.add("tab-border");
  // Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // Add show class
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove("tab-border"));
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove("show"));
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener("click", selectItem));

const lista = [
    {nombre:"chat gpt", URL:"https://openai.com/gpt-4"},
    {nombre:"Magic Summaries by Sybill", URL:"https://www.sybill.ai/magic-summary"},
    {nombre:"scenario", URL:"https://www.scenario.com/"},
    {nombre:"copi.ai", URL:"https://www.copy.ai/"},
    {nombre:"debuild", URL:"https://debuild.app/"},
    {nombre:"lumen 5", URL:"https://lumen5.com/"},
    {nombre:"synthesia", URL:"https://www.synthesia.io/"},
    {nombre:"grammarly", URL:"https://www.grammarly.com/grammar-check"},
    {nombre:"gptzero", URL:"https://gptzero.me/"},
    {nombre:"depp L", URL:"https://www.deepl.com/es/translator"},
    {nombre:"zoho zia", URL:"https://www.zoho.com/es-xl/zia/"},
    {nombre:"reply", URL:"https://replylatam.com/"},
    {nombre:"dall-e", URL:"https://openai.com/dall-e-2"},
    {nombre:"inworld", URL:"https://inworld.ai/"},
    {nombre:"character ai", URL:"https://beta.character.ai/"},
    {nombre:"copy creator", URL:"https://copycreator.com/"},
    {nombre:"donotpay", URL:"https://donotpay.com/"},
    {nombre:"flair", URL:"https://withflair.ai./"},
    {nombre:"interior ai", URL:"https://interiorai.com/"},
    {nombre:"slidesai", URL:"https://www.slidesai.io/es"},
    {nombre:"speak", URL:"https://www.speak.com/es/es"},
    {nombre:"consensus", URL:"https://consensus.app/"},
    {nombre:"stockimg.ai", URL:"https://stockimg.ai/"},
    {nombre:"bing Chat", URL:"https://www.bing.com/"},
    {nombre:"luxer", URL:"https://www.luxerone.com/"},
    {nombre:"clickup", URL:"https://clickup.com/"},
    {nombre:"conversica", URL:"https://www.conversica.com/"},
];


function buscar_IA() {
  const searchTerm = document.getElementById("search-input").value;
  const resultado = document.getElementById("resultado");
  const enlaceIA = document.getElementById("enlaceIA");
  const encontrado = lista.find(item => item.nombre.toLowerCase() === searchTerm.toLowerCase());

  if (encontrado) {
      // Actualizar el enlace <a> en el div "textoContainer"
      enlaceIA.href = encontrado.URL;
      enlaceIA.textContent = encontrado.URL;
      resultado.style.display = "block"; // Mostrar el elemento con ID "resultado"
  } else {
      resultado.style.display = "none";
      alert(`La Inteligencia "${searchTerm}" no se encontró.`);
  }
}
