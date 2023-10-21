<script>
    //Debo añadir ts-nocheck porque si no vscode da error
    //@ts-nocheck
    
    var images=[
        "src/assets/games/hollow.png",
        "src/assets/games/persona.png",
        "src/assets/games/outer.png"
    ]

    let slideIndex = 1;
    let rightIndex = 2;
    let leftIndex = 0;

    function showSlides(n) {
        let currentImage = document.querySelector(".slideshow__img.center");

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
        let slides = document.querySelectorAll(".slideshow__img");

        slides[0].src = images[leftIndex];
        slides[0].style.opacity = "50%"

        slides[1].src = images[slideIndex];
        if(window.matchMedia("min-width: 780px")){
            slides[1].style.scale = "160%";
        }else{
            slides[1].style.scale = "200%";
            document.style.backgroundColor = red;
        }
        slides[1].style.zIndex = "2";
        
        
        slides[2].src = images[rightIndex];
        slides[2].style.opacity = "50%"
    }
    
    /*En este caso, addEventListener hara que el codigo se ejecute solo cuando el evento de "DOMContentLoaded" se haya disparado
    Este evento se dispara al cargarse todo el HTML, lo usamos porque si no el "showSlides(slideIndex)" no funcionaria, ya que busca 
    obtener todos los elementos con esa clase pero al no haber cargado el HTML no retorna nada*/
    document.addEventListener('DOMContentLoaded', function() {
        showSlides(slideIndex);   
    });
</script>

<div class="slideshow clearfix">

    <div class="slideshow__slide">
        <a class="previous" on:click={() => showSlides(-1)}>
            <img class="slideshow__img left" src="src/assets/games/hollow.png" alt="img1"/>
        </a> 
    </div>
    <div class="slideshow__slide">
        <img class="slideshow__img center" src="src/assets/games/persona.png" alt="img2"/>
    </div>
    <div class="slideshow__slide">
        <a class="next" on:click={() => showSlides(1)}>
            <img class="slideshow__img right" src="src/assets/games/outer.png" alt="img3"/>
        </a>
    </div>
</div>

<style lang="scss">
    @import "../../sass/abstracts/variables";
    @import "../../sass/abstracts/animations";

    .clearfix::after {
        content: ""; 
        clear: both;
        display: block;
    } 
    .slideshow{
        max-width: 100%;
        margin: auto;
        position: relative;
        margin-top: 5rem;
        @media (min-width: 780px){
            margin-top: 10rem; 
        }
        

        &__slide{
            display: inline;
            max-width: calc(100%/3);
            float: left;    
            position: relative;
        }

        &__img{
            max-width: 100%;
            scale: 140%;
            position: relative;
        }
    }

    .left{
        clip-path: polygon(0 0, 100% 0%, 95% 100%, 0% 100%);
        animation-name: side_images;
        animation-duration: $seconds_fadein;
        animation-timing-function: ease-in;
    }
    .center{                
        clip-path: polygon(5% 0, 100% 0%, 95% 100%, 0% 100%);
        animation-name: fadein;
        animation-duration: $seconds_fadein;
        animation-timing-function: ease-in;
    }  
    .right{
        clip-path: polygon(5% 0, 100% 0%, 100% 100%, 0% 100%);
        animation-name: side_images;
        animation-duration: $seconds_fadein;
        animation-timing-function: ease-in;
    }
    
    .previous, .next {
        cursor: pointer;
    }
</style>

