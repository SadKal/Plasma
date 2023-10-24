<script>
    import { onMount } from "svelte";

    function scrollOnLoad(n) {
        window.scrollTo(0, n);
    }
    let mediaQuerySize = "(max-width: 420px)";
    
    onMount( ()=> {
        if(window.matchMedia(mediaQuerySize).matches){
            scrollOnLoad(460);
        }   
    });
</script>

<div class="most_sold">
    Más Vendidos
</div>
<div class="most_sold__exhibitor">
    <div class="row clearfix">
        <div class="col_1_of_3">
            <img class="most_sold__image" src="https://upload.wikimedia.org/wikipedia/en/1/12/Baldur%27s_Gate_3_cover_art.jpg" alt="cover"/>
            <div class="most_sold__data">
                <p>Baldurs Gate 3</p>
                <p>Por turnos</p>
            </div>
        </div>
        <div class="col_1_of_3">
            <img class="most_sold__image" src="https://upload.wikimedia.org/wikipedia/en/1/12/Baldur%27s_Gate_3_cover_art.jpg" alt="cover"/>
            <div class="most_sold__data">
                <p>Baldurs Gate 3</p>
                <p>Por turnos</p>
            </div>
        </div>
        <div class="col_1_of_3">
            <img class="most_sold__image" src="https://upload.wikimedia.org/wikipedia/en/1/12/Baldur%27s_Gate_3_cover_art.jpg" alt="cover"/>
            <div class="most_sold__data">
                <p>Baldurs Gate 3</p>
                <p>Por turnos</p>
            </div>
        </div>
    </div>

    <div class="row clearfix">
        <div class="col_1_of_3">
            <img class="most_sold__image" src="https://upload.wikimedia.org/wikipedia/en/1/12/Baldur%27s_Gate_3_cover_art.jpg" alt="cover"/>
            <div class="most_sold__data">
                <p>Baldurs Gate 3</p>
                <p>Por turnos</p>
            </div>
        </div>
        <div class="col_1_of_3">
            <img class="most_sold__image" src="https://upload.wikimedia.org/wikipedia/en/1/12/Baldur%27s_Gate_3_cover_art.jpg" alt="cover"/>
            <div class="most_sold__data">
                <p>Baldurs Gate 3</p>
                <p>Por turnos</p>
            </div>
        </div>
        <div class="col_1_of_3">
            <img class="most_sold__image" src="https://upload.wikimedia.org/wikipedia/en/1/12/Baldur%27s_Gate_3_cover_art.jpg" alt="cover"/>
            <div class="most_sold__data">
                <p>Baldurs Gate 3</p>
                <p>Por turnos</p>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    @import "../../sass/abstracts/variables";
    @import "../../sass/abstracts/animations";
    *{
        animation-name: fadein;
        animation-duration: $seconds-fadein;
        animation-timing-function: ease-in;
    }


    .clearfix::after {
        content: ""; 
        clear: both;
        display: block;

    } 
    .most_sold{
        width: 100%;
        text-align: center;
        font-family: 'Montserrat';
        margin-top: 15rem;
        color: $text-color;
        font-size: 60px;
        font-weight: bolder;
        letter-spacing: .4rem;
        @media (max-width: 420px) {
            font-size: 30px;
        }


        &__image{
            width: 100%;
            height: 80%;
            border-radius: 5%;
            transition: all .4s;

            &:hover{
                box-shadow: 0 0 10px 2px lightgray;
                background-color: lightgray;
                border-radius: 5%;
            }
        }

        &__data{
            box-sizing: border-box;
            background-color: $game-data-bg-color;
            font-size: 16px;
            font-family: 'Montserrat';
            font-weight: bolder;
            width: 100%;
            height: 20%;
            margin-top: .2rem;
            padding: .5rem;
            border-radius: .5rem;
            @media (max-width: 420px) {
                font-size: 12px;
            }
        }
    }

    .most_sold__exhibitor{
        width: 60%;
        margin-top: 4rem;
        height: 1000px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        @media (max-width: 420px) {
            width: 90%;
        }
    }
    .row{
        width: 100%;
        margin-bottom: 10rem;
        &:not(:last-child){
            margin-bottom: 5rem;
        }
        @media (max-width: 420px) {
            &:not(:last-child){
            margin-bottom: 2rem;
        }
        }
    }
    .col_1_of_3{
        width: calc((100% - (2 * $gutter_horizontal)) / 3);
        height: auto;
        float: left;
        transition: all .4s;
        position: relative;

        &:not(:last-child){
            margin-right: $gutter_horizontal;
        }
        &:hover{
            cursor: pointer;
        }

        @media (max-width: 420px) {
            width:60%;
            left: 50%;
            transform: translateX(-50%);
            
            &:not(:last-child){
                margin-bottom: 2rem;
            }
        }
        @media (min-width: 420px) {
            &:hover{
                scale: 110%;
            }
        }
        

    }
</style>