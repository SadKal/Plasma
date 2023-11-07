<script>
    export let name;
    import pagesStore from "$stores/pages";
    import cacheStore from "$stores/cache";
</script>

<li>
    <a 
    class="topbar__element" 
    href="/" 
    on:click|preventDefault={() => { $pagesStore.active=name }} 
    class:active={$pagesStore.active==name}
    >
    {name}    
    </a>  
</li>

<style lang="scss">
    li{
        margin-bottom: 1rem;
        @media (min-width: 420px) {
            margin-bottom: 0;
        } 
    }
    li a{
        box-sizing: border-box;
        padding: 1rem 2rem .5rem;
        
        font-size: 42px;
        color: var(--text-color);
        @media (min-width: 700px) {
            float: left;
        } 
        text-decoration: none;
        transition: all .3s;

        &:hover{
            color: white;
            text-shadow: 
                0 0 2rem var(--text-color)
            ,
                0 0 .5rem black;
        }
        &.active{ 
            color: var(--selected-text-color);
            text-shadow: 
                    0 0 2rem var(--selected-text-color)
                ,
                    0 0 .5rem black;

            @media (min-width: 700px) {
                display: block;
                transform-origin: 50% 50%;
                transform: scale(1.3, 1.3);
            } 
        }
    }
</style>