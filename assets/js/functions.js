export function commentsToRender(data) {
   let item;
   let items = "";

   if (!data) {
      console.log("la lista de comentarios recibidos se encuentra vacía");
      return;
   }

   data.forEach((item) => {
      let pattern = `
         <li>
            <article>
               <p>${item.Nombre}</p>
               <p>${item.Comentario}</p>
            </article>
         </li>`;
      items += pattern;
   });

   return items;
}

/* function ordenerIAsByFunction(data) {

} */

export function obtenerIAsList(data) {
   let item;
   let items = "";
   
   if (!data) {
      console.log("la lista de IAs se encuentra vacía");
      return;
   }

   data.forEach((item) => {
      let itemPattern = `
         <li>
         <a href="${item.link}" target="_blank">
         <img src="${item.image}" title= "${item.nombre} alt="${item.nombre} site">
         </li>`;
      items += itemPattern;
   });
   return items;
}


/* 
export function obtenerIAsBytype(data, tipo) {
   let item;
   let items = "";
   
   if (!data) {
      log("la lista de IAs se encuentra vacía");
      return;
   }

   for (let i = 0; i <= iasType.length - 1; i++) {
      byFunctionPattern = `
         <section class="byFunction">
            <header>
               <h2>${iasType[i].}</h2>
               <img src="${iasType[i].image}" width="50">
            </header>
            <ul id="iaArteCreatividadList">

            </ul>`;
   }


   data.forEach((item) => {

      let itemPattern = `
         <li>
         <a href="${item.link}" target="_blank">
         <img src="${item.image}" title= "${item.nombre} alt="${item.nombre} site">
         </li>`;

      items += pattern;

      if (byFunction) {
         switch (item.tipo) {
            case "Arte & Creatividad":
               arteCreatividadPattern += itemPattern;
               break;
            case "Conversacional":
               conversacionalPattern += itemPattern;
               break;
            case "Disenio":
               disenioPattern += itemPattern;
               break;
            case "Educacion":
               educacionPattern += itemPattern;
               break;
            case "Programacion":
               programacionPattern += itemPattern;
               break;
            case "Automatismo":
               automatismoPattern += itemPattern;
               break;
            case "TextoTraduccion":
               textoTraduccionPattern += itemPattern;
               break;
            default:
               console.log(`Funcionalidad "${item.tipo}" no errónea o no cataloga`);
               break;
         }
      }
   });


   return items;
}
 */