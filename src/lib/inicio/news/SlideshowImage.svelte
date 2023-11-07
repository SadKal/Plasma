<script>
    import { onDestroy, onMount } from "svelte";
    import cacheStore from "$stores/cache";

    export let src;
    export let alt;
    export let position;

    let destroyed = false;

    let secondClass = 'slideshow__img' + position; 

    let placeholderImage= "src/assets/loading.gif";
    let img;
    let loadedImg=false;

    function loadLeftImg(loaded, source) {
        if (!loaded) {
            return ;
        }
        const tempImg = new Image();
        tempImg.src = source;

        const onImgLoaded = () => {
            if (destroyed) {
                return ;
            }
            img.src = tempImg.src;
            if (!$cacheStore.cache.includes(source)){
                $cacheStore.cache.push(source);
            }
            tempImg.removeEventListener('load', onImgLoaded);             
        } 
        tempImg.addEventListener('load', onImgLoaded);
    }

    $: src && loadLeftImg(loadedImg, src);

    onMount(() => {
        loadedImg = true;
            if($cacheStore.cache.includes(src)){
            img.src=src;
            }
            else{
                loadLeftImg(loadedImg, src);
            } 
    }); 
    onDestroy(() => {
        destroyed=true;
    });

</script>

{#if $cacheStore.cache.includes(src)}
    <img bind:this={img} src={src} alt={alt} class="slideshow__img {secondClass}"/>
{:else}
    <img bind:this={img} src={placeholderImage} alt={alt} class="slideshow__img {secondClass}"/>
{/if}


<style lang="scss">
    .slideshow{
        &__img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: relative;
            z-index: 0;

            &--side{
                cursor: pointer;
                opacity: 50%;
                @media (max-width: 420px){
                    opacity: 40%;
                }
            }
            &--center{           
                clip-path: polygon(5% 0, 100% 0%, 95% 100%, 0% 100%);
                z-index: 2; 
                scale: 140%;
                @media (max-width: 420px){
                    scale: 230%;
                }
            }
        }
    }

</style>