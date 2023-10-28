<script>
    //Debo añadir ts-nocheck porque si no vscode da error
    //@ts-nocheck
    import { onMount } from "svelte";
    import games from '../../data/games.json';


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

    
    
  

    //Marco el tamaño para la mediaQuery posterior para visualizar mejor en movil
    let mediaQuerySize = "(max-width: 420px)";
    //Preparo índices para las imagenes
    let slideIndex = 1;
    let rightIndex = 2;
    let leftIndex = 0;
    //Esta bindeado en el html, esta variable contiene el componente de "slideshow"
    let slideshow;
    //Variables para deslizar, necesito guardar inicio y final para calcular cuanto se ha deslizado y poder poner un minimo
    let startSwipe, endSwipe;
    let isSwiping = false;

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
        else{
            slideIndex = (images[slideIndex-1]==null) ? images.length-1 : slideIndex-1;
            leftIndex = (images[leftIndex-1]==null) ? images.length-1 : leftIndex-1;
            rightIndex = (images[rightIndex-1]==null) ? images.length-1 : rightIndex-1; 
        }
        let slides = slideshow.querySelectorAll(".slideshow__img");

        slides[0].src = images[leftIndex]
        
        slides[1].src = images[slideIndex];
        slides[1].style.zIndex = 2;
        
        slides[2].src = images[rightIndex];
        
        //Me encargo de pantallas pequeñas
        if(window.matchMedia(mediaQuerySize).matches){
            slides[1].style.scale = "230%"; 
            slides[0].style.opacity = "50%"
            slides[2].style.opacity = "50%"
        }
        else{
            slides[1].style.scale = "140%"; 
            slides[0].style.opacity = "40%"
            slides[2].style.opacity = "40%"
        }
        
    }
    
    /*onMount(exclusivo de Svelte) espera a que cargue el DOM para ejecutar lo de dentro*/
    onMount(() => {
        showSlides(0);
        console.log(randomObject);
    });
</script>

<div bind:this={slideshow} class="slideshow clearfix"  on:touchstart={swipeStart} on:touchmove={swipeEnd} on:touchend={swipeAction}>

    <div class="slideshow__slide">
        <a on:click={() => showSlides(-1)}>
            <img  class="slideshow__img slideshow__img--left" src={randomObject.image} alt="img1"/>
        </a> 
    </div>
    <div class="slideshow__slide">
        <img class="slideshow__img slideshow__img--center" src={randomObject.image} alt="img2"/>
    </div>
    <div class="slideshow__slide">
        <a on:click={() => showSlides(1)}>
            <img class="slideshow__img slideshow__img--right" src={randomObject.image} alt="img3"/>
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


        &__img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: relative;

            &--left, &--right{
                //Numeros tan especificos para que al cargar la animación no hagan overlapping en opacidades bajas
                animation-name: side_images;
                animation-duration: var(--seconds-fadein);
                animation-timing-function: ease-in;
                cursor: pointer;
            }
            &--center{                
                clip-path: polygon(5% 0, 100% 0%, 95% 100%, 0% 100%);
                animation-name: fadein;
                animation-duration: var(--seconds-fadein);
                animation-timing-function: ease-in;
            }  
        }
    }

</style>

