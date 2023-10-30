<script>
    let isLoading = true;
    let imageSrc = 'src/assets/plasma_icon.png';
  
    function handleLoad() {
      isLoading = false;
      console.log('Image loaded');
    }
  </script>
  
  {#if isLoading}
    <!-- Show a loading indicator or a placeholder image -->
    <img src="src/assets/loading.gif" alt="Loading..." />
  {:else}
    <!-- Show the actual image when it's loaded successfully -->
    <img src={imageSrc} alt="Image" on:load={handleLoad} />
  {/if}