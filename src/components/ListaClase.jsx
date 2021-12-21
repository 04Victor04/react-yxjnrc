import React from 'react';

class ListaClase extends React.Component {
  constructor(props){
    super(props);
    this.icono= props.icono;
    this.titulo=props.titulo;
  }
  render() {
    return(
    <div>
      {this.titulo} - {this.icono}
      <li>
          <input
            ref={valorTextInput}
            type="text"
            placeholder="Introduce una tarea"
          />
          <br />
          <select ref={valorPrioritySelect}>
            <option value="alta">Prioridad Alta</option>
            <option value="media">Prioridad Media</option>
            <option value="baja">Prioridad Baja</option>
          </select>
          <button onClick={funcion}>Añadir</button>
        </li>
    </div>
    
    );
  }
}
export default ListaClase;
ListaClase.defaultProps = {
  prioridad: 'baja',
  done: false
};