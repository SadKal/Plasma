<script>
    //Debo añadir ts-nocheck porque si no vscode da error
    //@ts-nocheck
    
    let slideIndex = 1;
    function plusSlides(n) {      
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let i;
        //Obtenemos todos los divs del slideshow
        let slides = document.querySelectorAll(".slideshow__slide");
        //Comprobamos que no se salgan de la longitud del array
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        } 
        //Quitamos la visualizacion de todos y posteriormente mostramos solo el siguiente elemento
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";     
        }  
        slides[slideIndex-1].style.display = "block";
    }
    
/*En este caso, addEventListener hara que el codigo se ejecute solo cuando el evento de "DOMContentLoaded" se haya disparado
    Este evento se dispara al cargarse todo el HTML, lo usamos porque si no el "showSlides(slideIndex)" no funcionaria, ya que busca 
    obtener todos los elementos con esa clase pero al no haber cargado el HTML no retorna nada*/
    document.addEventListener('DOMContentLoaded', function() {
        showSlides(slideIndex);   
    });
</script>

<div class="slideshow">

    <div class="slideshow__slide">
        <img class="slideshow__img" src="src/assets/games/hollow.png" alt="img1"/>
    </div>
    <div class="slideshow__slide">
        <img class="slideshow__img" src="src/assets/games/persona.png" alt="img2"/>
    </div>
    <div class="slideshow__slide">
        <img class="slideshow__img" src="src/assets/games/outer.png" alt="img3"/>
    </div>
    

    <a class="previous" on:click={() => plusSlides(-1)}>&#10094;</a> 
    <a class="next" on:click={() => plusSlides(1)}>&#10095;</a>
    
</div>

<style lang="scss">
    .slideshow{
        max-width: 80%;
        margin: auto;
        position: relative;
        margin-top: 3rem;

        &__slide{
            display: none;
        }

        &__img{
            max-width: 100%;
            //clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
        }
    }
    
    .previous, .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        margin-top: -22px;
        padding: 16px;
        color: white;
        font-weight: bold;
        font-size: 18px;
        transition: 0.6s ease;
        border-radius: 0 3px 3px 0;
        user-select: none;
    }
    .next {
        right: 0;
        border-radius: 3px 0 0 3px;
    }
    .previous:hover, .next:hover {
        background-color: rgba(0,0,0,0.8);
    }   

</style>

