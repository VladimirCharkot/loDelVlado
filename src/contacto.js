import contacto from './contacto.json'

export default function renderContacto(div){
  
  // Cabecera
  const header = document.createElement('h2')
  header.textContent = 'Contacto'
  
  const texto = document.createElement('p')
  texto.textContent = contacto.texto
  
  const telefono = document.createElement('p')
  telefono.textContent = "Telefono: " + contacto.telefono

  const apoyo = document.createElement('p')
  apoyo.textContent = contacto.apoyo
  
  const mapa = document.createElement('img')
  mapa.src = contacto.mapa
  
  div.innerHTML = ""
  div.className = 'contacto'
  div.appendChild(header)
  div.appendChild(texto)
  div.appendChild(telefono)
  div.appendChild(apoyo)
  div.appendChild(mapa)

}