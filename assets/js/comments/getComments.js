export function commentsToRender(data) {

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
}
