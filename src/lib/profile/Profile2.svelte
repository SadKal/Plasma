<script>
  import Custom from "./Custom.svelte";
  import Profile from "./Profile.svelte";

    let imgDefault = 'src/lib/profile/default.jpg';

    function ChangeImage(newImg){
        imgDefault = newImg;
    }

    function HandleImg(e){/* Creo una funcion para manejar el evento que causa que seleccione una imagen */
        const file=e.target.files[0]; /* Meto lo que me pasen en una variable */

        if(file){/* Si esa variable tiene una foto nueva hace esto: */
            const reader = new FileReader();/* Un objeto el cual puede leer del lado del cliente */

            reader.onload = function (e){/* reader tiene un evento que lo manejo con una funcion, que se ejecute cuando finaliza la lectura */
                ChangeImage(e.target.result); /* Llamo a la otra funcion para que me cambie la imagen */
            }
            reader.readAsDataURL(file);/* Que me lea la imagen como una URL */
        }else{
            ChangeImage('src/lib/profile/default.jpg');/* En el caso de que no se cambie la imagen me dejas la de por defecto */
        }


    }

    function handleClickOnImage() {
        // Simular clic en el input de tipo "file"
        document.getElementById('img-uploader').click();
    }
</script>


<main>
    <div class="profile">
            <div class="profile__photo">
                <div class="profile__img">
                    <img src="{imgDefault}" alt="" class="image-rounded" on:click={handleClickOnImage}>
                    <input type="file" id="img-uploader" on:change={HandleImg}>
                </div>

                <div class="profile__data">
                    <div class="profile__name">
                        <span>Maripins</span>
                        <span>Miembro desde: nov 30, 2023</span>
                    </div>
                </div>
            </div>

            <div class="profile__user">
                <div class="profile__settings">
                <ul>
                    <li>              
                            <a href="">Personaliza tu perfil</a>
                            <div class="profile__lines">
                                <span>Avatar, gamertag y links de redes sociales</span>
                            </div>
                            <div class="profile__arrow">></div>

                    </li>
                    <li><a href="">Comunicaciones</a>
                        <div class="profile__lines">
                            <span>Gestiona los emails o notificaciones que quieres recibir</span>
                        </div>
                        <div class="profile__arrow">></div>
                    </li>
                    <li><a href="">Privacidad</a>
                        <div class="profile__lines">
                            <span>Gestiona tu información pública o privada</span>
                        </div>
                        <div class="profile__arrow">></div>

                    </li>
                    <li><a href="">Idioma y moneda</a>
                        <div class="profile__lines">
                            <span>Cambia el idioma o la moneda que quieres utilizar</span>
                        </div>
                        <div class="profile__arrow">></div>

                    </li>
                    <li><a href="">Email y contraaseña</a>
                        <div class="profile__lines">
                            <span>Gestiona tu email y tu contraseña</span>
                        </div>
                        <div class="profile__arrow">></div>

                    </li>
                </ul>
                </div>

        <div class="profile__content">
            <Custom/>
            
        </div>
    </div>

</main>

<style lang="scss">
    .profile{
        width: 100%;
        height: 100%;
        font-family: Montserrat;
        color: var(--text-color);

        &__arrow{
            position: absolute;
            top: 40%;
            left: 95%;
            transform: translate(-50%,-50%);
        }
        &__photo{
            border-bottom: 2px solid var(--text-color);
            margin-bottom:5vh;
            margin-right: 5vh;
            margin-left: 5vh;
        }

        &__img{
            text-align: center;
            line-height: 150px;
            height: 22vh;
           
        .image-rounded{
            border-radius: 50%;
            width: 150px; 
            height: 150px;
            transition: all 0.5s;/* Le doy una transicion para la imagen */
            margin-top: 40px;
            }
        }


        &__data{
            text-align: center;
        }
            &__name{
                margin-bottom: 15px;
            span{
                display: block;
                
                }
            }

            &__lines{
                span{
                    display: inline-block;
                    width: 90%;
                }
            }

            &__user{
                font-size: 20px;    
                height: 100%;
                display: table;
            }

            &__settings{
                width: 30%;
                height: 100%;
                border-right: 2px solid var(--text-color);

                ul{
                    list-style-type:none;
                }

                li{
                    display: block;
                    margin: 15px;
                    height: 10vh;
                    position: relative;
                    a{
                        text-decoration: none;
                        color: aliceblue;
                    }
                }
            }

            &__content{
                width: 60%;
                float: left;
            }

            &__settings{
                width: 30%;
                float: left;
            }
    }

    #img-uploader{//Le quito el input para que no se vea 
        position: absolute;
        top: 0;
        left: 0;
        width: 0%; 
        height: 0%; 
        opacity: 0; 
        cursor: pointer;
    }

    
</style>