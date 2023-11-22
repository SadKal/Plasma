import Homepage from '$homepage/Homepage.svelte';
import GamePage from '$homepage/game_page/GamePageHeader.svelte';
import GenrePage from '$homepage/genres/genre_page/GenrePage.svelte';
import Library from '$library/Library.svelte';
import { writable } from 'svelte/store';
import Profile from '$profile/Profile.svelte';

const pages = {
    'Inicio': Homepage,
    'Biblioteca': Library,
    'Perfil': Profile,
    'Shop': GamePage,
    'Genres': GenrePage
};

const active = 'Inicio';

const pagesStore = writable({pages, active});


export default pagesStore;