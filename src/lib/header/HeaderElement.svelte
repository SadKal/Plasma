<script>
    export let active;
    export let name;
</script>

<li>
    <a class="topbar__element" href="/" on:click|preventDefault={() => {active=name}} class:active={active==name}>
        {name}    
    </a> 
</li>

<style lang="scss">
    li a{
        box-sizing: border-box;
        padding: 1rem 2rem .5rem;
        font-size: 42px;
        color: var(--text-color);
        @media (min-width: 1080px) {
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
            display: block;
            transform-origin: 50% 50%;
            transform: scale(1.3, 1.3);
            color: var(--selected-text-color);
            text-shadow: 
                0 0 2rem var(--selected-text-color)
            ,
                0 0 .5rem black;
        }
    }
</style>