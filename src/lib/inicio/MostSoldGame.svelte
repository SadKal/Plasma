<script>
    let rotationAngle = 0;
    let element;

    function updateRotation(event) {
        var elementCenterX = element.getBoundingClientRect().left + element.offsetWidth / 2;
        rotationAngle = (event.clientX - elementCenterX) / 15;
    }    
</script>


<div 
    bind:this={element}
    role="region" aria-label="Interactive Region"
    on:mousemove={updateRotation}
    on:mouseleave={() => rotationAngle = 0}
    style="transform: perspective(1000px) rotateY({rotationAngle}deg);" class="col_1_of_3">
        <img class="most_sold__image" src="https://upload.wikimedia.org/wikipedia/en/1/12/Baldur%27s_Gate_3_cover_art.jpg" alt="cover"/>
        <div class="most_sold__data">
            <p>Baldurs Gate 3</p>
            <p>Por turnos</p>
        </div>
</div>


<style lang="scss">
    @import "../../sass/abstracts/variables";

    .most_sold{
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
            transform-origin: center center;
            transition: all .1s;
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