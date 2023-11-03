<script>
    export let game;

</script>

<div class="search-result clearfix"> 
    <div class="search-result__image-container search-result__float">
        <img class="search-result__image" src={game.image}>
    </div>
    <div class="search-result__name search-result__float">
        {game.name}
    </div>
    <div class="search-result__price">
        {game.price}
    </div>
</div>

<style lang="scss">
    .clearfix::after {
        content: ""; 
        clear: both;
        display: block;
    } 
    .search-result{
        box-sizing: border-box;
        width: 100%;
        height: 4vw;
        background-color: var(--search-result-color);
        position: relative;
        padding: .3rem;
        transition: all .3s;

        &:hover{
            cursor: pointer;
            background-color: var(--search-result-hover-color);
        }
        &__name{
            color: var(--text-color);
            font-weight: bolder;
            font-size: 25px;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
        }
        &__image{
            height: 80%;
            width: 100%;
            object-fit: cover;
            border-radius: .3rem;
            position: relative;
            top: 50%;
            transform: translateY(-50%);

            &-container{
                height: 100%;
                width: 8%;
                margin-right: 1.5rem;
            }
        }
        &__price{
            color: var(--text-color);
            font-weight: bolder;
            font-size: 25px;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            float: right;
            margin-right: .5rem;
        }
        &__float{
            float: left;
        }

    }
</style>