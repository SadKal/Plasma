<script>
    import { onMount, tick } from "svelte";
    import Header from "./lib/header/Header.svelte";
    import Inicio from "./lib/inicio/Inicio.svelte";

    let visible = false;
    let mediaQuerySize = "(max-width: 420px)";
    let element;

    let active;
    $:{
        if(active=='Inicio'){
            scrollOnLoad();
        }
    }
    function scrollOnLoad(){
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
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
        scrollOnLoad();
    });
</script>

<div bind:this={element} class="main">
    <Header bind:active/>
    {#if active=='Inicio'}
        <Inicio/> 
    {/if}
    
</div>
    
    
<style lang="scss">
</style>
