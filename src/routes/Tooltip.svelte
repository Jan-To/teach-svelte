<script>
    import { fade } from 'svelte/transition';
    export let data;
    export let xScale;
    export let yScale;
    export let xAttr;
    export let yAttr;

    let width = 90;

    $: x = xScale(data[xAttr]);
    $: y = yScale(data[yAttr]);

    $: xPos = (x + width) < xScale.range()[1] ? x : x - width;
</script>

<div class='Tooltip' in:fade={{duration:200}} out:fade={{duration:200}} 
 style="position:absolute; left:{xPos}px; top:{y}px; width: {width-12}px">
    <p><b>{xAttr}:</b> {data[xAttr]}<br><b>{yAttr}:</b> {data[yAttr]} </p>
</div>

<style>
    .Tooltip {
        padding: 6px;
        background: white;
        border: 1px solid gray;
        pointer-events: none;
        transition: top 300ms ease, left 300ms ease, opacity 300ms ease;
    }

    p {
        margin-block: 0;
        display:inline;
    }
</style>