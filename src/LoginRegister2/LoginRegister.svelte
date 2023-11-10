
<script>
    let containerActive = false; //Estado del contenedor, lo pongo en false para asumir que no esta activo.

    function toogleActive(){ //Funcion que la llamo cuando toque los botones de Register o Login.
        containerActive =!containerActive;//Hago que cuando sea falso, se ponga en verdadero y que cuando este en falso se ponga en verdadero.
    }

</script>

<main>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
     <!-- Es una biblioteca de iconos, los cuale uso para mostrar los iconos de las redes sociales -->
    <div class="page">   
        <div class="container" id="container" class:active={containerActive}>
            <div class="form-container sign-up">
                <form>
                    <div class="form-content-up">
                    <h1>Create Account</h1>
                    <div class="social-icons">
                        <a href="#" class="icon">
                            <i class="fab fa-google-plus-g"></i>
                        </a>

                        <a href="#" class="icon">
                            <i class="fab fa-facebook-f"></i>
                        </a>

                        <a href="#" class="icon">
                            <i class="fa-brands fa-github"></i>
                        </a>

                        <a href="#" class="icon">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name">
                    <input type="email" placeholder="Email">
                    <input type="password" placeholder="Password">
                    <button>Sign Up</button>
                </div>
                </form>
            </div>

            <div class="form-container sign-in">
                <form>
                    <div class="form-content">
                        <h1>Sign In</h1>
                        <div class="social-icons">
                            <a href="#" class="icon">
                                <i class="fa-brands fa-google"></i>
                            </a>

                            <a href="#" class="icon">
                                <i class="fa-brands fa-facebook-f"></i>
                            </a>

                            <a href="#" class="icon">
                                <i class="fa-brands fa-github"></i>
                            </a>

                            <a href="#" class="icon">
                                <i class="fa-brands fa-linkedin-in"></i>
                            </a>
                        </div>
                        <span>or use your email password</span>
                        <input type="email" placeholder="Email">
                        <input type="password" placeholder="Password">
                        <a href="#">Forget Your Password?</a><br>
                        <button>Sign In</button>
                    </div>
                </form>
            </div>

            <div class="toggle-container">
                <div class="toggle">
                    <div class="toggle-panel toggle-left">
                        <div class="toggle-left left">
                            <h1>Welcome Back!</h1>
                            <p>Enter your personal details to use all of site features</p>
                            <button on:click={toogleActive} id="login" class="hidden">Sign In</button>
                        </div>
                    </div>

                    <div class="toggle-panel toggle-right">
                        <div class=" toggle-right right">
                            <h1>Hello, Friend!</h1>
                            <p>Register with your personal details to use all of site features</p>
                            <button on:click={toogleActive} id="register" class="hidden">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat',sans-serif;
}

.page{
  position: relative;
  width: 100vw;
  height: 100vh;
}

.container{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.35);
  position: relative;
  overflow: hidden;
  width: 50vw;
  max-width: 100%;
  min-height: 480px;
  text-align: center;
}

.container p{
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.3px;
  margin: 20px 0;
}

.container span{
  font-size: 12px;
}

.container a{
  color: #333;
  font-size: 13px;
  text-decoration: none;
  margin: 15px 0 10px;
}

.container button{
  background-color: #512da8;
  color: #fff;
  font-size: 12px;
  padding: 10px 45px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-top: 10px;
  cursor: pointer;
  width: 10vw;
}

.container button.hidden{
  background-color: transparent;
  border-color: #fff;
}

.container form{
  background-color: #fff;
  display: inline-block;
  text-align: center;
  height: 100%;
  margin: auto 0;
 position: relative;
}

.form-content{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 20vw;
}

.form-content-up{
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

}

.container input{
  width: 20vw;
  padding: 5px;
  margin: 5px 0;
  background-color: #eee;
  border: none;
  border-radius: 8px;
  outline: none;
}

.form-container{
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in{
  left: 0;
  width: 50%;
  z-index: 2;/* Es la superposicion, quien tenga el numero mayor se superpone al otro */
}

.container.active .sign-in{
  transform: translateX(100%);
}

.sign-up{
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.active .sign-up{
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: move 0.6s;
}

@keyframes move {
  0%,49.99%{
    opacity: 0;
    z-index: 1;
  }
  50%,100%{
    opacity: 1;
    z-index: 5;
  }
}

.social-icons{
  margin: 20px 0;
}

.social-icons a{
  display: inline-block;
    height: 40px;
    width: 40px;
    background-color: #d13364;
    margin-right: 10px;
    margin: 0 10px 10px 0;
    text-align: center;
    line-height: 40px;
    border-radius: 20%;
    transition: all 0.5s ease;
    color: antiquewhite;
}

.social-icons a:hover{
  background-color: whitesmoke;
  color:#d13364;
}

.toggle-container{
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
  border-radius: 150px 0 0 100px;
  z-index: 1000;
}

.container.active .toggle-container{
  transform: translateX(-100%);
  border-radius: 0 150px 100px 0;

}

.toggle{
    background-color: #512da8 ;
    height: 100%;
    background: linear-gradient(to right,#5c6bc0,#512da8);
    color: #fff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);  
    transition: all 0.6s ease-in-out;
}

.container.active .toggle{
  transform: translateX(50%);
}

.toggle-panel{
  position: absolute;
  width: 50%;
  height: 100%;
  padding: 0 30px;
  text-align: center;
  top: 0;
  transform: translateX(0);
  transition: all 0.6 ease-in-out;
  
}

.toggle-left{
  transform: translateX(-200%);
}

.container.active .toggle-left{
transform: translate(-22.5%,-15%);
}

.toggle-left .left{
text-align: center;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
width: 20vw;
}

.toggle-right{
  right: 0;
  transform: translateX(0);
}

.container.active .toggle-right{
  transform: translateX(200%);
 }

.toggle-right .right{
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 20vw;
}


</style>

