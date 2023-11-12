<script>
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
</script>

<select>
    {#each months as month(month)}
    <option value="{month}">{month}</option>
    {/each}
</select>

<style>
    select{
        height: 45px;
                width: 100%;
                border-radius: 5px;
                background:transparent;
                border: 2px solid var(--text-color);
                text-align: center;
                font-family: Montserrat;
                font-size: 15px;
                font-size: 16px;
                font-weight: 600;
                color: gray;
                margin-right: 10px;
    }
</style>