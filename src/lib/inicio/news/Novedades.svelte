<script>
    let today = new Date();
    let currentDay = today.getDay();
    let monday = new Date();
    let sunday = new Date();

    //Calculo el lunes. Resto al numero de dia del mes el numero de dias que llevamos de semana menos uno, asi siempre llego al dia del mes que corresponde al lunes
    monday.setDate(today.getDate() - (currentDay - 1));
    sunday.setDate(today.getDate() + (7 - currentDay));

    //Cambio de numero de mes a nombre de mes, para que ponga "noviembre" en vez de "10"(los meses cuenta de 0 a 11)
    const mondayMonth = monday.toLocaleString('default', { month: 'long' });
    const sundayMonth = sunday.toLocaleString('default', { month: 'long' });
</script>

<div class="novedades">
    <div class="novedades__title">
        Novedades
    </div>
    <div class="novedades__subtitle">
        (Semana del {monday.getDate()} de {mondayMonth} al {sunday.getDate()} de {sundayMonth})
    </div>
</div>

<style lang="scss">
    *{
        animation-name: fadein;
        animation-duration: var(--seconds-fadein);
        animation-timing-function: ease-in;
    }
    .novedades{
        
        width: 100%;
        text-align: center;
        font-family: 'Montserrat';
    
        &__title{
            margin-top: 10rem;
            color: var(--text-color);
            font-size: 50px;
            letter-spacing: .4rem;
            font-weight: bolder;
            transition: all .5s;
            @media (min-width: 420px){
                font-size: 70px;
                letter-spacing: .6rem;
            }
            @media (min-width: 720px){
                font-size: 100px;
                letter-spacing: .8rem;
            }
        }
        &__subtitle{
            width: 100%;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            margin-top: .3rem;
            letter-spacing: .1rem;
            color: var(--subtitle-text-color);
            font-size: 10px;
            @media (min-width: 420px){
                margin-top: .7rem;
                letter-spacing: .1rem;
                font-size: 20px;   
            }
            
        }
    }
</style>