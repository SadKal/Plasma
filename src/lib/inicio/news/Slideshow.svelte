<script>
    //Debo añadir ts-nocheck porque si no vscode da error
    //@ts-nocheck
    import { onMount } from "svelte";
    import games from '$data/games.json';
    import SlideshowImage from "$news/SlideshowImage.svelte";

    let gamesData = [];
    let randomIndex;
    let randomObject; 
    let i=0;
    
    //Sacara 10 juegos al azar para mostrar en novedades
    while(i<10){
        randomIndex = Math.floor(Math.random() * games.data.length);
        randomObject = games.data[randomIndex];
        if(!gamesData.includes(randomObject)){
            gamesData.push(randomObject);
            i++;
        }
    }

    //Preparo índices para las imagenes
    let slideIndex = 1;
    let rightIndex = 2;
    let leftIndex = 0;
    //Variables para deslizar, necesito guardar inicio y final para calcular cuanto se ha deslizado y poder poner un minimo
    let startSwipe, endSwipe;
    let isSwiping = false;

    //Defino los valores donde guardare los src
    let srcLeft = gamesData[leftIndex].image;
    let srcCenter= gamesData[slideIndex].image;
    let srcRight= gamesData[rightIndex].image;
   
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
            slideIndex = (gamesData[slideIndex+1]==null) ? 0 : slideIndex+1;
            leftIndex = (gamesData[leftIndex+1]==null) ? 0 : leftIndex+1;
            rightIndex = (gamesData[rightIndex+1]==null) ? 0 : rightIndex+1;
        }
        else if (n<0){
            slideIndex = (gamesData[slideIndex-1]==null) ? gamesData.length-1 : slideIndex-1;
            leftIndex = (gamesData[leftIndex-1]==null) ? gamesData.length-1 : leftIndex-1;
            rightIndex = (gamesData[rightIndex-1]==null) ? gamesData.length-1 : rightIndex-1; 
        }
        srcLeft=gamesData[leftIndex].image;
        srcCenter=gamesData[slideIndex].image;
        srcRight=gamesData[rightIndex].image;

    }     
</script>

<div class="slideshow clearfix"  on:touchstart={swipeStart} on:touchmove={swipeEnd} on:touchend={swipeAction}>

    <div class="slideshow__slide">
        <a on:click={() => showSlides(-1)}>
            <SlideshowImage src={srcLeft} positionClass="--left" alt={gamesData[leftIndex].name}/>
        </a> 
    </div>
    <div class="slideshow__slide">
        <SlideshowImage src={srcCenter} positionClass="--center" alt={gamesData[slideIndex].name}/>
    </div>
    <div class="slideshow__slide">
        <a on:click={() => showSlides(1)}>
            <SlideshowImage src={srcRight} positionClass="--right" alt={gamesData[rightIndex].name}/>
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
        margin-top: 5rem; 
        transition: all .2s;
        @media (min-width: 780px){
            margin-top: 10rem; 
            height: 220px;
        }
        @media (min-width: 1185px){
            margin-top: 10rem; 
            height: 250px;
        }
        @media (min-width: 1330px){
            width: 100%;
            height: 400px;
            
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

