<script>
    import { onMount } from "svelte";
    import cacheStore from "$stores/cache";

    export let src;
    export let positionClass;
    export let alt;
    
    let secondClass= "slideshow__img" + positionClass;
    let unloadedClass= secondClass + "--unloaded";

    let placeholderImage= "src/assets/loading.gif";
    let img;
    let loadedImg=false;


    function loadLeftImg(loaded, source) {
        if (!loaded) {
            return ;
        }
        img.src = placeholderImage;
        const tempImg = new Image()
        tempImg.src = source;

        const onImgLoaded = () => {
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


</script>

{#if $cacheStore.cache.includes(src)}
    <img bind:this={img} src={src} alt={alt} class="slideshow__img {secondClass}"/>
{:else}
    <img bind:this={img} src={placeholderImage} alt={alt} class="slideshow__img {secondClass} {unloadedClass}"/>
{/if}


<style lang="scss">
    .slideshow{
        &__img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: relative;
            z-index: 0;

            &--left, &--right{
                cursor: pointer;
                opacity: 50%;
                @media (max-width: 420px){
                    opacity: 40%;
                }
                &--unloaded{
                    animation-name: side_images;
                    animation-duration: var(--seconds-fadein);
                    animation-timing-function: ease-in;
                }
            }
            &--center{                
                clip-path: polygon(5% 0, 100% 0%, 95% 100%, 0% 100%);
                z-index: 2; 
                scale: 140%;
                @media (max-width: 420px){
                    scale: 230%;
                }
                &--unloaded{
                    animation-name: fadein;
                    animation-duration: var(--seconds-fadein);
                    animation-timing-function: ease-in;
                }
            }
        }
    }
    .unloaded{
        &--left, &--right{
                
        }
        &--center{                
                animation-name: fadein;
                animation-duration: var(--seconds-fadein);
                animation-timing-function: ease-in;
        }
    }
</style>