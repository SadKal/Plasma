<script>
    let days = Array.from({ length: 31 }, (_, i) => 31 - i); ;
</script>

<select>
    {#each days as day (day)}
    <option value="{day}">{day}</option>
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
                }
</style>