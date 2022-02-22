<script>
  import { fade } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';

  export let visible = true;
  export let delay = 250;
  export let duration = 1000;

  const dispatch = createEventDispatcher();
</script>

<style>
  div {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: black;
  }
</style>

{#if visible}
  <div transition:fade={{ duration, delay }} on:outroend={() => dispatch('outroend')} />
{/if}
