<script>
    import { onDestroy, onMount } from "svelte";

    let searchValue = '';
    let searchbar;
    let scrolled=false;
    let scrollY = window.scrollY;


    function scrollToSearch() {
        scrolled=true;
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
    
    onMount(() => {
        window.addEventListener('scroll', focusSearch);
    })
    onDestroy(() => {
        window.removeEventListener('scroll', focusSearch);
    })

</script>

<div class="search__link">
    <a class="full_link" href="javascript:void(0);" on:click={scrollToSearch}>
        <object class="link" data="src/assets/svgs/magnifier.svg" type="image/svg+xml" width="70%" height="auto"/>
    </a>  
</div>

<div class="search">
    <input bind:this={searchbar} class="search__bar" name="search" type="search" placeholder="Escribe para buscar..."/>
</div>

<style lang="scss">
    .full_link{
        display: block;
    }
    .search__link{
        position: fixed;
        margin-top: 1.3rem;
        left: 1.5%;
        width: 4rem;
        cursor: pointer;
        display: block;
        z-index: 3;
        opacity: 50%;

        transition: all .3s;
        &:hover{
            scale: 130%;
            opacity: 100%;   
        }
    }
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


        &__bar{
            width: 100%;
            padding: .5rem;
            background: var(--searchbar-background-color);
            border-radius: .3rem;
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
            
        }
    }
</style>