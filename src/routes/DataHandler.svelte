<script context="module">
  import { data, attributes } from "./store";

  export function changeData() {
    data.set([[20,50,30,40],[30,20,40,50]])
    attributes.set(['a','b'])
  }
</script> 
