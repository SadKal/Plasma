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
    
    <Slideshow/>

<style lang="scss">
    @import "../../sass/abstracts/variables";

    .novedades{
        margin-top: 10rem;
        width: 100%;
        text-align: center;
        font-family: 'Montserrat';
        
    
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
</style>