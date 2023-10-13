<script>

</script>

<main>
    <div class="topbar">
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
    <div class="yar">

    </div>
    <div class="circle">

    </div>
</main>

<style lang="scss">
$topbar-text-color: rgb(209,51,100);
$topbar-background-color: rgb(0,74,64);

.yar{
    height: 4000px;
}

.topbar{
    position: absolute;
    border-bottom: 6px solid $topbar-text-color;
    width: 100%;
    background-color: $topbar-background-color;

    &__list{
        list-style: none;   
        margin: 0;
        padding: 0;
        width: 100%;
    }
    @media (min-width: 1250px) {
        position: fixed;
        &__burger{
            float: right;
        }
    }   

    &__logo{
        width: 60px;
        height: auto;
    }
}

li{
    box-sizing: border-box;
    float: left;
    padding: 2rem 5rem 1rem;
    font-size: 54px;
    color: $topbar-text-color
;
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
