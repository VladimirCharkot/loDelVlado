
export default function renderMenu(div, menu){
  menu.forEach(m => {
    const boton = document.createElement('div')
    boton.textContent = m.titulo
    boton.addEventListener('click', m.accion)
    div.appendChild(boton)
  })
}