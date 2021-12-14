import React from 'react';
import './style.css';
import {Etiqueta1} from './components/Etiqueta1';
import {List} from './components/List';


export default function App() {
  return (
    <div>
      <h1>PrimerComponente</h1>
      <Etiqueta1 titulo="Comp1" nombre="pepe" icono=":("/>
      <Etiqueta1 titulo="Comp2" nombre=":)" icono=":)"/>
      <Etiqueta1 titulo="Comp3" nombre=":(" icono=":("/>
      <Etiqueta1 titulo="Comp3" nombre="1"icono=":)"/>
      <h2>SegundoComponente</h2>
      <List/>
    </div>
  );
}
