<script>
    import shopGameStore from "$stores/shopGame";

    let game = $shopGameStore.currentShopGame;
</script>

<div class="test">
    {game.name}
</div>

<style lang="scss">
    .test{
        position: absolute;
        top: 50%;
        left: 50%;
    }
</style>