
<main>
    <div class="container">
        <div class="content">
            <div class="edit">
                <div class="title">
                    <h1>Editar perfil</h1>
                </div>
                <div class="text">
                    <p>Mantén la privacidad de tus datos personales. Cualquier usuario que pueda ver tu perfil puede ver la información que añades aquí.</p>
                </div>
            </div>
    
            <div class="photo">
                <div class="ph">Foto</div>
                <div class="image">
                    <img src="https://avatars.cloudflare.steamstatic.com/de9eb8c8875fd7935f08baa1f36ba1bd633f6fc9_full.jpg" alt="" class="image-rounded">
                </div>
    
                <div class="modify">
                    <button type="button">Modificar</button>
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

    input,select,textarea, button{
        border-radius: 15px;
        padding: 10px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;
    }

    input{
        width: 70%;
    }

    .image-rounded{
        border-radius: 50%;
            width: 100px; 
            height: 100px;
            margin-bottom: 15px;
    }

    .image, .modify{
        display: inline-block;
        vertical-align: middle;
    }

    .modify{
      margin-left: 10px;
      margin-bottom: 20px;
    }

    .modify button{}

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

</style>
