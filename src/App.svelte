<script>
    import { onMount } from "svelte";
    import Header from "./lib/header/Header.svelte";
    import Inicio from "./lib/inicio/Inicio.svelte";


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

    <Inicio/>
    
<style lang="scss">
   .yar{
    height: 1000px;
   }

</style>
