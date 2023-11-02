<script>
    //Debo añadir ts-nocheck porque si no vscode da error
    //@ts-nocheck
    import { onMount } from "svelte";
    import games from '../../../data/games.json';
    import SlideshowImage from "./SlideshowImage.svelte";

    let images = [];
    let randomIndex;
    let randomObject; 
    let i=0;
    
    //Sacara 10 juegos al azar para mostrar en novedades
    while(i<10){
        randomIndex = Math.floor(Math.random() * games.data.length);
        randomObject = games.data[randomIndex];
        if(!images.includes(randomObject.image)){
            images.push(randomObject.image);
            i++;
        }
    }

    //Preparo índices para las imagenes
    let slideIndex = 1;
    let rightIndex = 2;
    let leftIndex = 0;
    //Esta bindeado en el html, esta variable contiene el componente de "slideshow"
    let slideshow;
    //Variables para deslizar, necesito guardar inicio y final para calcular cuanto se ha deslizado y poder poner un minimo
    let startSwipe, endSwipe;
    let isSwiping = false;

    //Defino los valores donde guardare los src
    let srcLeft = images[leftIndex];
    let srcCenter= images[slideIndex];
    let srcRight= images[rightIndex];

    let cache=[];
   
    //Registra el inicio del deslizamiento
    function swipeStart(event){
        startSwipe=event.touches[0].clientX;
        isSwiping=true;
    }
    //Registra el final del deslizamiento
    function swipeEnd(event) {
        if (isSwiping){
            endSwipe = event.touches[0].clientX;
        }            
    }
    //Ejecuta segun el deslizamiento
    function swipeAction() {
        if (isSwiping){
            isSwiping = false;
            //Calculo cuanto ha deslizado y comparo con un minimo, para que no registre un toque como deslizamiento
            let pxMoved = endSwipe - startSwipe;
            const minDistance = 50; 
            if (Math.abs(pxMoved) > minDistance) {
                if (pxMoved < 0) {
                    //Deslizar IZDA
                    showSlides(1);
                } else {
                    //Deslizar DCHA
                    showSlides(-1);
                }
            }
        }
    }   
    function showSlides(n) {
        /*Aqui debemos comprobar 2 cosas:
            Primero: si deslizamos hacia derecha o izquierda(n=1 o n=-1)
            Segundo: si nos salimos del array. En este caso recolocamos el indice*/
        if(n>0){
            slideIndex = (images[slideIndex+1]==null) ? 0 : slideIndex+1;
            leftIndex = (images[leftIndex+1]==null) ? 0 : leftIndex+1;
            rightIndex = (images[rightIndex+1]==null) ? 0 : rightIndex+1;
        }
        else if (n<0){
            slideIndex = (images[slideIndex-1]==null) ? images.length-1 : slideIndex-1;
            leftIndex = (images[leftIndex-1]==null) ? images.length-1 : leftIndex-1;
            rightIndex = (images[rightIndex-1]==null) ? images.length-1 : rightIndex-1; 
        }
        srcLeft=images[leftIndex];
        srcCenter=images[slideIndex];
        srcRight=images[rightIndex];

        console.log(cache);
    }

    
    /*onMount(exclusivo de Svelte) espera a que cargue el DOM para ejecutar lo de dentro*/
    onMount(() => {
        showSlides(0);
    });
    
</script>

<div bind:this={slideshow} class="slideshow clearfix"  on:touchstart={swipeStart} on:touchmove={swipeEnd} on:touchend={swipeAction}>

    <div class="slideshow__slide">
        <a on:click={() => showSlides(-1)}>
            <SlideshowImage src={srcLeft} positionClass="--left" alt="img1" bind:cache={cache}/>
        </a> 
    </div>
    <div class="slideshow__slide">
        <SlideshowImage src={srcCenter} positionClass="--center" alt="img2" bind:cache={cache}/>
    </div>
    <div class="slideshow__slide">
        <a on:click={() => showSlides(1)}>
            <SlideshowImage src={srcRight} positionClass="--right" alt="img3" bind:cache={cache}/>
        </a>
    </div>
    
</div>
<style lang="scss">

    .clearfix::after {
        content: ""; 
        clear: both;
        display: block;

    } 

    .slideshow{
        width: 100%;
        height: auto;
        margin-top: 5rem;
        @media (min-width: 780px){
            margin-top: 10rem; 
            height: 350px;
        }

        &__slide{
            height: 100%;
            display: inline;
            max-width: calc(100%/3);
            float: left; 
            position: relative;   
            
        }
    }

</style>

