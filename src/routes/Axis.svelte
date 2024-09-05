<script>
  import { scaleLinear, axisBottom, axisLeft, select } from "d3";

  // define name and min/max (export to be definable & readable)
  export let name;
  export let min;
  export let max;
  export let left;
  export let right;
  export let where;

  // define scaling operation
  let scale;
  $: if(name && min && max && left && right) {
    scale = scaleLinear([min, max], [left, right])
  }

  // define axis object
  let ax;
  $: if(scale) {
    if (where=="bottom") {
      select(ax).call(axisBottom(scale));
    } else if (where=="left") {
      select(ax).call(axisLeft(scale));
    }
  }
</script>

<g id="axis">
  <g id="x-axis" bind:this={ax} />
  <text x={(right-left)/2} dy=100 font="bold 30px sans-serif">{name}</text>
</g>