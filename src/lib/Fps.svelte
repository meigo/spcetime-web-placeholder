<script>
  import { onMount } from 'svelte';

  let fps = 0;
  const times = [];

  onMount(() => {
    let frame;

    function loop() {
      frame = requestAnimationFrame(loop);

      const now = performance.now();
      while (times.length > 0 && times[0] <= now - 1000) {
        times.shift();
      }
      times.push(now);
      fps = times.length;
    }

    loop();

    return () => cancelAnimationFrame(frame);
  });
</script>

<style>
  span {
    position: fixed;
    top: 0;
    left: 0;
    color: #555;
    font-size: 14px;
  }
</style>

<span>{fps} FPS</span>
