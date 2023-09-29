import portada from './portada.json'

export default function renderPortada(div){
  div.innerHTML = ""
  div.className = "portada"

  const header = document.createElement('div')
  const titulo = document.createElement('h1')
  const icono = document.createElement('img')
  header.className = 'header'
  icono.src = portada.icono
  titulo.textContent = portada.titulo
  header.appendChild(icono)
  header.appendChild(titulo)
  div.appendChild(header) 

  portada.descripción.forEach(d => {
    const parrafo = document.createElement('p')
    parrafo.textContent = d
    div.appendChild(parrafo)
  })

}