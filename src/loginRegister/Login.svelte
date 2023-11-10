<main>
<div class="container">
    <div class="wrapper">
        <form action="">
            <h1>Login</h1>
            <div class="input-box">
                <input type="text" placeholder="Username" required>
                <i class="bx bxs-lock-alt"></i>
            </div>

            <div class="input-box">
                <input type="password" placeholder="Password" required>
                <i class="bx bxs-lock-alt"></i>
            </div>

            <div class="remember-forgot">
                <label>
                    <input type="checkbox">Remember me?
                </label>
                <a href="#">Forgot password?</a>
            </div>

            <div class="boton">
                <button type="submit" class="btn">Login</button>
            </div>

            <div class="register-link">
                <p>Don't have an account?</p>
                <a href="#">Register</a>
            </div>


        </form>
    </div>
</div>

</main>

<style type="scss">

*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: rgb(209, 51, 100);

}

.container{
    background-size: cover;
    background-position: center;
}


.wrapper{
    width: 40%;
    background: transparent;
    border: 2px solid rgb(209, 51, 100);
    backdrop-filter: blur(20px);
    box-shadow: 0 0 10px rgba(0,0,0,.2);
    margin: 0 auto;
    margin-top: 10%;
    border-radius: 10px;
    padding: 30px 40px;
    color: white;
}

.wrapper h1{
    font-size: 36px;
    text-align: center;
    transition: all 0.5s ease;
}

.wrapper h1:hover{
    font-size: 36px;
    text-align: center;
    color: beige;
}

.wrapper .input-box{
    position: relative;
    width: 100%;
    height: 50px;
    margin: 30px 0;
}

.input-box input{
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    border: 2px solid rgb(209, 51, 100);
    border-radius: 40px;
    font-size: 16px;
    transition: all 0.5s ease;
    padding: 20px 45px 20px 20px;
}

.input-box input:hover{
    border-color: beige;
}

.boton button:hover{
    color: #d13364; /* El color de el icono cuando pases por encima y cmabie a este */
    background-color: white;/* color de el circulo cuando pases por encima */
}

.input-box i{
    position:absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
}

.wrapper .remember-forgot{
    margin: 0 auto;
    margin-bottom: 20px;
}


.remember-forgot label input{
    accent-color: beige;
}

.remember-forgot label input{
    accent-color: beige;
    margin-right: 3px;
}

.remember-forgot a{
    text-decoration: none;
}

.wrapper .btn{
    width: 100%;
    height: 45px;
    background:rgb(209, 51, 100);
    color: beige;
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    transition: all 0.5s ease;

}

.wrapper .register-link{
    font-size: 14.5px;
    text-align: center;
    margin: 20px 0 15px;
}

.register-link p a{
    color: beige;
    text-decoration: none;
    font-weight: 600;
}

.register-link p a:hover{
    text-decoration: underline;
}

.register-link a:hover{
    color: beige;
}

.remember-forgot label{
    margin-right: 300px;
}



</style>