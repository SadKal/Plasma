import { writable } from "svelte/store";
import libraryStore from "./library";

const gamesInCart = [];

const cartActive = false;
let cartTotalCalc=0;

const cartStore = writable({gamesInCart, cartActive, cartTotal: 0});

function addGameToCart(game){
    cartStore.update( (cart) => {
        if (!cart.gamesInCart.includes(game)){
            //Añado el juego al principio de la lista
            cart.gamesInCart.unshift(game);
            //Actualizo el precio total
            cartTotalCalc += parseInt(game.price);
        }
        return {...cart, cartTotal: cartTotalCalc};
    });
};

function removeGameFromCart(game){
    cartStore.update( (cart) => {
        if(cart.gamesInCart.includes(game)){
            cart.gamesInCart = cart.gamesInCart.filter((cartGame) => cartGame!=game);
            cartTotalCalc -= parseInt(game.price);
        }
        return {...cart, cartTotal: cartTotalCalc};
    });
};

function buyGames(){
    libraryStore.update( (library) => {
        gamesInCart.forEach(game => {
            if(!library.gamesInLibrary.includes(game)){
                library.gamesInLibrary.push(game);
            }
            removeGameFromCart(game);
        });
        
        return library;
    })
}


export default {...cartStore, addGameToCart, removeGameFromCart, buyGames};