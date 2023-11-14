import { APIcomments_URI } from "../constantes.js";
import { Render } from "../render.js";
import { commentsToRender } from "./getComments.js";

const comments = new Render("dataList");
comments.fetchData(APIcomments_URI, commentsToRender);