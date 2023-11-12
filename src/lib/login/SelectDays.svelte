<script>
    let days=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
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