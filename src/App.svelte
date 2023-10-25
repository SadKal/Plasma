<script>
    import { onMount } from "svelte";
    import Header from "./lib/header/Header.svelte";
    import MostSold from "./lib/inicio/MostSold.svelte";
    import Novedades from "./lib/inicio/Novedades.svelte";
    import Slideshow from "./lib/inicio/Slideshow.svelte";

    let mediaQuerySize = "(max-width: 420px)";
    
    function scrollOnLoad(n) {
        window.scrollTo(0, n);
    }

    onMount( ()=> {
        if(window.matchMedia(mediaQuerySize).matches){
            scrollOnLoad(460);
        }   
    });
</script>

    <Header/>

    <Novedades/>

    <Slideshow/>

    <MostSold/>

<style lang="scss">
   

</style>
