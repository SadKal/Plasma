<body>
    <div class="novedades">
        <div class="novedades__title">
            Novedades
        </div>
        <div class="novedades__subtitle">
            (semana del 02/09 al 09/09)
        </div>
    </div>
    <div class="slideshow image">
        <div class="slideshow__slide fade">
            <img src="src/assets/games/hollow.png" alt="img1"/>
        </div>
        <div class="slideshow__slide fade">
            <img src="src/assets/games/persona.png" alt="img2"/>
        </div>
        <div class="slideshow__slide fade">
            <img src="src/assets/games/outer.png" alt="img3"/>
        </div>
        
        <a class="previous">Previous</a>
        <a class="next">Next</a>

    </div>
</body>

<style lang="scss">
    @import "../../sass/abstracts/variables";

    .novedades{
        margin-top: 12rem;
        width: 100%;
        text-align: center;
        position: absolute;
        font-family: 'Montserrat';
        z-index: 2;
    
        &__title{
            color: $text-color;
            font-size: 100px;
            letter-spacing: .8rem;
            font-weight: bolder;
        }
        &__subtitle{
            margin-top: .7rem;
            letter-spacing: .1rem;
            color: $subtitle-text-color;
            font-size: 20px;
        }
    }
    .image{
        width: 100%;
    }
    .slideshow{
        box-sizing: border-box;
        max-width: 100%;
        position: relative;
        margin: auto;

        &__slide{
            display: none;
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
    .fade {
        animation-name: fade;
        animation-duration: 1.5s;
        }

    @keyframes fade {
        from {opacity: .4}
        to {opacity: 1}
    }
</style>