import _ from 'lodash'
import renderPlatos from './platos'
import renderMenu from './menu'
import renderContacto from './contacto'
import renderPortada from './portada'

const divContenido = document.querySelector('#contenido')

const menu = [{
  titulo: "Portada",
  accion: () => renderPortada(divContenido)
},{
  titulo: "Platos",
  accion: () => renderPlatos(divContenido)
},{
  titulo: "Contacto",
  accion: () => renderContacto(divContenido)
}]

renderMenu(document.querySelector("#menu"), menu)
renderPortada(divContenido)
