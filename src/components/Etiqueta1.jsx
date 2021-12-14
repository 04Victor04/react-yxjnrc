import React from 'react';
export function Etiqueta1(props) {
  return <div>
   {props.titulo} - {props.nombre}
    <ul>
      <li>Elemento1</li>
      <li>Elemento2</li>
      <li>Elemento3</li>
    </ul>
  </div>;
}
