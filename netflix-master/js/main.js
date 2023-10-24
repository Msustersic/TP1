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
    {nombre:"chat gpt", Imagen:"https://www.ymca.int/wp-content/uploads/2023/08/chatGPT-768x479.jpg"},
    {nombre:"scenario", Imagen:"https://mms.businesswire.com/media/20230119005133/en/1690019/22/scenario_secondarylogo_print.jpg"},
    {nombre:"copi.ai", Imagen:"https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629a702fc90e970b2626cd52_fb-og.jpg"},
    {nombre:"debuild", Imagen:"https://global-uploads.webflow.com/644238b1cf656a0846763003/649890df60c01011e74077ab_debuild_logo.png"},
    {nombre:"lumen 5", Imagen:"https://winningpc.com/wp-content/uploads/2021/11/lumen5-video-maker-350x350.png"},
    {nombre:"synthesia", Imagen:"https://mms.businesswire.com/media/20230613510838/es/1817344/23/synthesia-logo-energeticBlue_%281%29.jpg"},
    {nombre:"grammarly", Imagen:"https://i.pcmag.com/imagery/reviews/05XydTaQtTpzJYn58NfuFyx-11.fit_scale.size_760x427.v1594649446.png"},
    {nombre:"gptzero", Imagen:"https://app.ashbyhq.com/api/images/org-theme-social/46bd02e1-9e90-4f3f-b2e1-711312947c86/6df588f6-e50c-4920-a76d-0f3c301eecb5.png"},
    {nombre:"depp L", Imagen:"https://f-droid.org/repo/com.example.deeplviewer/en-US/icon_yPWzACzWbgjTgxaaKagInwao_H8qw-bH97XMJDGbCh8=.png"},
    {nombre:"zoho zia", Imagen:"https://www.evolucioni3.com/zia-logo.png"},
    {nombre:"reply", Imagen:"https://mms.businesswire.com/media/20230724845282/es/809563/23/Reply_-_LOGO_300dpi.jpg"},
    {nombre:"dall-e", Imagen:"https://lirp.cdn-website.com/df735c7c/dms3rep/multi/opt/MicrosoftTeams-image+%28123%29-640w.png"},
    {nombre:"inworld", Imagen:"https://lsvp.com/wp-content/uploads/2023/07/inworld-logo-black_1536x1000.jpeg"},
    {nombre:"character ai", Imagen:"https://cdn.sanity.io/images/0s2zavz0/production/7c677932e09685f8d849f82ca9aa9f142f6e5251-850x675.png"},
    {nombre:"copy creator", Imagen:"https://iadiscover.com/wp-content/uploads/2023/03/logo_copycreator.png"},
    {nombre:"donotpay", Imagen:"https://www.derechopractico.es/wp-content/uploads/2020/08/Logo-Do-Not-Pay-1.png"},
    {nombre:"flair", Imagen:"https://intelarter.com/wp-content/uploads/2023/08/flair-ai-logo.webp"},
    {nombre:"interior ai", Imagen:"https://www.aitoolsclub.com/content/images/size/w600/format/webp/2023/03/Screenshot-2023-03-25-223717.png"},
    {nombre:"slidesai", Imagen:"https://blogwings.com/wp-content/uploads/2023/05/slidesai.jpg"},
    {nombre:"speak", Imagen:"https://global-uploads.webflow.com/61a88c135006e8345b005efd/63466e2a0744aa6ea5507d7e_speak_opengraph.png"},
    {nombre:"consensus", Imagen:"https://consensus.app/home/wp-content/uploads/2022/05/White-Background-Horizontal-1.png"},
    {nombre:"stockimg.ai", Imagen:"https://vectorseek.com/wp-content/uploads/2023/02/Stockimg.Ai-Logo-Vector.jpg"},
    {nombre:"bing Chat", Imagen:"https://www.bing.com/rp/QO12R6eZz9WMzJPOio-qN8bXJZ4.png"},
    {nombre:"luxer", Imagen:"https://pbs.twimg.com/media/EzClgtLVcAIhaQa?format=webp&name=small"},
    {nombre:"clickup", Imagen:"https://mma.prnewswire.com/media/1195692/ClickUP_Logo.jpg"},
    {nombre:"conversica", Imagen:"https://www.conversica.com/wp-content/uploads/2022/11/conversica-blog.jpg"},
];


function buscar_IA() {

  const searchTerm = document.getElementById("search-input").value;

  const resultado = document.getElementById("resultado");
  const imagenContainer = document.getElementById("imagenContainer");
  const textoContainer = document.getElementById("textoContainer");

  const encontrado = lista.find(item => item.nombre.toLowerCase() === searchTerm.toLowerCase());

  if (encontrado) {
    // Mostrar la imagen
    imagenContainer.innerHTML = `<img src="${encontrado.Imagen}">`;
    // Mostrar el nombre de la IA
    textoContainer.textContent = encontrado.nombre;
    resultado.style.display = "block";  // Ocultar el elemento con ID "resultado"

  } else {
    // Ocultar el resultado si no se encuentra el nombre
    resultado.style.display = "none";
    // Mostrar un alert
    alert(`La Inteligencia "${searchTerm}" no se encontró .`);
  }
}
