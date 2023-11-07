import Inicio from '$inicio/Inicio.svelte';
import GamePage from '$inicio/game_page/GamePage.svelte';
import { writable } from 'svelte/store';


const pages = {
    'Inicio': Inicio,
    'Biblioteca': undefined,
    'Perfil': undefined,
    'Shop': GamePage,
}

const active = 'Inicio';

const pagesStore = writable({pages, active});


export default pagesStore;