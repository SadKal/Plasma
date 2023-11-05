<script>
    import { onMount, tick } from "svelte";
    import Header from "$header/Header.svelte";
    import Inicio from "$inicio/Inicio.svelte";
    import Page from "$utils/Page.svelte";
    import pagesStore from "$stores/pages";

    let mediaQuerySize = "(max-width: 420px)";

    let pages=[
        {
            name:'Inicio',
            component: Inicio
        },
        {
            name:'Biblioteca',
            component: undefined
        },
        {
            name:'Perfil',
            component: undefined
        },
    ];
    $:{
        if($pagesStore.active=='Inicio'){
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
    });
</script>

<div class="main">
    <Header {pages}/>
    {console.log($pagesStore)}
    <Page id='mainPage' {pages}/>
</div>
    
    
<style lang="scss">
</style>
