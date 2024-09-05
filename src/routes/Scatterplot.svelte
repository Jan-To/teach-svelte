<script>
  import { data, attributes } from "./store";
  import Axis from "./Axis.svelte";
  import { onMount } from 'svelte';
  import { changeData } from "./DataHandler.svelte";

  let svg;
  let width = 500;
  let height = 400;

  const padding = { top: 20, right: 40, bottom: 40, left: 25 };

  onMount(resize);

  function resize() {
		({ width, height } = svg.getBoundingClientRect());
	}
</script>

<svelte:window on:resize={resize} />
<div class="chart">
  <svg bind:this={svg} >
    <!-- title -->
    <text x=10 y=10>Scatterplot</text>
    <!-- x-axis -->
    <Axis name={$attributes[0]} min={Math.min(...$data[0])} max={Math.max(...$data[0])} left={padding.left} right={width-padding.right} where="bottom"/>
  </svg>
</div>

<button on:click={changeData}>Change Data!!!</button>

<style>
	.chart {
		width: 90%;
		height: 90%;
	}

  svg {
    width: 100%;
    height: 100%;
  }
</style>