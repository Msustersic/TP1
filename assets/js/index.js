
import { API_URI, IAs_URI } from "./constantes.js";
import { Render } from "./render.js";
import { commentsToRender, obtenerIAsList } from "./functions.js";

/* manejo del menu responsive */
let btnMenuPri = document.querySelector('#btnMenuPri');
let linksMenuPri = document.querySelector('#menuPri>ul');

btnMenuPri.addEventListener('click', () => {
    linksMenuPri.classList.toggle('active');
});


/* Obtención y renderizado de datos */
const comments = new Render("dataList");
const ias = new Render("iaList");
const iasByFunction = new Render("iaListByFunction");

comments.fetchData(API_URI, commentsToRender);

ias.fetchData(IAs_URI, obtenerIAsList);

iasByFunction.fetchData(IAs_URI, obtenerIAsList);
