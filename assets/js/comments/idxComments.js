import { APImrl_URI, TOKEN_APImrl } from "../constantes.js";
import { Render } from "../render.js";
import { commentsToRender } from "./getComments.js";

const comments = new Render("dataList");
comments.fetchData(APImrl_URI, 
   commentsToRender, 
   {
      method: 'GET',
      headers: {
         'Authorization': `Bearer ${TOKEN_APImrl}`
      }      
   })
   