import Homepage from '$homepage/Homepage.svelte';
import GamePage from '$homepage/game_page/GamePage.svelte';
import GenrePage from '$homepage/genres/genre_page/GenrePage.svelte';
import Library from '$library/Library.svelte';
import Perfil from '$profile/Profile.svelte';
import { writable } from 'svelte/store';


const pages = {
    'Inicio': Homepage,
    'Biblioteca': Library,
    'Perfil': Perfil,
    'Shop': GamePage,
    'Genres': GenrePage
};

const active = 'Inicio';

const pagesStore = writable({pages, active});


export default pagesStore;