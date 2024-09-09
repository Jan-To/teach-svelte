<script>
  import { ticks } from "d3-array";

  // define name, scale & position (export for attributes)
  export let xLabel;
  export let yLabel;
  export let xScale;
  export let yScale;
  export let width;
  export let height;

  let labelMargin = 35;
  let xTickValues;
  let yTickValues;

  $: xTickValues = ticks(xScale.domain()[0], xScale.domain()[1], width > 500 ? 5 : 3);
  $: yTickValues = ticks(yScale.domain()[0], yScale.domain()[1], height > 800 ? 4 : 3);

</script>

<g class="axis x-axis" transform="translate(0,{yScale(yScale.domain()[0])})">
  <!-- <line x1={xScale(xScale.domain()[0])} x2={xScale(xScale.domain()[1])}/> -->
  {#each xTickValues as tick}
    <g class="tick" transform="translate({xScale(tick)},0)">
      <line y1=0 y2={(yScale.range()[1]-yScale.range()[0])}/>
      <text y=16>{tick}</text>
    </g>
  {/each}
  <text x={xScale.range()[1]/2} y={labelMargin*0.8}>{xLabel}</text>
</g>

<g class="axis y-axis" transform="translate({xScale(xScale.domain()[0])},0)">
  <!-- <line y1={yScale(yScale.domain()[1])} y2={yScale(yScale.domain()[0])}/> -->
  {#each yTickValues as tick}
    <g class="tick" transform="translate(0,{yScale(tick)})">
      <line x1=0 x2={(xScale.range()[1]-xScale.range()[0])}/>
      <text x=-6>{tick}</text>
    </g>
  {/each}
  <text x={-labelMargin} y={yScale.range()[0]/2}>{yLabel}</text>
</g>

<style>
  .axis line {
    stroke: gray;
  }

  .axis text {
    fill: gray;
  }

  .x-axis text {
    text-anchor: middle;
  }
  .y-axis text {
    text-anchor: end;
    alignment-baseline: middle;
  }

  .tick line {
    stroke: rgb(232, 232, 232);
  }
</style>