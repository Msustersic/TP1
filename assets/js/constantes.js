/* API sheetdb */
const APIcomments_URL = "https://sheetdb.io/api/v1";
const APIcomments_URN = "p6vytybspledu";
export const APIcomments_URI = `${APIcomments_URL}/${APIcomments_URN}`;

const LOCAL_URL = "http://192.168.0.150:8081"

export const IAs_URI = "./assets/JSON/ias.json";
export const IAsType_URI = "../assets/JSON/iasType.json";

export const iaType = [
   {nombre:"Arte & Creatividad",image: "./assets/media/icons/1.png", iaTypeID: 1},
   {nombre:"Conversasionales",image: "./assets/media/icons/2.png", iaTypeID: 2},
   {nombre:"Diseño",image: "./assets/media/icons/3.png", iaTypeID: 3},
   {nombre:"Educación",image: "./assets/media/icons/4.png", iaTypeID: 4},
   {nombre:"Programación",image: "./assets/media/icons/5.png", iaTypeID: 5},
   {nombre:"Automatización",image: "./assets/media/icons/6.png", iaTypeID: 6},
   {nombre:"Texto & Traducción",image: "./assets/media/icons/7.png", iaTypeID: 7}
];