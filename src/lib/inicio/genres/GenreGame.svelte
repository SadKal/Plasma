<script>
    import { onMount, onDestroy } from "svelte";
    export let game;

    let genreGame;

</script>

<div bind:this={genreGame} class="genre-game clearfix">
    <div class="genre-game__img--container">
        <img class="genre-game__img" src={game.image}/>
    </div>

    <div class="genre-game__name">
        {game.name}
    </div>
    <div class="genre-game__price">
        {game.price}
    </div>
</div>

<style lang="scss">
    .clearfix::after {
        content: ""; 
        clear: both;
        display: block;
    } 
    .genre-game{
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        height: 15rem;
        box-sizing: border-box;
        padding: .5rem;
        font-family: 'Montserrat';
        font-weight: bolder;
        font-size: 1.2rem;
        background-color: rgba(0,74,64,.5);
        color: var(--text-color);
        clip-path: polygon(2% 0, 100% 0%, 98% 100%, 0% 100%);
        
        transition: all .3s ease-in-out;
        &:hover{
            background-color: rgb(0,74,64);
            scale: 1.1;
            cursor: pointer;
        }

        &__img{
            height: 80%;
            width: 100%;
            object-fit: cover;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            

            &--container{
                height: 100%;
                width: 25%;
                margin: 0 1.5rem;
                float: left;   
                clip-path: polygon(7% 0, 100% 0%, 93% 100%, 0% 100%);
            }
        }

        &__name{
            font-size: 1.7rem;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            float: left;
        }
        &__price{
            font-size: 1.7rem;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            float: right;
            margin-right: 5rem;
        }
    }
</style>