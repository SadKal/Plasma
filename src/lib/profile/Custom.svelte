<script>
    import Profile from "./Profile.svelte";
  
      let imgDefault = './default.jpg';
  
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
  
      function handleClickOnImage() {
          // Simular clic en el input de tipo "file"
          document.getElementById('img-uploader').click();
      }
  </script>

<main>
<div class="custom">
        <div class="custom__image">
            <div class="custom__title">
                <p>Foto de perfil</p>
            </div>
            <div class="custom__imgUser">
                <img src="{imgDefault}" alt="" class="image-rounded" on:click={handleClickOnImage}>
                <input type="file" id="img-uploader" on:change={HandleImg}>
            </div>
        </div>

        <div class="custom__nameUser">
            <div class="custom__title">
                <p>Nombre de usuario</p>
            </div>
            
            <div class="custom__nameInput">
                <input type="text" name="" id="">
                <input type="submit" value="Sbumit">
            </div>
        </div>
</div> 
<div class="cus">
    <div class="cus__network1">
        <label for="">Twitch</label><br>
        <input type="text" name="" id="">
    </div>
    <div class="cus__network2">
        <label for="">Steam</label><br>
        <input type="text" name="" id="">
    </div>
    <div class="cus__network3">
        <label for="">Ubisoft Connect</label><br>
        <input type="text" name="" id="">
    </div>
    <div class="cus__network4">
        <label for="">Youtube</label><br>
        <input type="text" name="" id="">
    </div>
    <div class="cus__network5">
        <label for="">Discord</label><br>
        <input type="text" name="" id="">
    </div>
    <div class="cus__network6">
        <label for="">EA</label><br>
        <input type="text" name="" id="">
    </div>

    <div class="cus__submit">
        <input type="submit" value="Submit">
    </div>
</div>

</main>

<style lang="scss">
    .custom{
        width: 100%;
        height: 100%;
        font-family: Montserrat;
        color: var(--text-color);
        display: inline-block;
        margin-left: 40px;            

        &__image{
            float: left;
        }

        &__imgUser{

        .image-rounded{
            border-radius: 50%;
            width: 100px; 
            height: 100px;
            transition: all 0.5s;/* Le doy una transicion para la imagen */
            }
        }

        &__nameUser{
            width: 30%;
            float: left;
        }
        
    }

    .cus{
        width: 100%;
        height: 100%;
        font-family: Montserrat;
        color: var(--text-color);
        display: inline-block;
        margin-left: 40px; 
        margin-top: 40px;

        &__network1,&__network2{
        margin-bottom: 10px;
        width: 48%;
        float: left;
        margin-right: 2%;
        box-sizing: border-box;
        }

        &__network3,&__network4{
        margin-bottom: 10px;
        width: 50%;
        float: left;
        box-sizing: border-box;
        }

        &__network5,&__network6{
        margin-bottom: 10px;
        width: 48%;
        float: left;
        margin-right: 2%;
        box-sizing: border-box;
        }

        &__submit{
            position: relative;
            height: auto;
            width: 10%;
            margin: 0 auto;
        }
    }
</style>