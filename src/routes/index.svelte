<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/env';
  import '../app.css';
  import Seo from '$lib/Seo.svelte';
  import Spcetime from '$lib/Spcetime.svelte';
  import Vignette from '$lib/Vignette.svelte';
  import Particles from '$lib/Particles.svelte';
  import Fader from '$lib/Fader.svelte';
  // import Fps from '$lib/Fps.svelte';

  let state = 0;
  let mounted = false;
  let particlesLoaded = false;

  onMount(() => {
    mounted = true;
  });

  $: {
    if (mounted && particlesLoaded) state = 1;
  }
</script>

<Seo />

<main>
  {#if browser}
    <Particles color="#009FFF" on:particlesLoaded={() => (particlesLoaded = true)} />
  {/if}

  <div id="logo_container">
    <div class="logo">
      {#if state == 2}
        <Spcetime color="#009FFF" />
      {/if}
    </div>
  </div>

  <Vignette />

  {#if state < 2}
    <Fader
      visible={state == 0}
      on:outroend={() => {
        state = 2;
      }} />
  {/if}

  <!-- <Fps /> -->
</main>

<noscript>
  <div id="logo_container">
    <div class="logo">
      <Spcetime color="#009FFF" />
    </div>
  </div>
</noscript>

<style>
  #logo_container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    color: #009fff;
  }

  .logo {
    position: relative;
    max-width: 100%;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 600px) {
    .logo {
      max-width: 600px;
    }
  }
</style>
