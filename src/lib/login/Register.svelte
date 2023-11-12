<script>
import SelectDays from "./SelectDays.svelte";
import SelectMonths from "./SelectMonths.svelte";
  import SelectYears from "./SelectYears.svelte";
</script>

<main>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">

    <header>
        <img src="src/assets/plasma_icon_notext.png" alt="logo" class="topbar__logo"/>
    </header>
<div class="register">
    <div class="register__content">
        <form>
                <h1>Register</h1>
                    <div class="social-icons">
                    </div>

            <div class="register__data">

                <div class="register__email">
                    <input type="email" placeholder="Email">
                </div>

                <div class="register__name">
                    <input type="text" placeholder="Name">
                </div>

                <div class="register__username">
                    <input type="text" placeholder="Username">
                </div>

                <div class="register__password">
                    <input type="password" placeholder="Password">
                </div>

                <div class="register__date">
                    <div class="register__day">
                        <SelectDays/>
                    </div>

                    <div class="register__month">
                        <SelectMonths/>
                    </div>

                    <div class="register__year">
                        <SelectYears/>
                    </div>
                </div>
    
            </div>

            
                <div class="register__checkbox">
                    <input type="checkbox" class="styleCheckbox">
                </div>

                <div class="register__text">
                    I have read and accept Plasma's
                    <a href="">Terms of service</a>
                    and
                    <a href="">Pivacy Policy.</a> 
                </div>
            

            <div class="register__button">
                <button>Continue</button>
           </div>

            <div class="register__phrase">
                Do you have an account? <a href="#"> Login</a>
            </div>
            
        </form>
    </div>
</div>
</main>


   


<style lang="scss">

    header{
        img{
            width: 50px;
            height: 50px;
            top: 0;
            left: 50%;
            transform: translate(-50%,0);
            position: absolute;
            padding: 20px;

        }
    }
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

    .register{
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
             &__email,&__password,&__name,&__username{
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

        &__day,&__month,&__year{
            display: inline-block;
            width: 32%;           
        }

        &__checkbox{
            width: 24px;
            height: 24px;
            float: left;

            & > input{
                border: 2px solid var(--text-color);
                background: transparent;
            }
        }

        &__text{
        width: 90%;
        float: right;
        margin-bottom: 20px;
        }

        &__checkbox,&__text{
            display: inline-block;
        }

    }
</style>