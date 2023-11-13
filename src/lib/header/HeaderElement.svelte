<script>
    export let name;
    import pagesStore from "$stores/pages";
</script>

<li class="topbar__element--container">
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

        & a{
            padding: 1rem 2rem .5rem;
            font-size: 42px;
            color: var(--text-color);
            text-decoration: none;
            transition: all .3s;

            @media (min-width: 700px) {
                float: left;
            } 

            &:hover{
                color: white;
            }
            
            &.active{ 
                color: var(--selected-text-color);
                text-shadow: 
                        0 0 1rem var(--selected-text-color)
                    ,
                        0 0 .5rem black;

                @media (min-width: 700px) {
                    //transform: scale(1.3, 1.3);
                } 
            }
        }
    }
</style>