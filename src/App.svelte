<script>
    import { onMount } from "svelte";
    import Header from "$header/Header.svelte";
    import Page from "$utils/Page.svelte";
    import pagesStore from "$stores/pages";
    import Footer from "./Footer/Footer.svelte";
    import Login from "./lib/login/Login.svelte";
    import Register from "./lib/login/Register.svelte";
  import Profile from "$profile/Profile.svelte";
  import Profile2 from "$profile/Profile2.svelte";
  import Custom from "$profile/Custom.svelte";

    $:{
        if($pagesStore.active=='Inicio'){
            scrollOnLoad();
        }
    }
    
    function scrollOnLoad(){
        requestAnimationFrame(() => {
            if(window.matchMedia("(max-width: 420px)").matches){
                window.scrollTo(0,400);
            }   
            else{
                window.scrollTo(0, 90);
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
   <!--  <Header/>  -->
    <Profile2/>
    <!-- <Page/> -->  
        <!-- <Login/> -->
        <!-- <Register/> -->
        <!-- <Custom/> -->
        
    <!-- <Footer/>   -->
</div>
    
    
<style lang="scss">
</style>
 