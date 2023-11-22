<script>
    
  </script>

<main>
<div class="email">
    <div class="email__uno">
            <div class="email__nameUser">
                <div class="email__title">
                    <h1>Account security</h1>
                    <p>mariirocoa@gmail.com</p>
                </div>
            </div>
    </div> 
    <div class="email_dos">
          
           <div class="email_dos__uno">
            <h1>Change your email</h1> 
               <div class="email_dos__network1">
                   <input type="email" name="" id="" placeholder="Tu nuevo e-mail">
               </div>
               <div class="email_dos__network2">
                   <input type="password" name="" id="" placeholder="Confirma tu nuevo e-mail">
               </div>
               <div class="email_dos__network3">
                   <input type="password" name="" id="" placeholder="Tu contraseña actual">
               </div>
               
                <div class="email_dos__submit">
                    <input type="submit" value="Accept">
                </div>
           </div>
           <div class="email_dos__dos">
            <h1>Change your password</h1> 

               <div class="email_dos__network4">
                   <button >Disviculating my Google account</button>
               </div>
           </div>
           
       </div>
</div>
    </main>

<style lang="scss">
    
    .email{
        float: left;
    }
    .email{
        width: 100%;
        height: 100%;
        color: var(--text-color);
        display: inline-block;        
    }

    .email_dos{
        width: 100%;
        height: 100%;
        color: var(--text-color);
        display: inline-block;
        margin-top: 30px;

        h1{
            margin: 0;
            font-size: 30px;
            margin-bottom: 10px;
        }

        input[type="email"],input[type="password"]{
            width: 80%;
            padding: 15px;
            background: rgba(0,0,0,0.2);
            border: 2px solid var(--text-color);
            border-radius: 5px;
            font-size: 16px;
            box-sizing: border-box;
            margin-bottom: 20px;
            margin-top: 15px;
            color: aliceblue;
        }

        &__uno{
            border-right: 1px solid var(--text-color);
            width: 40%;
            float: left;
        }

        &__dos{
            width: 45%;
            float: left;
            margin-left: 6vw;
        }

        input[type="submit"]{
                margin-left: 25%;
                margin-right: 60%;
                margin-top: 20px;
                margin-bottom: 20px;
                height: 6vh;
                width: 8vw;
                background:var(--text-color);
                color: beige;
                border: none;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0,0,0,.1);
                cursor: pointer;
                font-size: 16px;
                font-weight: 600;
                transition: all 0.5s ease;
            }

            button{
                height: 6vh;
                width: 25vw;
                font-size: 17px;
                background: var(--text-color);
                border: none;
                border-radius: 5px;
                color: beige;
            }

        
    }
    
</style>
