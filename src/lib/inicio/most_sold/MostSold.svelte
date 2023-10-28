<script>
    import MostSoldGame from "./MostSoldGame.svelte";
    import gamesData from '../../../data/games.json';
    let games = [];
    let randomIndex;
    let randomObject; 
    let i=0; 
    console.log(gamesData.data.length)
    while(i<10){
        randomIndex = Math.floor(Math.random() * gamesData.data.length);
        randomObject = gamesData.data[randomIndex];
        if(!games.includes(randomObject)){
            games.push(randomObject);
            i++;
        }
    }
</script>

<div class="most_sold">
    Más Vendidos
</div>
<div class="most_sold__exhibitor">
    <div class="row clearfix">
        {#each games.slice(0,3) as game}
            <MostSoldGame {game}/>
        {/each}
    </div>

    <div class="row clearfix">
        {#each games.slice(3,6) as game}
            <MostSoldGame {game}/>
        {/each}
    </div>
</div>

<style lang="scss">
    

    *{
        animation-name: fadein;
        animation-duration: var(--seconds-fadein);
        animation-timing-function: ease-in;
    }


    .clearfix::after {
        content: ""; 
        clear: both;
        display: block;

    } 
    .most_sold{
        width: 100%;
        text-align: center;
        font-family: 'Montserrat';
        margin-top: 15rem;
        color: var(--text-color);
        font-size: 60px;
        font-weight: bolder;
        letter-spacing: .4rem;

        @media (max-width: 420px) {
            font-size: 30px;
            margin-top: 8rem;
        }
    }

    .most_sold__exhibitor{
        width: 60%;
        margin-top: 4rem;
        
        position: relative;
        left: 50%;
        transform: translateX(-50%);

        @media (max-width: 420px) {
            width: 90%;
        }
    }
    .row{
        width: 100%;
        margin-bottom: 5rem;
        
        &:not(:last-child){
            margin-bottom: 2rem;
        }
        @media (max-width: 420px) {
            &:not(:last-child){
                margin-bottom: 2rem;
            }
        }
    }
</style>