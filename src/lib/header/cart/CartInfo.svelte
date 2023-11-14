<script>
    import cartStore from "$stores/cart";
    import CartGame from './CartGame.svelte';
</script>

<div class="cart-info" class:active={$cartStore.cartActive}>
    <div class="cart-info__games">
        {#each $cartStore.gamesInCart as game }
            <CartGame {game}/>
        {/each}
    </div>
    <div class="cart-info__total">

    </div>
</div>

<style lang="scss">

    .cart-info{
        box-sizing: border-box;
        position: absolute;
        cursor: default;

        opacity: 0;
        right: 50%;
        top: 0;
        width: 0;
        height: 0;
        transition: all .3s;
        overflow: auto;

        &.active{
            opacity: 100%;
            right: 50%;
            top: 150%;
            background-color: var(--cart-bg-color);
            width: 32rem;
            height: 24rem;
            border: 3px ridge var(--text-color);
            padding: 1rem;
            box-shadow: 5px 5px 5px .5px black;
        }
    }
</style>