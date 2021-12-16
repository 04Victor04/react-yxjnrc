import React from 'react';

import { Lista } from './components/Lista';

export function App() {
  const elementos1 = [
    { done: false, texto: 'Elemento (Comp 1)', prioridad: 'alta' },
    { done: true, texto: 'Elemento (Comp 2)', prioridad: 'media' },
  ];
  const elementos2 = [
    { done: false, texto: 'Elemento (Comp 3)' },
    { done: true, texto: 'Elemento (Comp 4)' },
    { done: false, texto: 'Elemento (Comp 5)' },
  ];
  const elementos3 = [{ done: false, texto: 'Elemento (Comp 6)' }];

  return (
    <div>
      <h1>Hola (desde componente)</h1>
      <Lista titulo="Tareas casa" icono="♡" elementos={elementos1} />
      <Lista titulo="lista compra" icono="🔥" elementos={elementos2} />
      <Lista titulo="Curso" icono="💔" elementos={elementos3} />
    </div>
  );
}