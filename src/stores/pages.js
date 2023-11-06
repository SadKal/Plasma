import Inicio from '$inicio/Inicio.svelte';
import { writable } from 'svelte/store';


const pages = {
    'Inicio': Inicio,
    'Biblioteca': undefined,
    'Perfil': undefined
}

const active = 'Inicio';

const pagesStore = writable({pages, active});


export default pagesStore;