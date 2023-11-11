<script>

</script>

<main>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">

<div class="login">
    <div class="login__content">
        <form>
                <h1>Log in</h1>
                    <div class="social-icons">
                    </div>

            <div class="login__data">
                <div class="login__email">
                    <input type="email" placeholder="Email">
                </div>

                <div class="login__password">
                    <input type="password" placeholder="Password">
                </div>
            </div>

            <div class="login__button">
                <button>Sign In</button>
           </div>

            <div class="login__phrase">
                Don't have an account? <a href="#"> Register</a>
            </div>

            <div class="login__bar">
                <span>Or</span>
            </div>

            <div class="login__options">
                <div class="login__google">
                    <button>
                        <i class="fa-brands fa-google-plus-g"></i>                        
                        <span>Login with google</span>
                    </button>
                </div>

                <div class="login__facebook">
                    <button>
                        <i class="fab fa-facebook-f"></i>                      
                        <span>Login with facebook</span>
                    </button>
                </div>

                <div class="login__microsoft">
                    <button>
                        <i class="fa-brands fa-microsoft"></i>
                        <span>Login with microsoft</span>
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>
 
<footer>
    <a href="#">Terms of use</a>
    |
    <a href="">Privacy policy</a>
    </footer>

</main>


   


<style lang="scss">

    footer{
        text-align: center;
        color: beige;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 40px;
        font-family: Montserrat;
        font-weight: 600;
        font-size: 16px;
        a{
            text-decoration: none;
            color:var(--text-color);
        }
    }

    .login{
        width: 100%;
        height: 100%;
        font-family: Montserrat;
        color: var(--text-color);
        text-align: center;
        position: absolute;
        a{
            text-decoration: none;
            
        }
            &__content{
                text-align: center;
                width:320px;
                height: 405px;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                position: relative;
                h1{
                    font-size:var(--title-font);
                    padding: 0px 40px 24px 40px;
                    margin: 0;
                }
            }

            &__phrase{
                font-size: 15px;
                margin-bottom: 10px;
                width: 100%;
            }

            &__data{
                text-align: center;
                margin-bottom: 20px;

            }
             &__email,&__password{
                    margin-bottom:10px;
                    width: 100%;
                    text-align: center;
                    display: inline-block;
                    
                    input{
                        width: 100%;
                        padding: 15px;
                        background: transparent;
                        border: 2px solid var(--text-color);
                        border-radius: 5px;
                        font-size: 16px;
                        box-sizing: border-box;
                    }
                }
        &__button{
            button{
            width: 100%;
            height: 45px;
            background:var(--text-color);
            color: beige;
            border: none;
            margin-bottom: 10px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0,0,0,.1);
            cursor: pointer;
            font-size: 16px;
            font-weight: 600;
            transition: all 0.5s ease;
            font-family: Montserrat;
        }
    }
         
        &__bar{
        position: relative;
        margin-bottom: 20px;

        span{
            position: relative;
            z-index: 1;
        }
        &::before,&::after{
            content: "";
            position: absolute;
            top: 50%; /* Lo coloco a la mitad verticar */
            border-bottom: 2px solid var(--text-color);
            transform: translateY(-50%);/* Centro las barras */
            width: calc(50% - 20px); /* Ajusta el ancho de cada barra , con la mitad del contenedor y le resto 20px*/
            }

    &::before {
        left: 0;/* Lo coloco en el izquierdo */
    }

    &::after {
        right: 0;/* Lo coloco en el derecho */
    }
        

        }

        &__google,&__facebook,&__microsoft{
            button{
                height: 45px;
                width: 100%;
                border-radius: 5px;
                background-color:var(--text-color);
                font-family: Montserrat;
                font-size: 15px;
                font-size: 16px;
                font-weight: 600;
                color: beige;
                margin-bottom: 10px;
            }
        }




       /*  &__google,&__facebook,&__microsoft{
            background-color: var(--text-color);
            height: 45px;
            border-radius: 5px;
            text-align: center;
            line-height: 45px;
            margin-bottom: 10px;
            a{
                color: beige;
                text-decoration: none;
                outline: none;
            }
            
            span{
                text-align: center;
                
            }

            &:hover{
                background-color: var(--game-title-background-color-center);
            }
        } */


    }


</style>