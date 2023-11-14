<script>
    import genresStore from "$stores/genres";
    export let game;

    let genreGame;
</script>

<div bind:this={genreGame} class="genre-game clearfix">
    <div class="genre-game__img--container">
        <img class="genre-game__img" src={game.image}/>
    </div>

    <div class="genre-game__name">
        {game.name}
        <div class="genre-game__genres">
            {#each game.genres as genre, index}
                <span>{genre}</span>{index === game.genres.length - 1 ? '' : ', '}
            {/each}
        </div>
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
        margin: .3rem auto;
        width: 80%;
        height: 15rem;
        box-sizing: border-box;
        padding: 0rem;

        font-weight: bolder;
        font-size: 1.2rem;
        background-color: rgba(0,74,64,.5);
        color: var(--text-color);
        clip-path: polygon(2% 0, 100% 0%, 98% 100%, 0% 100%);
        margin-top: 0rem;
        
        transition: all .3s ease-in-out;
        &:hover{
            background-color: rgb(0,74,64);
            transform: translateX(-10%);
            z-index: 5;
            cursor: pointer;
        }

        &__img{
            height: 100%;
            width: 100%;
            object-fit: cover;
            clip-path: polygon(7% 0, 100% 0%, 93% 100%, 0% 100%);

            &--container{
                height: 100%;
                width: 30%;
                margin-right: 1.5rem;
                float: left;     
            }
        }

        &__name{
            margin-left: 3rem;
            margin-top: 1rem;
            font-size: 2.5rem;
            position: relative;
            top: 40%;
            transform: translateY(-50%);
            float: left;
            font-style: italic;
            color: var(--selected-text-color);
        }
        &__genres{
            position: relative;
            margin-top: 3rem;
            font-size: 1.5rem;
            left: -10%;
            color: var(--text-color);
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