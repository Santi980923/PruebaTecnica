import { url } from "./comun.js"

const codigoInstitucion = window.location.href.split('#')[1]

const sedes = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
     User: 'etraining',
    Password: 'explorandoando2020%',
    option: 'sedes',
    CodInst: codigoInstitucion
    }),
    headers: {
        "Content-type": "application/json;"
    }
}).then(res => res.json())
  .then(body => body.data)


  //Muestra la lista de sedes en una tabla
let body = ''
for(let i=0;i<sedes.length;i++){
    body += `<tr><td><a href = "grupos.html#${sedes[i].dane}">${sedes[i].nombre}<a/></td></tr>`
}
document.getElementById('tablaSedes').innerHTML = body
