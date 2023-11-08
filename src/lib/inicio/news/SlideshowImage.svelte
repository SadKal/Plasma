<script>
    import { onDestroy, onMount } from "svelte";
    import cacheStore from "$stores/cache";

    export let src;
    export let alt;
    export let position;
    export let index;

    let secondClass = 'slideshow__img' + position; 
    let nameClass = 'slideshow__title' + position;
    let animationClass = secondClass + '--animation';

    let placeholderImage= "src/assets/loading.gif";
    let img;

    //Creo una imagen "falsa" en la que cargaré el link de fondo
    const tempImg = new Image();

    function onImgLoaded() {
        //Asigno a la imagen definitiva el link ya cargado
        img.src = tempImg.src;
    
        //Si la imagen no está cacheada, la cacheo, esto es para que las imagenes ya cargadas no tengan que volver a tener placeholder
        if (!$cacheStore.cache.includes(src)){
            $cacheStore.cache.push(src);
        }     
    } 

    //Funcion encargada de la carga de imagenes
    function loadImg(source) {
        tempImg.src = source;
        //Creo un listener, para que cuando cargue la imagen lance la funcion encargada de asignar
        tempImg.addEventListener('load', onImgLoaded);
    }

    onMount(() => {
        //Compruebo si la imagen ya esta cargada
        if($cacheStore.cache.includes(src)){
            img.src=src;
            img.classList.remove(animationClass);
        }
        else{
            loadImg(src);
        } 
        
    }); 
    onDestroy(() => {
        tempImg.removeEventListener('load', onImgLoaded);  
    });

</script>

<a class="slideshow__link" href="/" on:click|preventDefault={() => $cacheStore.showSlides(index-1)}>
    <img bind:this={img} src={placeholderImage} alt={alt} class="slideshow__img {secondClass} {animationClass}"/>
    <div class="slideshow__title--container {nameClass}">
        <div class="slideshow__title {nameClass}">{alt}</div>
    </div>
</a> 

<style lang="scss">
    .slideshow{
        &__img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: relative;
            z-index: 0;

            transition: all .3s;
            &:hover{
                box-shadow: 0 0 20px 10px white;
            }
            &--side{
                cursor: pointer;
                opacity: 50%;
                @media (max-width: 420px){
                    opacity: 40%;
                }
                &--animation{
                    animation: side_images var(--seconds-fadein) ease-in;  
                }
               
            }
            &--center{           
                clip-path: polygon(5% 0, 100% 0%, 95% 100%, 0% 100%);
                z-index: 2; 
                scale: 140%;
                &--animation{
                    animation: fadein var(--seconds-fadein) ease-in;
                }
                @media (max-width: 420px){
                    scale: 230%;
                }
                &:hover{
                    filter: brightness(.7);
                }
            }
        }

        &__title{
            box-sizing: border-box;
            position: relative;
            color: var(--text-color);
            font-family: 'Montserrat';
            font-size: 2rem;
            font-weight: bolder;
            z-index: 10;
            padding: 1rem;
            text-align: center;
            user-select: none;
            cursor: pointer;

            @media (max-width: 1300px) {
                font-size: 1.5rem;
            }
            @media (max-width: 800px) {
                font-size: 1rem;
            }
            @media (max-width: 600px) {
                display: none;
            }
            &--side{
                bottom: 0;
                z-index: 0;
                opacity: 85%;
                background-color: var(--game-title-background-color);
            }
            &--center{
                clip-path: polygon(5% 0, 100% 0%, 95% 100%, 0% 100%);
                z-index: 10;
                background-color: var(--game-title-background-color-center);
                bottom: -20%;
                color: var(--game-title-color-center);
                @media (max-width: 800px) {
                    bottom: -17%;
                }   
            }


            &--container{
                width: 100%;
                position: absolute;
            }
        }
    }

</style>