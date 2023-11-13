<script>
    import Genre from "$genres/Genre.svelte";
    import genres from "$data/genres.json";

    let genres_arr=genres.data;
</script>


<div class="genres">
    <div class="genres__exhibitor">
        <div class="genres__title">
            Géneros Populares
        </div>
        <div class="row clearfix">
            {#each genres_arr.slice(0,4) as {name, bg_color, svg_src, text_color}}
                <Genre {name} {bg_color} {svg_src} {text_color}/>
            {/each}
        </div>
        <div class="row clearfix">
            {#each genres_arr.slice(4,8) as {name, bg_color, svg_src, text_color}}
                <Genre {name} {bg_color} {svg_src} {text_color}/>
            {/each}
        </div>
    </div>
</div>

<style lang="scss"> 
    .clearfix::after {
        content: ""; 
        clear: both;
        display: block;

    } 
    *{
        animation-name: fadein;
        animation-duration: var(--seconds-fadein);
        animation-timing-function: ease-in;
    }

    .genres{ 
        &__exhibitor{
            width: 80%;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
        }
        &__title{
            width: 100%;
            text-align: center;
            font-family: 'Montserrat';
            margin-top: 6rem;
            color: var(--text-color);
            font-size: 60px;
            font-weight: bolder;
            letter-spacing: .4rem; /*suggesting .2rem*/

            @media (max-width: 420px) {
                font-size: 30px;
                margin-top: 8rem;
            }
        }
    }
    .row{
        margin-top: 5rem;
        margin-bottom: 5rem;
        
        @media (max-width: 420px) {
            &:not(:last-child){
                margin-bottom: 2rem;
            }
        }
    }

</style>