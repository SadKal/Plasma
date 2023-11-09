<script>
    import { onMount } from "svelte";
    import genresStore from "$stores/genres";
    import pagesStore from "$stores/pages";

    export let name;
    export let bg_color;
    export let svg_src;
    export let text_color; 
    
</script>

<div class="col_1_of_4" 
    style=
    "background-color: {bg_color};
    color: {text_color}"
    on:click={() => {
        $pagesStore.active='Genres';
        $genresStore.activeGenre={name};
    }}>
    <object class="genre__svg" data={svg_src} type="image/svg+xml" width="70%" height="auto"/>
    <div class="genre__name">
        {name}
    </div>
</div>

<style lang="scss">
    object{
        pointer-events: none;
    }
    :root{
        --text-svg-color: rgba(0,0,0,.8);
    }

    .genre__name{
        margin-top: 2rem;
    }
    .col_1_of_4{
        box-sizing: border-box;
        width: calc((100% - (3 * var(--gutter-horizontal))) / 4);
        height: auto;
        float: left;
        transition: all .4s;
        position: relative;
        text-align: center;
        padding: 3rem 0 1.5rem;
        border-radius: .5rem;
        font-weight: bolder;
        font-family: 'Montserrat';
        background-image: url('https://cdn.mos.cms.futurecdn.net/HsDtpFEHbDpae6wBuW5wQo.jpg');
        background-blend-mode: soft-light;
        background-size: cover;

        &:not(:last-child){
            margin-right: var(--gutter-horizontal);
        }
        &:hover{
            cursor: pointer;
            transform-origin: center center;
            transition: all .1s;
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