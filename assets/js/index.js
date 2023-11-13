
import { APIcomments_URI, IAs_URI, IAsType_URI } from "./constantes.js";
import { Render } from "./render.js";
import { commentsToRender, obtenerIAsByType, obtenerIAsList } from "./functions.js";

/* manejo del menu responsive */
let btnMenuPri = document.querySelector('#btnMenuPri');
let linksMenuPri = document.querySelector('#menuPri>ul');

btnMenuPri.addEventListener('click', () => {
    linksMenuPri.classList.toggle('active');
});


/* Obtención y renderizado de datos */
const ias = new Render("iaList");
const comments = new Render("dataList");
const iasByFunction = new Render("iaByFunctionList");

ias.fetchData(IAs_URI, obtenerIAsList);
comments.fetchData(APIcomments_URI, commentsToRender);
iasByFunction.fetchData(IAsType_URI, obtenerIAsByType);
