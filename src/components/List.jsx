import React from 'react';
import { Etiqueta1 } from './Etiqueta1';
export function List(props) {
  
  return (<div>
    {props.titulo} - {props.nombre}
    <ul>{elementos}</ul>
  </div>);
}
