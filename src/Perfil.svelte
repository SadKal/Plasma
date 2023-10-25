<script>
import Header from "./lib/header/Header.svelte";
</script>

<Header/>

<main>

    <div class="profile">
        <div class="profile-header">
            <div class="profile-header-data">
                <span>Marypoppins</span><br>
                <bdi>Maria</bdi>
                
                <img class="country" alt="" src="https://community.cloudflare.steamstatic.com/public/images/countryflags/es.gif">
            </div>
            <div class="profile-header-avatar">
                <figure class="circle">
                  <img src="https://avatars.cloudflare.steamstatic.com/de9eb8c8875fd7935f08baa1f36ba1bd633f6fc9_full.jpg" alt="" class="image">
                  <figcaption class="change-photo">Cambiar foto</figcaption>
              </figure>
            </div>
        </div>
        
        <div class="profile-body">
            <div class="profile-body-info">
                <p>Email asociado:</p>
                <input type="email" name="email"><br>
                
                <p>Contraseña:</p>
                <input type="password">            
            </div>

            <fieldset>
            <div class="profile-body-user">
              <p>Nombre de usuario:</p>
              <input type="text" name="username"><br>
              
              <p>Descripción:</p>
              <input type="text" name="description">
            </div>
            </fieldset>

            <div>
              <p></p>
              
            </div>
            <div>
              <p></p>
              
            </div>
            <div>
              <p></p>
              
            </div>
        </div>
    </div>

</main>

<style lang="scss">
$topbar-text-color: rgb(209, 51, 100);
.profile {
  color: $topbar-text-color;
  font-size: 30px;
  max-width: 50%;
  height: 100%;
  margin: 0 auto;
  padding: 0;
  background-color: #002e28;
  background-position: center;
  margin-top: 0;

  &-header {
    margin-bottom: 1rem;

    &-data {
      span, bdi {
        margin: 1.5rem;
      }
      img .country {
        margin-left: 0.2rem;
      }
    }

    &-avatar {
      .circle {
        position: relative;//Lo pongo en relativo para que no afecte a nada mas de la pagina.
        width: 12rem;
        height: 12rem;
        clip-path: circle(50% at 50% 50%);//Recorto la imagen en forma de circulo
        .image {
          height: 100%;
          transition: all 0.5s;//Le doy una transicion para la imagen
        }
        .change-photo{
        position: absolute;//Le doy una posicion absoluta para que afecte a todo
        top: 50%;//Lo situo en el centro
        left: 50%;
        transform: translate(-50%, 20%);//Mlo que hago es que este objeto lo coloco mas abajo y cuando ponga opacidad cambio el translate para que se haga el efecto requerido
        color:$topbar-text-color;
        font-size: 1.7rem;
        text-align: center;
        transition: all 0.5s;
        opacity: 0;//Le pongo opacidad 0 para que no se vea sin que se ponga el raton encima.

        }

        &:hover .image {
          filter: blur(3px) brightness(80%);//Cuando pase por encima con el raton se pone borroso.
          
        }
        &:hover .change-photo{
            opacity: 1;//Una vez que pasa el raton activo
            transform: translate(-50%, -50%); //Una vez que se ha puesto abajo lo muevo
          }
      }
    }
  }

  &-body {
    p, input {
      display: inline-block;
      margin-right: 1rem;
      vertical-align: middle;
    }

    &-info {
      margin: 1rem;
      margin-bottom: 1rem;
    }

    fieldset {
      border: none;
      border-top: 6px solid $topbar-text-color;
    }
  }
}


</style>

