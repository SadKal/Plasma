<script>
  import { imageStore } from "$stores/images";
  import Communications from "./Communications.svelte";
import Custom from "./Custom.svelte";
  import Email from "./Email.svelte";
  import Privacy from "./Privacy.svelte";
  import Profile from "./Profile.svelte";

    let valor = $imageStore;
    console.log(valor);

    let componenteMostrado = null;
    function mostrarComponente(componente){
        componenteMostrado=componente;
    }
</script>


<main>
    <div class="profile">
            <div class="profile__photo">
                <div class="profile__img">
                    <!-- <img src="{valor}" alt="" class="image-rounded" on:click={handleClickOnImage}>
                    <input type="file" id="img-uploader" on:change={HandleImg}> -->
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
                        <a on:click={()=> mostrarComponente('Perfil')}>Personaliza tu perfil</a>
                        <div class="profile__lines">
                            <span>Avatar, gamertag y links de redes sociales</span>
                            <div class="profile__arrow">></div>
                        </div>
                        

                    </li>
                    <li><a on:click={()=> mostrarComponente('Comunicaciones')} >Comunicaciones</a>
                        <div class="profile__lines">
                            <span>Gestiona los emails o notificaciones que quieres recibir</span>
                            <div class="profile__arrow">></div>
                        </div>
                        
                    </li>
                    <li><a on:click={()=> mostrarComponente('Privacidad')} >Privacidad</a>
                        <div class="profile__lines">
                            <span>Gestiona tu información pública o privada</span>
                            <div class="profile__arrow">></div>
                        </div>
                        

                    </li>
                    <li><a on:click={()=> mostrarComponente('Idioma')} >Idioma y moneda</a>
                        <div class="profile__lines">
                            <span>Cambia el idioma o la moneda que quieres utilizar</span>
                            <div class="profile__arrow">></div>

                        </div>
                        
                    </li>
                    <li><a on:click={()=> mostrarComponente('Email')}>Email y contraseña</a>
                        <div class="profile__lines">
                            <span>Gestiona tu email y tu contraseña</span>
                            <div class="profile__arrow">></div>
                        </div>
                        

                    </li>
                </ul>
                </div>

        <div class="profile__content">
            {#if componenteMostrado === 'Perfil'}
                <Custom/>
            {:else if componenteMostrado === 'Comunicaciones' }
                <Communications/>
            {:else if componenteMostrado === 'Privacidad'}
                <Privacy/>
            {:else if componenteMostrado === 'Idioma'}
                <p>Idioma</p>
            {:else if componenteMostrado === 'Email'}
                <Email/>
            {:else}
                <Custom/>
            {/if}
        </div>
    </div>

</main>

<style lang="scss">
    .profile{
        width: 100%;
        height: 100%;
        font-family: Montserrat;
        color: var(--text-color);

        
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
                width: 100%;
                span{
                    display: inline-block;
                    width: 90%;
                    vertical-align: middle;
                    line-height: 25px;
                }

                .profile__arrow{
                display: inline-block;
                width: 5%;
                margin-left: 10px;
                margin-bottom: 25px;
                vertical-align: middle;
                font-size: 30px;
               
            }

            }
            

            &__user{
                font-size: 19px;    
                height: 100%;
                display: table;
            }

            &__settings{
                width: 30%;
                height: 100%;
                border-right: 2px solid var(--text-color);
                float: left;

                ul{
                    list-style-type:none;
                }

                li{
                    display: block;
                    margin: 15px;
                    height: 10vh;
                    float: left;
                    a{
                        text-decoration: none;
                        color: aliceblue;
                        cursor: pointer;
                    }
                }
            }

            &__content{
                width: 60%;
                float: right;
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