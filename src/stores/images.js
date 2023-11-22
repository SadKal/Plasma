import { writable } from "svelte/store";//Creo un store en el que voy a almacenar las imagenes que me pasen

export const imageStore = writable('src/lib/profile/default.jpg');//Creo un store writable(puedo leer y escribir) con una valor inicial de la imagen por defect.