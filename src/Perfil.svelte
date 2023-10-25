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
                <img src="https://avatars.cloudflare.steamstatic.com/de9eb8c8875fd7935f08baa1f36ba1bd633f6fc9_full.jpg" alt="">
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
                <textarea name="user" cols="20" rows="2"></textarea><br>
                <p>Descripción:</p>
                <textarea name="description" cols="20" rows="2"></textarea>
            </div>
            </fieldset>
        </div>
    </div>

</main>

<style lang="scss">
$topbar-text-color: rgb(209, 51, 100);
  .profile {
    color: $topbar-text-color;
    font-size: 30px;
    max-width: 976px;
    min-height: 224px;
    margin: 0 auto;
    background-color: #002e28;
    background-position: center;

    &-header {
      margin-bottom: 1rem;

      &-data {
        margin: 1rem;

        img .country {
          margin-left: 0.5rem;
        }
      }

      &-avatar {
        img {
          margin-left: 1rem;
        }
      }
    }

    &-body {
      &-info {
        margin: 1rem;
        p, input {
          display: inline-block;
          margin-right: 1rem;
          vertical-align: middle;
        }
        margin-bottom: 2rem;
      }
      fieldset {
        border: none;
        border-top: 6px solid $topbar-text-color;
        
      }
    }
}






</style>

