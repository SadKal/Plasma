<div class="topbar clearfix">
    <ul class="topbar__list">
        <li>  
            <img src="src/assets/plasma_icon_notext.png" alt="logo" class="topbar__logo"/>
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
<style lang="scss">
    @import "../../sass/abstracts/variables";

    .clearfix::after {
        content: ""; 
        clear: both;
        display: block;
    } 
    .topbar{
        box-sizing: border-box;
        border-bottom: 6px solid $text-color;   
        width: 100%;
        background-color: $topbar-background-color;
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
        padding: 2rem 5rem 1rem;
        font-size: 42px;
        color: $text-color;
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
        color: $text-color;
        transition: all .3s;

        &:hover{
            color: white;
            text-shadow: 
                0 0 2rem $text-color
            ,
                0 0 .5rem black;
        }
        &:focus{
            display: block;
            transform-origin: 50% 50%;
            transform: scale(1.3, 1.3);
            color: $selected-text-color;
        }
    }

</style>