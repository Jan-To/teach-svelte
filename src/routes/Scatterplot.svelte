<script>
  import Coords from "./Coords.svelte";
  import { onMount } from 'svelte';
  import { scaleLinear } from "d3-scale";
  import Tooltip from "./Tooltip.svelte";

  export let data;
  export let xAttr;
  export let yAttr;

  /** @type {SVGSVGElement} */
  let svg;
  let width = 300;
  let height = 150;
  const padding = { top: 50, right: 10, bottom: 40, left: 45 };

  let hoveredData;

  // define data-space to view-space transformation
  $: xMin = Math.min(...data.map((i) => i[xAttr]));
  $: xMax = Math.max(...data.map((i) => i[xAttr]));
  $: yMin = Math.min(...data.map((i) => i[yAttr]));
  $: yMax = Math.max(...data.map((i) => i[yAttr]));

  let viewPadding = 0.05;
  $: xScale = scaleLinear(
    [xMin - viewPadding*(xMax-xMin), xMax + viewPadding*(xMax-xMin)],
    [padding.left, width-padding.right]
  )
  $: yScale = scaleLinear(
    [yMin - viewPadding*(yMax-yMin), yMax + viewPadding*(yMax-yMin)],
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
  {#if hoveredData}
    <Tooltip data={hoveredData} {xScale} {yScale} {xAttr} {yAttr} />
  {/if}
  <svg bind:this={svg}>
    <!-- title -->
    <text class=title x={padding.left} y={padding.top*0.3}>
      Scatterplot
    </text>
    <!-- subtitle -->
    <text class=subtitle x={padding.left} y={padding.top*0.7}>
      This is an example text giving more information about this scatterplot
    </text>
    <!-- coordinate system -->
    <Coords xLabel={xAttr} yLabel={xAttr} {xScale} {yScale} {width} {height}/>
    <!-- glyphs -->
     {#each data as d}
        <circle class=glyph cx={xScale(d[xAttr])} cy={yScale(d[yAttr])}  stroke=black 
        r={hoveredData && hoveredData==d ? 7 : 4}
        opacity={hoveredData ? hoveredData==d ? 1 : 0.5 : 1}
        on:mouseenter={() => {hoveredData = d;}}
        on:mouseleave={() => {hoveredData = null;}}
        on:focus={() => {hoveredData = d;}} role=listitem/> <!-- accessability options-->
     {/each}
  </svg>
</div>

<style>	
	.chart {
		width: 100%;
		height: 30vh;
		min-height: 300px;
    position: relative;
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

  .glyph {
    transition: opacity 300ms ease, r 300ms ease, cx 200ms ease, cy 200ms ease;
  }
</style>