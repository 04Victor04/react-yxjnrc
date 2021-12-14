import React from 'react';
import {List} from './List';

export function Etiqueta1(props) {
  return <div>
   {props.titulo} - {props.nombre}
    <ul>
      <List texto="Elemento1"/>
      <List texto="Elemento2"/>
      <List texto="Elemento3"/>
    </ul>
  </div>;
}
