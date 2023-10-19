<header>
    <div class="topbar clearfix">
        <ul class="topbar__list">
            <li>  
                <a href="#">
                    <img src="src/assets/plasma_icon_notext.png" alt="logo" class="topbar__logo"/>
                </a> 
            </li>
            <li>
                <a href="#">
                    Inicio    
                </a> 
            </li>
            <li>
                <a href="#">
                    Biblioteca    
                </a> 
            </li>
            <li>
                <a href="#">
                    Perfil    
                </a> 
            </li> 
            
            <li>
                <a href="#">
                    Soporte    
                </a> 
            </li>
            <li class="topbar__burger"> 
                Burg   
            </li>
        </ul>
    </div>
 <!--   <div>
        <p>probando</p>
    </div>
    <div class="yar">

    </div> -->
    
</header>

<style lang="scss">
$topbar-text-color: rgb(209,51,100);
$topbar-background-color: rgb(0,74,64);

.yar{
    height: 4000px;
}
.clearfix::after {
  content: ""; 
  clear: both;
  display: block;
} 

.topbar{
    box-sizing: border-box;
    border-bottom: 6px solid $topbar-text-color;
    width: 100%;
    background-color: $topbar-background-color;

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
    padding: 2rem 5rem 1rem;
    font-size: 42px;
    color: $topbar-text-color;
    transition: all .3s;
    @media (min-width: 1080px) {
        float: left;
    }  
    @media (max-width: 1640px){
        padding: 1rem 2rem .5rem;
    } 
}
li a{
    text-decoration: none;
    color: $topbar-text-color;
    transition: all .5s;
    

    &:hover{
        color: white;
        text-shadow: 
            0 0 2rem $topbar-text-color
        ,
            0 0 .5rem black;
    }
}

</style>