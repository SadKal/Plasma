<script>
    import Genre from "./Genre.svelte";

    let genres_arr=[
        /*{
            'name': 'horror',
            'bg_color': 'red',
            'svg_color': 'black',
            'svg_src': ''
        },*/
        {
            'name': 'Acción Aventura',
            'bg_color': 'green',
            'svg_color': 'yellow',
            'svg_src': '../../../assets/svgs/adventure.svg'
        }
    ]
</script>


<div class="genres">
    {#each genres_arr as {name, bg_color, svg_color, svg_src}}
        <Genre {name} {bg_color} {svg_color} {svg_src}/>
    {/each}
</div>

<style lang="scss">

    
    
    *{
        animation-name: fadein;
        animation-duration: var(--seconds-fadein);
        animation-timing-function: ease-in;
    }
    .genres{
        
    }
</style>