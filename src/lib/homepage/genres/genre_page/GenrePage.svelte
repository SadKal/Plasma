<script>
    import genresStore from "$stores/genres";
    import games from "$data/games.json";
    import GenreGame from "./GenreGame.svelte";
    import { onMount } from "svelte";

    let gameList = [];
    
    //Por como esta construido, el genero actual siempre estará arriba
    let genreList = [];
    $: genreList = $genresStore.genreList.filter((el) => el!=$genresStore.activeGenre ).sort();

    let selectedOption;

    function loadGames(){
        gameList=[];
        //Por cada juego, si tiene el genero a mostrar, lo añado a la lista
        games.data.forEach(element => {
            element.genres.includes($genresStore.activeGenre) ? gameList.push(element) : '';
        });
    }

    function changeSelection(event){
        selectedOption = event.target.value;
        $genresStore.activeGenre = selectedOption;
        loadGames();
    }

    onMount(() => {
        window.scrollTo(0, 0);
        loadGames();
    });

</script>

<!--Este key es solo para forzar el rerender para la animacion, funciona perfectamente sin el-->
{#key selectedOption}
<div class="genres">    
    <div class="genres__title">
        <div class="genres__title--name">
            <select 
                bind:value={selectedOption}
                on:input={changeSelection}
                class="genres__select">

                <option selected>{$genresStore.activeGenre}</option>
                
                {#each genreList as genreOption}
                    <option>{genreOption}</option>
                {/each} 
            </select>
        </div>
    </div>
   
    <div class="genres__game-list">
        {#each gameList as game}
            <GenreGame {game}/>
        {/each}
    </div>
</div>
{/key}


<style lang="scss">
    option{
        background-color: var(--text-color);
        font-size: 1.5rem;
        padding: 5rem;        
    }

    .genres{
        
        animation: fadein var(--seconds-fadein) ease-in;

        &__select{
            text-align: center;
            background-color: transparent;
            border: none;
            width: 100%;
            font-family: inherit;
            font-size: inherit;
            font-style: italic;
            cursor: pointer;
            color: lightgray;
            &:focus{
                outline: none;
            }
        }

        &__title{
            box-sizing: border-box; 
            position: fixed;
            top: 9%;
            left: 50%;
            transform: translateX(-50%);
            width: 20%;
            
            padding: 1rem 2rem;
            font-weight: bolder;
            background-color: var(--text-color);
            color: var(--game-title-color-center);

            clip-path: polygon(5% 0, 100% 0%, 95% 100%, 0% 100%);
            z-index: 10;

            font-size: 2rem;
        }

        &__game-list{
            margin-top: 6rem;
            padding-bottom: 5rem;
        }
    }
</style> 