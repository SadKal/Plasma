<script>
    import Slideshow from "./Slideshow.svelte";
</script>


    <div class="novedades">
        <div class="novedades__title">
            Novedades
        </div>
        <div class="novedades__subtitle">
            (semana del 02/09 al 09/09)
        </div>
    </div>
    
    

<style lang="scss">
    @import "../../sass/abstracts/variables";
    @import "../../sass/abstracts/animations";

    *{
        animation-name: fadein;
        animation-duration: $seconds_fadein;
        animation-timing-function: ease-in;
    }

    .novedades{
        
        width: 100%;
        text-align: center;
        font-family: 'Montserrat';
        
    
        &__title{
            margin-top: 5rem;
            color: $text-color;
            font-size: 50px;
            letter-spacing: .4rem;
            font-weight: bolder;
            transition: all .5s;
            @media (min-width: 780px){
                color: $text-color;
                font-size: 100px;
                letter-spacing: .8rem;
            }
        }
        &__subtitle{
            margin-top: .3rem;
            letter-spacing: .05rem;
            color: $subtitle-text-color;
            font-size: 10px;
            @media (min-width: 780px){
                margin-top: .7rem;
                letter-spacing: .1rem;
                font-size: 20px;   
            }
        }
    }
</style>