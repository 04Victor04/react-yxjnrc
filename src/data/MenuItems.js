import { Home } from '../components/Home';
import { PaginaListas } from '../components/PaginaListas';
import { Perfil } from '../components/Perfil';
import  Coches  from '../components/Coches';
import  Playeras  from '../components/Playeras';
export const MenuItems = [
  {
    id: 1,
    path: '/',
    title: 'Home',
    component: Home,
  },
  {
    id: 2,
    path: '/listas',
    title: 'Listas de tareas',
    component: PaginaListas,
  },
  {
    id: 3,
    path: '/perfil',
    title: 'Perfil',
    component: Perfil,
  },{
    id: 4,
    path: '/coches',
    title: 'Coches',
    component: Coches,
  },{
    id: 5,
    path: '/playeras',
    title: 'Playeras',
    component: Playeras,
  },
];

/*
  path
  id
  title
  component
*/