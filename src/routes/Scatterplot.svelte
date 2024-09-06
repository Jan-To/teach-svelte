<script>
  import Coords from "./Coords.svelte";
  import { onMount } from 'svelte';
  import { changeData } from "./DataHandler.svelte";
  import { scaleLinear } from "d3-scale";

  export let data;
  export let xAttr;
  export let yAttr;

  /** @type {SVGSVGElement} */
  let svg;
  let width = 300;
  let height = 150;
  const padding = { top: 50, right: 10, bottom: 40, left: 45 };

  // define data-space to view-space transformation
  $: xScale = scaleLinear(
    [Math.min(...data.map((i) => i[xAttr])), Math.max(...data.map(i => i[xAttr]))],
    [padding.left, width-padding.right]
  )
  $: yScale = scaleLinear(
    [Math.min(...data.map(i => i[yAttr])), Math.max(...data.map(i => i[yAttr]))],
    [height-padding.bottom, padding.top]
  )

  // dynamic resize to available space
  function resize() {
    ({ width, height } = svg.getBoundingClientRect());
  }
  onMount(resize);
</script>

<svelte:window on:resize={resize} />

<div class="chart">
  <svg bind:this={svg}>
    <!-- title -->
    <text class="title" x={padding.left} y={padding.top*0.3}>
      Scatterplot
    </text>
    <!-- subtitle -->
    <text class="subtitle" x={padding.left} y={padding.top*0.7}>
      This is an example text giving more information about this scatterplot
    </text>
    <!-- coordinate system -->
    <Coords xLabel={xAttr} yLabel={xAttr} {xScale} {yScale} {width} {height}/>
    <!-- glyphs -->
     {#each data as d, i}
        <circle cx={xScale(d[xAttr])} cy={yScale(d[yAttr])} stroke="black" r="2.5"/>
     {/each}
  </svg>
</div>

<button on:click={changeData}>Change Data!!!</button>

<style>	
	.chart {
		width: 100%;
		max-width: 640px;
		height: calc(30vh);
		min-height: 280px;
		margin: 0 auto;
	}

  svg {
		width: 100%;
		height: 100%;
	}

  .title {
    font-size: larger;
    font-weight: bold;
  }

  .subtitle {
    font-size: medium;
    fill: gray;
  }
</style>