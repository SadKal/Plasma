<script>
    export let game;
</script>

<div class="cart-game">
    <div class="cart-game__cover">
        <img class="cart-game__img" src={game.cover} >
    </div>
</div>

<style lang="scss">
    .cart-game{
        height: 5rem;
        width: 100%;
        padding: .2rem;
        &__cover{
            height: 100%;
            width: 15%;
        }
        &__img{
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
</style>