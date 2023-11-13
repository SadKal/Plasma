<script>
    import MostSoldGame from "$most_sold/MostSoldGame.svelte";
    import gamesData from '$data/games.json';
    let games = [];
    let randomIndex;
    let randomObject; 
    let i=0; 

    while(i<6){
        randomIndex = Math.floor(Math.random() * gamesData.data.length);
        randomObject = gamesData.data[randomIndex];
        if(!games.includes(randomObject)){
            games.push(randomObject);
            i++;
        }
    }
</script>

<div class="most-sold">
    <div class="most-sold__title">
        Más Vendidos
    </div>
    <div class="most-sold__exhibitor">
        <div class="most-sold__row clearfix">
            {#each games.slice(0,3) as game}
                <MostSoldGame {game}/>
            {/each}
        </div>

        <div class="most-sold__row clearfix">
            {#each games.slice(3,6) as game}
                <MostSoldGame {game}/>
            {/each}
        </div>
    </div>
</div>

<style lang="scss">
    .clearfix::after {
        content: ""; 
        clear: both;
        display: block;
    } 

    .most-sold{
        width: 100%;
        text-align: center;
        margin-top: 15rem;

        animation: fadein var(--seconds-fadein) ease-in;

        @media (max-width: 420px) {
            margin-top: 6rem;
        }
        
        &__title{
            font-family: 'Montserrat';
            color: var(--text-color); 
            font-size: 60px;
            font-weight: bolder;
            letter-spacing: .4rem;

            @media (max-width: 420px) {
                font-size: 20px;
            }
        } 

        &__exhibitor{
            width: 60%;
            margin-top: 4rem;
            position: relative; 
            left: 50%;
            transform: translateX(-50%);

            @media (max-width: 420px) {
                width: 100%;
            }
        }

        &__row{
            &:not(:last-child){
                margin-bottom: 3rem;
            }
            @media (max-width: 420px) {
                &:not(:last-child){
                    margin-bottom: 2rem;
                }
            }
        }

    }
</style>