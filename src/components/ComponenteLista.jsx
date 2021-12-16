import React from 'react';

import './componente-lista.css';

export default function ComponenteLista(props) {
  let claseLista = props.;
  if (props.done) {
    claseLista = 'el-checked';
  } else {
    claseLista = 'el-unchecked';
  }

  return (
    <li className={claseLista}>
      <input type="checkbox" />
      {props.texto}
    </li>
  );
}