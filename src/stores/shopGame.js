import { writable } from "svelte/store";
import pagesStore from "./pages";

function openShop(shopGame){
    pagesStore.update((page) => {
        shopGameStore.update((shop) => {
            shop.currentShopGame=shopGame;
            return shop;
        })
        page.active='Shop';
        return page;
    });
} 

const currentShopGame = undefined;

const shopGameStore = writable({currentShopGame});

export default {...shopGameStore, openShop}; 