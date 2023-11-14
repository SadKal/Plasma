import { writable } from "svelte/store";

function addGameToCart(game){
    cartStore.update( (cart) => {
        if (!cart.gamesInCart.includes(game)){
            cart.gamesInCart.push(game);
        }
        return cart;
    }
    )
}

const gamesInCart = [];

const cartActive = false;

const cartStore = writable({gamesInCart, cartActive, addGameToCart});


export default cartStore;