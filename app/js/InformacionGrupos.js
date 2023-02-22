import { url } from "./comun.js"

const idGroup = window.location.href.split('#')[1]

const informGrupos = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
        User: 'etraining',
        Password: 'explorandoando2020%',
        option: 'infoGrupo',
        IdGrupo: idGroup
    }),
    headers: {
        "Content-type": "application/json;"
    }
}).then(res => res.json())
  .then(body => body.data)

let body = ''

for(let i=0;i<informGrupos.length;i++){
    body += `<tr><td>${informGrupos[i].nombre}</td>
                    <td>${informGrupos[i].institución}</td>
                    <td>${informGrupos[i].municipio}</td>
                    <td>${informGrupos[i].numGrupo}</td></tr>`
}

document.getElementById('informacionGrupos').innerHTML = body