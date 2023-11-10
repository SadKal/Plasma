import Inicio from '$inicio/Inicio.svelte';
import GamePage from '$inicio/game_page/GamePage.svelte';
import GenrePage from '$inicio/genres/GenrePage.svelte';
import Library from '$library/Library.svelte';
import Perfil from '$perfil/Perfil.svelte';
import { writable } from 'svelte/store';


const pages = {
    'Inicio': Inicio,
    'Biblioteca': Library,
    'Perfil': Perfil,
    'Shop': GamePage,
    'Genres': GenrePage,
}

const active = 'Inicio';

const pagesStore = writable({pages, active});


export default pagesStore;