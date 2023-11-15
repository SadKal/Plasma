import { writable } from "svelte/store";
import gamesData from "$data/games.json";

let recentlyPlayed = [];
let gamesInLibrary = [];

function fetchRecents(min, max) {
	let i = 0;
	let randGame;
	while (i < 5) {
		randGame = Math.floor(Math.random() * (max - min + 1) + min);
		if (!recentlyPlayed.includes(gamesData.data[randGame])) {
			recentlyPlayed.push(gamesData.data[randGame]);
			i++;
		}
	}
	return recentlyPlayed;
}

function fetchOwned(min, max) {
 	let aux;
	aux = gamesInLibrary.concat(recentlyPlayed);
    gamesInLibrary = aux; 
    let limit = Math.min(gamesInLibrary.length, gamesData.data.length) 
	let i = 0;
    let randGame;
	while (i < limit){
		randGame = Math.floor(Math.random() * (max - min + 1) + min);
		if (!gamesInLibrary.includes(gamesData.data[randGame])) {
			gamesInLibrary.push(gamesData.data[randGame]);
			i++;
		}
        gamesInLibrary[i].adqDate = Math.floor(
            Math.random() * (Date.now() - Date.parse("01 Jan 2021 00:00:00 GMT")) +
            Date.parse("01 Jan 2021 00:00:00 GMT")
        );
        
        gamesInLibrary[i].hrsPlayed = Math.random() * (350 - 0);
	}
	return gamesInLibrary;
}


const libraryStore = writable({
	recentlyPlayed,
	gamesInLibrary,
	fetchRecents,
    fetchOwned
});

export default libraryStore;
