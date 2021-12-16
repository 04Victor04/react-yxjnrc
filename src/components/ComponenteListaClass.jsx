import React from 'react';

import './componente-lista.css';

class ComponenteListaClase extends React.Component {
  constructor(props) {
    super(props);
    this.done = props.done;
    this.prioridad = props.prioridad;
    this.texto = props.texto;
    setElementClass();
  }

function setElementClass() {
  props.prioridad;
  if (props.done) {
    claseLista += ' el-done';
  } else {
    claseLista += ' el-undone';
  }
}
function setTaskStatus() {
  props.done = !props.done;
}

render(){
  return (
    <li className={claseLista}>
      <input type="checkbox" />
      {props.texto}
    </li>
  );
}

  
}

ComponenteLista.defaultProps = {
  prioridad: 'baja',
};