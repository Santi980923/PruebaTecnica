
const url = 'https://www.php.engenius.com.co/DatabaseIE.php';

const codigoMunicipio = window.location.href.split('#')[1]

const instituciones = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
        User: 'etraining',
        Password: 'explorandoando2020%',
        option: 'instituciones',
        CodMun: codigoMunicipio
    }),
    headers: {
        "Content-type": "application/json;"
    }
}).then(res => res.json())
  .then(body => body.data)


  //Muestra la lista de municipios en una tabla
  let body= ''
  for(let i=0;i<instituciones.length;i++){
        body += `<tr><td><a href = "sedes.html#${instituciones[i].dane}">${instituciones[i].nombre}<a/></td></tr>`
  }
  document.getElementById('tablaInstituciones').innerHTML = body
