<script>
    import { onMount, tick } from "svelte";
    import Header from "./lib/header/Header.svelte";
    import Inicio from "./lib/inicio/Inicio.svelte";

    let mediaQuerySize = "(max-width: 420px)";

    let active;
    $:{
        if(active=='Inicio'){
            scrollOnLoad();
        }
    }
    
    function scrollOnLoad(){
        requestAnimationFrame(() => {
            if(window.matchMedia(mediaQuerySize).matches){
                window.scrollTo(0,460);
            }   
            else{
                window.scrollTo(0, 70);
            };
        });
    }

    onMount(()=> {
        //Odio los navegadores modernos
        //El navegador tiene en el historial una variable que hace que vuelva al inicio de la pagina al cargar
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        scrollOnLoad();
    });
</script>

<div class="main">
    <Header bind:active/>
    {#if active=='Inicio'}
        <Inicio/> 
    {/if}
    
</div>
    
    
<style lang="scss">
</style>
