import platos from './platos.json'

export default function renderPlatos(div){

  function renderPlato(plato){
    // Titulo
    const titulo = document.createElement('h2')
    titulo.textContent = plato.titulo

    // Descripcion
    const descripcion = document.createElement('p')
    descripcion.textContent = plato.descripcion

    // Ingredientes
    const cabeceraIngredientes = document.createElement('p')
    cabeceraIngredientes.textContent = "Ingredientes:"

    const ingredientes = document.createElement('ul')
    plato.ingredientes.forEach(i => {
      const ingrediente = document.createElement('li')
      ingrediente.textContent = i
      ingredientes.appendChild(ingrediente)
    })

    // Imagen
    const imagen = document.createElement('img')
    imagen.src = plato.imagen

    // Contenedor
    const base = document.createElement('div')
    base.className = 'plato'
    base.appendChild(titulo)
    base.appendChild(descripcion)
    base.appendChild(cabeceraIngredientes)
    base.appendChild(ingredientes)
    base.appendChild(imagen)

    return base
  }

  div.innerHTML = ""
  div.className = "platos"
  platos.forEach(c => div.appendChild(renderPlato(c)))
}