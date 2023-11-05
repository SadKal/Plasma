import { writable } from 'svelte/store';

const active = 'Inicio';
const pagesStore = writable({active});

export default pagesStore;