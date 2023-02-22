import { url } from "./comun.js"

const codigoSede = window.location.href.split('#')[1]

const grupos = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
        User: 'etraining',
        Password: 'explorandoando2020%',
        option: 'grupos',
        CodSede: codigoSede
    }),
    headers: {
        "Content-type": "application/json;"
    }
}).then(res => res.json())
  .then(body => body.data)

let body = ''

for(let i=0;i<grupos.length;i++){
    body += `<tr><td><a href = "informacionGrupos.html#${grupos[i].id}">${grupos[i].nombre}<a/></td></tr>`
}

document.getElementById('tablaGrupos').innerHTML = body