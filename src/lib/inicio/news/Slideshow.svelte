<script>
    //Debo añadir ts-nocheck porque si no vscode da error
    //@ts-nocheck
    //import games from '$data/games.json';
    import SlideshowImage from "$news/SlideshowImage.svelte";
    import cacheStore from '$stores/cache';

    //Registra el inicio del deslizamiento
    function swipeStart(event){
        startSwipe=event.touches[0].clientX;
        isSwiping=true;
    };

    //Registra el final del deslizamiento
    function swipeEnd(event) {
        if (isSwiping){
            endSwipe = event.touches[0].clientX;
        };            
    };

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
                };
            };
        };
    };

</script>

<div class="slideshow clearfix"  on:touchstart={swipeStart} on:touchmove={swipeEnd} on:touchend={swipeAction}>

    {#each Object.values($cacheStore.slides) as slide, i (slide.source)}
        <div class="slideshow__slide">
            <a on:click={() => $cacheStore.showSlides(i-1)}>
                {#key slide.position}
                    <SlideshowImage src={slide.source} position={slide.position} alt={$cacheStore.gamesData[slide.index].name}/>
                {/key}
            </a> 
        </div>
    {/each}
    
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

