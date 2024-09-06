<script>
    import Scatterplot from "./Scatterplot.svelte";
    import { data } from "./store";
</script>

<Scatterplot data={$data} xAttr={Object.keys($data[0])[0]} yAttr={Object.keys($data[0])[1]}/>

<style>

</style>