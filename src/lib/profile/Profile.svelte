<script>
    let imgDefault = 'src/Perfil/default.jpg';

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
            ChangeImage('src/Perfil/default.jpg');/* En el caso de que no se cambie la imagen me dejas la de por defecto */
        }


    }

   

</script>

<main>
    <div class="container">
        <div class="content">
            <div class="photo">
                <div class="image">
                        <img src="{imgDefault}" alt="" class="image-rounded">
                </div>
    
                <div class="modify">
                    <input type="file" id="img-uploader" on:change={HandleImg}>
                    <label for="img-uploader">Cambiar foto</label>

                </div>
            </div>
    
            <div class="data">
                <div class="names">
                    <div class="name">
                        <div class="nombre">Nombre</div>
                        <div class="box">
                            <input type="text" value="Maria">
                        </div>
                    </div>
                    <div class="lastname">
                        <div class="apellidos">Apellidos</div>
                        <div class="box">
                            <input type="text" value="Pinar">
                        </div>
                    </div>
                </div>

                <div class="infos">
                    <div class="info">Info</div>
                    <div class="textarea">
                        <textarea name="" id="" cols="30" rows="10" placeholder="Cuenta tu historia"></textarea>
                    </div>
                </div>

                <div class="pronouns">
                    <div class="pronoun">Pronombres</div>
                    <div class="selects">
                        <select name="" id="">
                            <option value="">Él/He/Him </option>
                            <option value="">Ella/She/Her </option>
                            <option value="">Elle/They/Them </option>
                        </select>
                    </div>
                </div>

                <div class="user">
                    <div class="username">Nombre de usuario</div>
                    <div class="usertext">
                        <input type="text" value="mapins">
                    </div>
                </div>
            </div>
        </div>
    </div>

    

</main>

<style>

    .container{
        margin: 20px;
        color: rgb(209, 51, 100);
        font-size: 18px;
        max-width: 70%;
        height: 100%;
        margin: 0 auto;
        padding: 1px;
        background-color: #002e28;
        background-position: center;
    }
    .content{
        margin: 20px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    }
    input,select,textarea,label{
        border-radius: 15px;
        padding: 10px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;
    }
    .image-rounded{
        border-radius: 50%;
            width: 150px; 
            height: 150px;
            margin-bottom: 15px;
            filter: none;
            transition: all 0.5s;/* Le doy una transicion para la imagen */

    }

    .image, .modify{
        display: inline-block;
        vertical-align: middle;
    }

    .modify{
      margin-left: 10px;
      margin-bottom: 20px;
    }

    .name, .lastname{
        display: inline-block;
    }

    .names,.infos,.pronouns,.user{
        margin-bottom: 15px;
    }

    .nombre,.apellidos,.info,.pronoun,.username,.ph{
        margin-bottom: 10px;
        font-weight: bold;
    }

    h1{
        margin-bottom: 2px;
    }

    .usertext{
        width: 50%;
    }

    .apellidos{
        margin-top: 10px;
    }

    textarea{
        width: 40%;
        max-width: 40%;
        height: auto;
        box-sizing: border-box;
    }

    select{
        width: 100%;
        max-width: 100%;
        height: auto;
        box-sizing: border-box;
    }

    .selects{
        width: 18%;
    }

    input{
        width: 70%;
        max-width: 70%;
        box-sizing: border-box;
    }

    .usertext input{
        width: 35%;
        max-width: 35%;
        box-sizing: border-box;
    }

    .image-rounded:hover {
          filter: blur(2px) brightness(60%);/* Cuando pase por encima con el raton se pone borroso. */
          
        }

    #img-uploader{
        display: none;
    }

    label{
        background: rgb(209, 51, 100);
        color: white;
        padding: 6px 20px;
        cursor: pointer;
        border-radius: 3px;
}

</style>
