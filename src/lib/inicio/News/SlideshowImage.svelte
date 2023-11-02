<script>
    import { onDestroy, onMount } from "svelte";

    export let src;
    export let positionClass;
    export let alt;

    let placeholderImage= "src/assets/loading.gif";
    let img;
    let loadedImg=false;

    //console.log(src)

    function loadLeftImg(loaded, source) {
        if (!loaded) {
            return ;
        }
        console.log(alt + " " + img.src)
        img.src = placeholderImage;
        const tempImg = new Image()
        tempImg.src = source;
        console.log(tempImg.src)

        const onImgLoaded = () => {
            img.src = tempImg.src;
            console.log(alt + " 2: " + img.src)
            tempImg.removeEventListener('load', onImgLoaded);            
        }

        tempImg.addEventListener('load', onImgLoaded);

        //Era esta linea de abajo la que daba problemas
        //return onImgLoaded();
    }

    let removeLoad;

    $: src && loadLeftImg(loadedImg, src);
    /*$: removeLoad =  loadLeftImg(loadedImg, src);*/
    //$: src && removeLoad && removeLoad();

    onMount(() => {
        loadedImg = true;  
        loadLeftImg(loadedImg, src);
    }); 
    onDestroy(() => {
        //removeLoad && removeLoad();
    });
</script>

<img bind:this={img} src={placeholderImage} alt="Loading..." class="slideshow__img {positionClass}"/>

<style lang="scss">
    .slideshow{
        &__img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: relative;

            &--left, &--right{
                //Numeros tan especificos para que al cargar la animación no hagan overlapping en opacidades bajas
                animation-name: side_images;
                animation-duration: var(--seconds-fadein);
                animation-timing-function: ease-in;
                cursor: pointer;
                opacity: 50%;
                @media (max-width: 420px){
                    opacity: 40%;
                }
            }
            &--center{                
                clip-path: polygon(5% 0, 100% 0%, 95% 100%, 0% 100%);
                animation-name: fadein;
                animation-duration: var(--seconds-fadein);
                animation-timing-function: ease-in;
                z-index: 2;
                scale: 140%;
                @media (max-width: 420px){
                    scale: 230%;
                }
            }
        }
    }
</style>