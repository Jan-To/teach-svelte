<script>
    import Scatterplot from "./Scatterplot.svelte";
    import { data } from "./store";
    import DataHandler from "./DataHandler.svelte";
    import 'bulma/css/bulma.css';
</script>

<div style="height: 20px;" />
<Scatterplot data={$data} xAttr={Object.keys($data[0])[0]} yAttr={Object.keys($data[0])[1]}/>
<DataHandler/>

<style>
    :global(body) {
		max-width: 640px;
		margin: 0 auto;
    }
</style>