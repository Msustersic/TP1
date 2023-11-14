import { iaType } from "./constantes.js";

export function obtenerIAsList(data) {
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
};

export function obtenerIAsByType(data) {

   let itemsByType = "";
   const iaTypeEndPattern =`
         </ul>
      </section>`;

   if (!data) {
      console.log("la lista de IAs se encuentra vacía");
      return;
   }

   for (let i=0;i<iaType.length;i++){
      let idx = i +1;
      iaTypeStartPattern = `
         <section class="byFunction">
            <header>
               <h2>${iaType[i].nombre}</h2>
               <img src="${iaType[i].image}" width="50">
            </header>
            <ul id="iaList">`;
      itemsByType += iaTypeStartPattern
      data.forEach((item) => {
         for (let j=0;j<=item.iaTypeID[j].length;j++){
            if (item.iaTypeID[j] == idx){
               let itemPattern = `
                  < li >
                     <a href="${item.link}" target="_blank">
                     <img src="${item.image}" title="${item.nombre} alt=" ${item.nombre} site">
                  </li>`;
            }
            itemsByType += itemPattern;
         }
      });
      itemsByType += iaTypeEndPattern;
   }
   return itemsByType;
};

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
         </li> `;
      items += pattern;
   });

   return items;
};
