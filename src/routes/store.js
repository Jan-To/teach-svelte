import { writable } from "svelte/store";

// stores (e.g. writables) are variables that can be set/updated from everywhere.
export const data = writable([]);