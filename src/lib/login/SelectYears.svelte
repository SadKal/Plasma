<script>
let years = Array.from({ length: 101 }, (_, i) => 2023 - i); //Lo que quiero hacer es me vayan pasando los años y le doy una longitud para que no sea infinito y la _ es un parametro de la funcion que no uso.

</script>

<select >
    {#each years as year(year) }
        <option value="{year}">{year}</option>
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