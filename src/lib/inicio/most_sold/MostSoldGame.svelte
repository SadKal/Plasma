<script>

    export let game;
    let cover=game.cover;
    let name=game.name;
    let genres=game.genres;
    

    //Variables que guardan el angulo con el que rota la imagen y el elemento a rotar
    let rotationAngle = 0;
    let element;

    //event, en este tipo de funciones, representa el elemento al que esta asociada la funcion. En este caso el div del juego
    function updateRotation(event) {
        //Saco el centro del elemento, recibiendo el punto mas a la izquierda y sumandole la mitad de su longitud
        var elementCenterX = element.getBoundingClientRect().left + element.offsetWidth / 2;
        //Calculo la distancia del ratón al centro para rotar más o menos, el divisor permite controlar la sensibilidad
        rotationAngle = (event.clientX - elementCenterX) / 15 ;
        if(window.matchMedia("(min-width: 420px)").matches){
            element.style.transform = 'perspective(1000px) rotateY(' + rotationAngle + 'deg)';
        }
    }    
    function resetRotation(event){
        element.style.transform = 'perspective(1000px) rotateY(0)';
    }
</script>


<div 
    bind:this={element}
    role="region" aria-label="Interactive Region"
    on:mousemove={updateRotation}
    on:mouseleave={resetRotation} 
    class="col_1_of_3">
        <img class="most_sold__image" src={cover} alt="cover"/>
        <div class="most_sold__data">
            <p class="most_sold__name">{name}</p>
            {#each genres as genre, index}
                <span>{genre}{index === genres.length - 1 ? '' : ', '}</span>
            {/each}
        </div>
</div>


<style lang="scss">

    .most_sold{
        &__image{
            width: 100%;
            height: 80%;
            border-radius: 5%;
            transition: all .4s;
            object-fit: cover;

            &:hover{
                box-shadow: 0 0 10px 2px lightgray;
                background-color: lightgray;
                border-radius: 5%;
            }
        }

        &__data{
            box-sizing: border-box;
            background-color: var(--game-data-bg-color);
            font-size: 16px;
            font-family: 'Montserrat';
            font-weight: bold;
            width: 100%;
            height: 20%;
            margin-top: .2rem;
            padding: .5rem;
            border-radius: .5rem;
            text-align: center;
            @media (max-width: 420px) {
                font-size: 12px;
            }
        }
        &__name{
            font-size: 20px;
            font-weight: bolder;
            margin: .5rem 0;
            @media (max-width: 420px) {
                font-size: 15px;
            }
        }
    }


    .col_1_of_3{
        width: calc((100% - (2 * var(--gutter-horizontal))) / 3);
        height: 500px;
        float: left;
        transition: all .4s;
        position: relative;
        
        &:not(:last-child){
            margin-right: var(--gutter-horizontal);
        }
        &:hover{
            cursor: pointer;
            transform-origin: center center;
            transition: all .1s;
            z-index: 5;
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