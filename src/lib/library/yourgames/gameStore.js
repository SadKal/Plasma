import { writable } from "svelte/store";

const hrsPlayed = 0;

const gameStore = writable({
    hrsPlayed
});

export default gameStore;

/*

    iqdb.com <---- de donde vamos a sacar la info
    Cosas que necesitariamos sacar 100% (endpoints, prob):
        - cover 
        - artworks
        - genres
        - name
        
    Cosas que igual podríamos necesitar, not sure but might be aite:
        - platforms
        - release_dates
        - rating
        - franchise
        - company (devuelve array de IDs de juegos, los juegos como tal no tienen ningun field de este tipo, wat do?)
        -  




*/
