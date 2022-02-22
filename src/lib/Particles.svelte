<script>
  import { onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';
  import particlesConfig from '$lib/particlesjs-config.json';

  export let color = 'white';
  export let density = 500;
  export let lineDistance = 150;

  const dispatch = createEventDispatcher();

  particlesConfig.particles.color.value = color;
  particlesConfig.particles.links.color = color;
  particlesConfig.particles.links.distance = lineDistance;
  particlesConfig.particles.number.density.area = density;

  let ParticlesComponent;
  let particlesContainer;

  onMount(async () => {
    const module = await import('svelte-particles');
    ParticlesComponent = module.default;
  });

  function onParticlesLoaded(e) {
    // you can use particlesContainer to call all the Container class (from the core library) methods like play, pause, refresh, start, stop
    particlesContainer = e.detail.particles;
    dispatch('particlesLoaded');
  }

  function onParticlesInit(main) {
    // you can use main to customize the tsParticles instance adding presets or custom shapes
  }
</script>

<style>
  :global(#tsparticles canvas) {
    display: block;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }
</style>

<svelte:component
  this={ParticlesComponent}
  id="tsparticles"
  options={particlesConfig}
  on:particlesLoaded={onParticlesLoaded}
  on:particlesInit={onParticlesInit} />
