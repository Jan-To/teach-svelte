<script>
    import Scatterplot from "./Scatterplot.svelte";
    import { data } from "./store";
    import { changeData } from "./DataHandler.svelte";
</script>

<Scatterplot data={$data} xAttr={Object.keys($data[0])[0]} yAttr={Object.keys($data[0])[1]}/>
<button on:click={changeData}>Change Data!!!</button>


<style>
    :global(body) {
		max-width: 640px;
		margin: 0 auto;
    }
</style>