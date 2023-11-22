<script>

</script>

<main>
    <div class="idiom">
        <div class="idiom__languages">
            <div class="idiom__title">
                <h1>Idiomas</h1>
            </div>
            <div class="idiom__language1">
                <div class="idiom__links">
                    <a href="#">
                        <div class="idiom__link-content">
                            <img src="src/assets/flags/espana.png" alt="Icono">
                            <span>Español</span>
                        </div>
                    </a>

                </div>

                <div class="idiom__links">
                    <a href="#">
                        <div class="idiom__link-content">
                            <img src="src/assets/flags/reino-unido.png" alt="Icono">
                            <span>Inglés</span>
                        </div>
                    </a>

                </div>

                <div class="idiom__links">
                    <a href="#">
                        <div class="idiom__link-content">
                            <img src="src/assets/flags/rusia.png" alt="Icono">
                            <span>Ruso</span>
                        </div>
                    </a>

                </div>

                <div class="idiom__links">
                    <a href="#">
                        <div class="idiom__link-content">
                            <img src="src/assets/flags/alemania.png" alt="Icono">
                            <span>Aleman</span>
                        </div>
                    </a>

                </div>
            </div>

            <div class="idiom__language2">
                <div class="idiom__links">
                    <a href="#">
                        <div class="idiom__link-content">
                            <img src="src/assets/flags/italia.png" alt="Icono">
                            <span>Italiano</span>
                        </div>
                    </a>
                </div>

                <div class="idiom__links">
                    <a href="#">
                        <div class="idiom__link-content">
                            <img src="src/assets/flags/dinamarca.png" alt="Icono">
                            <span>Danes</span>
                        </div>
                    </a>
                </div>

                <div class="idiom__links">
                    <a href="#">
                        <div class="idiom__link-content">
                            <img src="src/assets/flags/portugal.png" alt="Icono">
                            <span>Portugues</span>
                        </div>
                    </a>
                </div>

                <div class="idiom__links">
                    <a href="#">
                        <div class="idiom__link-content">
                            <img src="src/assets/flags/francia.png" alt="Icono">
                            <span>Francés</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>


        <div class="idiom__coins">
            <div class="idiom__title">
                <h1>Monedas</h1>
            </div>
            <div class="idiom__coin1">
                <div class="idiom__coins">
                    <a href="#">
                        <div class="idiom__coin-content">
                            <span>EUR - €</span>
                        </div>
                    </a>
                </div>

                <div class="idiom__coins">
                    <a href="#">
                        <div class="idiom__coin-content">
                            <span>GBP - £</span>
                        </div>
                    </a>
                </div>

            </div>

            <div class="idiom__coin2">
                <div class="idiom__coins">
                    <a href="#">
                        <div class="idiom__coin-content">
                            <span>USD - $</span>
                        </div>
                    </a>
                </div>

                <div class="idiom__coins">
                    <a href="#">
                        <div class="idiom__coin-content">
                            <span>DKK - DKK</span>
                        </div>
                    </a>
                </div>

                
            </div>
            
        </div>
    </div>
</main>

<style lang="scss">
    .idiom{

        h1{
            margin-top: 0;
            
        }
        
        &__languages{
            height: 50%;
        }

        a{
            text-decoration: none;
            vertical-align: middle;
            margin-bottom: 5px;
            color: var(--text-color);
        }


        img{
            width: 50px;
            height: 50px;
            padding: 10px;
            float: left;
            margin-right: 20px;
        }

        &__link-content{
            border: 1px solid var(--text-color);
            border-radius: 5px;
            margin-right: 20px;
            margin-bottom: 20px;
            line-height: 70px;
            
        }

        &__language1{
            float: left;
            width: 40%;            
        }

        &__language2{
            float: left;
            width: 40%;
        }

        &__languages, &__coins {
            width: 80%;    
        }

        /* -------------------Coin----------------- */

        &__coin-content{
            border: 1px solid var(--text-color);
            border-radius: 5px;
            margin-bottom: 20px;
            line-height: 70px;
            width: 100%;

            a{
                width: 100%;
            }
            span{
                margin-left: 20px;
            }
            
        }

        &__coin1{
            float: left;
            width: 40%;            
        }

        &__coin2{
            float: left;
            width: 40%;
        }


    }
</style>

<!-- <main>
    <div class="idiom__user">
        <div class="idiom__settings">
        <ul>
            <li>
                <a >Customize your idiom
                    <div class="idiom__link-content">  
                        <div class="idiom__lines">
                            <span>Avatar, gamertag and social network links</span>
                            <div class="idiom__arrow"></div>
                        </div>
                    </div> 
                </a>
            </li>
            <li><a >
                    <div class="idiom__link-content"> 
                        Communications
                        <div class="idiom__lines">
                            <span>Manage emails or notifications</span>
                            <div class="idiom__arrow"></div>
                        </div>
                    </div>
                </a>
            </li>

            <li><a >
                    <div class="idiom__link-content"> 
                        Privacity
                        <div class="idiom__lines">
                            <span>Manage your public or private information</span>
                            <div class="idiom__arrow"></div>
                        </div>
                    </div>
                </a>
            </li>
            <li><a >Language and currency
                    <div class="idiom__link-content"> 
                        <div class="idiom__lines">
                            <span>Change the language or currency you want to use</span>
                            <div class="idiom__arrow"></div>
                        </div>
                    </div>
                </a>
            </li>
            <li><a>Email and password
                    <div class="idiom__link-content"> 
                        <div class="idiom__lines">
                            <span>Manage your email and password</span>
                            <div class="idiom__arrow"></div>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
        </div>

</main> -->

