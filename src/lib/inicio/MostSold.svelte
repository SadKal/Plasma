<script>

</script>

<div class="most_sold">
    Más Vendidos
</div>
<div class="most_sold_exhibitor">
    <div class="row">
        <div class="col_1_of_3">
            1
        </div>
        <div class="col_1_of_3">
            2
        </div>
        <div class="col_1_of_3">
            3
        </div>
    </div>
</div>

<style lang="scss">
    @import "../../sass/abstracts/variables";

    .most_sold{
        width: 100%;
        text-align: center;
        font-family: 'Montserrat';
        margin-top: 10rem;
        color: $text-color;
        font-size: 60px;
        font-weight: bolder;
        letter-spacing: .4rem;
    }

    .most_sold_exhibitor{
        width: 60%;
        margin-top: 4rem;
        height: 1000px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
    .row{
        width: 100%;
    }
    .col_1_of_3{
        width: calc((100% - (2 * $gutter_horizontal)) / 3);
        height: 400px;
        background-color: red;
        float: left;

        &:not(:last-child){
            margin-right: $gutter_horizontal;
        }
    }
</style>