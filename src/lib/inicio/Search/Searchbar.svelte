<script>
    import { onDestroy, onMount } from "svelte";
    import games from '../../../data/games.json';
    import SearchResult from "./SearchResult.svelte";

    let searchValue = '';
    let searchbar;
    let scrollY = window.scrollY;
    let gameData=games.data;
    let searchResult = [];
    //Ordeno alfabeticamente, para resultado mas bonito
    gameData.sort((a,b) => a.name.localeCompare(b.name));
    

    function searchGames(game){
        searchResult=[];
        game=game.trim();
        
        //Preparo 2 arrays, uno para prioritizar los resultados que empiezan por lo buscado y otro para los que lo contienen
        let startsWith = [];
        let otherGames = [];

        gameData.forEach(element => {
            if (element.name.toLowerCase().startsWith(game.toLowerCase()) && game !== '') {
                startsWith.push(element);
            } else if (element.name.toLowerCase().includes(game.toLowerCase()) && game !== '') {
                otherGames.push(element);
            }
        });
        searchResult = [...startsWith, ...otherGames]; 
    };
    
    $: {
        if (searchValue) {
            searchGames(searchValue);
        } else {
            searchResult = [];
        }
    }

    function scrollToSearch() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    function focusSearch(){
        scrollY = window.scrollY;   
        if (scrollY===0){
            searchbar.focus();
        }
    };
    function clearFocus(){
        searchValue='';
        searchResult = [];
    };
    
   

    onMount(() => {
        window.addEventListener('scroll', focusSearch);

    });
    onDestroy(() => {
        window.removeEventListener('scroll', focusSearch);
    });

</script>

<div class="search__link" on:click={scrollToSearch} on:click={focusSearch}>
    <object data="src/assets/svgs/magnifier.svg" type="image/svg+xml" width="70%" height="auto"/>
</div>

<div class="search">
    <input bind:this={searchbar} class="search__bar" name="search" type="search" placeholder="Escribe para buscar..." on:change={clearFocus} bind:value={searchValue}/>
    <div class="search__results">
        {#each searchResult as game}
            <SearchResult {game}/>
        {/each}
    </div>
    
</div>

<style lang="scss">
    object{
        pointer-events: none;
    }
    .search{
        margin-top: 1.3rem;
        width: 80%;
        height: 5rem;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        z-index: 40;
        max-height: 10vw;

        @media (max-width: 420px) {
            top: 0;
            width: 60%; 
            left: 53%;
        }

        &__link{
            position: fixed;
            margin-top: 1.3rem;
            left: 1.5%;
            width: 4rem;
            cursor: pointer;
            display: block;
            z-index: 3;
            opacity: 50%;

            @media (max-width: 420px) {
                top: 0;
                left: 85%;
            }
            transition: all .3s;
            &:hover{
                scale: 130%;
                opacity: 100%;   
            }
        }
        &__bar{
            width: 100%;
            padding: .5rem;
            background: var(--searchbar-background-color);
            border-radius: .3rem .3rem 0 0;
            border: none;
            outline: none;
            font-family: 'Montserrat';
            font-size: 20px;
            font-style: italic;
            color: var(--text-color);
            transition: all .3s;
            &:focus, &:hover{
                padding: .7rem;
                background: var(--searchbar-hover-background-color);
            }
            
            @media (max-width: 420px) {
                background-color: var(--search-mobile-color);
                &:focus, &:hover{
                    background: var(--search-mobile-focus-color);
                }
            }
  
        }
        &__results{
            max-height: 400px;
            overflow-y: scroll;
        }
    }
</style>