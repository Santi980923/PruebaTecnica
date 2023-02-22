import { url } from "./comun.js"

const municipios = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
        User: 'etraining',
        Password: 'explorandoando2020%',
        option: 'municipios'
    }),
    headers: {
        "Content-type": "application/json;"
    }
}).then(res => res.json())
  .then(body => body.data)

// Muestra la lista de municipios en una tabla

let body = ''

for(let i=0;i<municipios.length;i++){
    body += `<tr><td><a href = "instituciones.html#${municipios[i].dane}">${municipios[i].nombre}<a/></td></tr>`
}

document.getElementById('tablaMunicipio').innerHTML = body


 

    