<script>
    import { onDestroy, onMount } from "svelte";

    export let src;
    export let positionClass;
    export let alt;
    export let cache;
    let secondClass= "slideshow__img" + positionClass;
    let unloadedClass= "unloaded__" + positionClass;

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
            if (!cache.includes(source)){
                cache.push(source);
            }
            tempImg.removeEventListener('load', onImgLoaded);             
        }

        tempImg.addEventListener('load', onImgLoaded);
    }

    $: src && loadLeftImg(loadedImg, src);

    onMount(() => {
        loadedImg = true;  
        if(cache.includes(src)){
            img.src=src;
        }
        else{
            loadLeftImg(loadedImg, src);
        }
    }); 


</script>

{#if cache.includes(src)}
    <img bind:this={img} src={src} alt="Loading..." class="slideshow__img {secondClass}"/>
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
    .unloaded{
        &--left, &--right{
                animation-name: side_images;
                animation-duration: var(--seconds-fadein);
                animation-timing-function: ease-in;
        }
        &--center{                
                animation-name: fadein;
                animation-duration: var(--seconds-fadein);
                animation-timing-function: ease-in;
        }
    }
</style>