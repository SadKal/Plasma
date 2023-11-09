import { writable } from "svelte/store";

const activeGenre = undefined; 


const genresStore = writable({ activeGenre });

export default genresStore;