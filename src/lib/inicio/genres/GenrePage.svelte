<script>
    import genresStore from "$stores/genres";
    import games from "$data/games.json";
    import GenreGame from "./GenreGame.svelte";
    import { onMount } from "svelte";

    let genre = $genresStore.activeGenre;
    let gameList = [];
    games.data.forEach(element => {
        if (element.genres.includes(genre.name)){
            gameList.push(element);
        }
    });

    onMount(() => {
        window.scrollTo(0, 0);
    })
</script>

<div class="genres">
    <div class="genres__title">
        <div class="genres__title--name">
            {genre.name}
        </div>
    </div>

    <div class="genres__game-list">
        {#each gameList as game}
            <GenreGame {game}/>
        {/each}
    </div>

</div>


<style lang="scss">

    .genres__title{
        position: fixed;
        z-index: 5;
        top: 9%;
        left: 50%;
        transform: translateX(-50%);
        width: 20%;
        box-sizing: border-box;
        padding: 1rem 2rem ;
        text-align: center;
        font-family: 'Montserrat';
        font-weight: bolder;
        font-size: 1rem;
        font-style: italic;
        background-color: var(--game-data-bg-color);
        color: var(--game-title-color-center);
        clip-path: polygon(5% 0, 100% 0%, 95% 100%, 0% 100%);
        
        animation: fadein var(--seconds-fadein) ease-in;

        &--name{
            font-size: 2rem;
        }
    }
    .genres__game-list{
        margin-top: 6rem;
        position: relative;
        width: 100%;
        animation: fadein var(--seconds-fadein) ease-in;
    }
</style> 