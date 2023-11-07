import { writable } from "svelte/store";


const currentShopGame = undefined;

const shopGameStore = writable({currentShopGame});

export default shopGameStore;