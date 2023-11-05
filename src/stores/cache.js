import { writable } from 'svelte/store';

const cache=[];
const cacheStore = writable({cache});

export default cacheStore;