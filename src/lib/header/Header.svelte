<script>
    import HeaderElement from "$header/HeaderElement.svelte";

    let elements=['Inicio', 'Biblioteca', 'Perfil'];
    export let active='Inicio';
</script>

<div class="topbar clearfix">
    <ul class="topbar__list">
        <li>  
            <img src="src/assets/plasma_icon_notext.png" alt="logo" class="topbar__logo"/>
        </li>
        {#each elements as name}
            <HeaderElement bind:active {name}/>
        {/each} 
    </ul>
</div>

<style lang="scss">

    .clearfix::after {
        content: ""; 
        clear: both;
        display: block;
    } 
    .topbar{
        box-sizing: border-box;
        border-bottom: 6px solid var(--text-color);   
        width: 100%;
        background-color: var(--topbar-background-color);
        //Necesitamos en este caso usarlo ya que si no las imagenes del slideshow apareceria por encima
        z-index: 100;

        &__list{
            list-style: none;   
            margin: 0;
            padding: 0;
            width: 100%;
        }
        
        @media (min-width: 1080px) {
            /*Position sticky y top 0 hace que la barra se quede siempre arriba sin hacer overlap con el resto de contenido*/
            position: sticky;
            top: 0;
            &__burger{
                float: right;
            }
        }  
        
        &__logo{
            width: 45px;
            height: auto;
        }
    }

    li{
        box-sizing: border-box;
        padding: 1rem 2rem .5rem;
        font-size: 42px;
        color: var(--text-color);
        transition: all .3s;
        @media (min-width: 1080px) {
            float: left;
        }  
    }
    

</style>