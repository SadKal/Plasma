<script>
    import user from "../../../../data/testuser.json"


    let games = Object.values(user.gamesOwned)
    games
</script>

<!-- {#each {length: Object.values(user.gamesOwned).length} as game}
    <div style='background-image: {game.image};'></div>
{/each} -->

{#each games as game}
    <div class="gamelist__thumbnail" style="background-image: url('{game.cover}');" >&nbsp;</div>
{/each}

<style>
    .gamelist__thumbnail{
        background-color: aquamarine;
        height: 275px;
        width: 225px;
        display: inline-block;
        margin-left: 5px;
    }
</style>