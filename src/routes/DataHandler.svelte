<script>
	import { data } from "./store";

	let count = 0;
	let dataOptions = {
		'0': [
			{ x: 10, y: 8.04 },
			{ x: 8, y: 6.95 },
			{ x: 13, y: 7.58 },
			{ x: 9, y: 8.81 },
			{ x: 11, y: 8.33 },
			{ x: 14, y: 9.96 },
			{ x: 6, y: 7.24 },
			{ x: 4, y: 4.26 },
			{ x: 12, y: 10.84 },
			{ x: 7, y: 4.82 },
			{ x: 5, y: 5.68 }
		],
		'1': [
			{ x: 10, y: 9.14 },
			{ x: 8, y: 8.14 },
			{ x: 13, y: 8.74 },
			{ x: 9, y: 8.77 },
			{ x: 11, y: 9.26 },
			{ x: 14, y: 8.1 },
			{ x: 6, y: 6.13 },
			{ x: 4, y: 3.1 },
			{ x: 12, y: 9.13 },
			{ x: 7, y: 7.26 },
			{ x: 5, y: 4.74 }
		],
		'2': [
			{ x: 10, y: 7.46 },
			{ x: 8, y: 6.77 },
			{ x: 13, y: 12.74 },
			{ x: 9, y: 7.11 },
			{ x: 11, y: 7.81 },
			{ x: 14, y: 8.84 },
			{ x: 6, y: 6.08 },
			{ x: 4, y: 5.39 },
			{ x: 12, y: 8.15 },
			{ x: 7, y: 6.42 },
			{ x: 5, y: 5.73 }
		],
		'3': [
			{ x: 8, y: 6.58 },
			{ x: 8, y: 5.76 },
			{ x: 8, y: 7.71 },
			{ x: 8, y: 8.84 },
			{ x: 8, y: 8.47 },
			{ x: 8, y: 7.04 },
			{ x: 8, y: 5.25 },
			{ x: 19, y: 12.5 },
			{ x: 8, y: 5.56 },
			{ x: 8, y: 7.91 },
			{ x: 8, y: 6.89 }
		]
	}
	function nextDataset() {
		setDataset(count == 3 ? 0 : count+1)
	}

	function setDataset(i) {
		count = i;
		data.set(dataOptions[i.toString()])
	}
	
	// dropdown
	let isDropdownOpen = false;

	function handleDropdownClick() {
		isDropdownOpen = !isDropdownOpen;
	}

	const handleDropdownFocusLoss = ({ relatedTarget, currentTarget }) => {
		console.log(currentTarget, relatedTarget)
		if (relatedTarget instanceof HTMLElement && relatedTarget.className == "dropdown-item") return;
		isDropdownOpen = false;
	}
</script> 

<button class="button" on:click={nextDataset}>next dataset</button>

<div class="dropdown is-active" on:focusout={handleDropdownFocusLoss}>
	<div class="dropdown-trigger">
		<button class="button" on:click={handleDropdownClick} >
			select dataset
		</button>
	</div>
	<div class="dropdown-menu" id="dropdown-menu" role="menu"
	  style:visibility={isDropdownOpen ? 'visible' : 'hidden'}>
		<div class="dropdown-content">
			{#each Object.keys(dataOptions) as opt}
		  		<button class={count==Number(opt) ? "dropdown-item is-active": "dropdown-item"} 
				on:click={() => setDataset(Number(opt))}>
				dataset {opt}</button>
		  	{/each}
		</div>
	</div>
</div>