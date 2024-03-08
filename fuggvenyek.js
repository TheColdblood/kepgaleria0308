export function htmlOsszeAllit(lista) {
   /* Itt állítjuk össze a htmlt */
   /* <div class="kep"><img src="elérés" alt="cím"></div>*/
   let txt = "";
   for (let index = 0; index < lista.length; index++) {
        txt += `
        <div class="kep"><img src=${lista[index].kep} alt=${lista[index].cim}></div>
        `
   }
   console.log(txt);
   return txt;
}
