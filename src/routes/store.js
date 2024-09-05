import { writable } from "svelte/store";

// stores (e.g. writables) are variables that can be set/updated from everywhere.
export const data = writable([[2,5,3,4],[3,2,4,5]]);
export const attributes = writable(['x','y']);