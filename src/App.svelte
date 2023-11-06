<script>
    import { onMount } from "svelte";
    import Header from "$header/Header.svelte";
    import Page from "$utils/Page.svelte";
    import pagesStore from "$stores/pages";

    $:{
        if($pagesStore.active=='Inicio'){
            scrollOnLoad();
        }
    }
    
    function scrollOnLoad(){
        requestAnimationFrame(() => {
            if(window.matchMedia("(max-width: 420px)").matches){
                window.scrollTo(0,350);
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
    });
</script>

<div class="main">
    <Header/>
    <Page/>
</div>
    
    
<style lang="scss">
</style>
