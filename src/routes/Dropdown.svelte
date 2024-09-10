<script>
	export let text;
  export let options;
  export let variable;

	let isDropdownOpen = false;

	function handleDropdownClick() {
		isDropdownOpen = !isDropdownOpen;
	}

	const handleDropdownFocusLoss = ({ relatedTarget }) => {
		if (relatedTarget instanceof HTMLElement && relatedTarget.className == "dropdown-item") return;
		isDropdownOpen = false;
	}
</script> 

<div class="dropdown is-active" on:focusout={handleDropdownFocusLoss}>
	<div class="dropdown-trigger">
		<button class="button" on:click={handleDropdownClick} >
			{text}
		</button>
	</div>
	<div class="dropdown-menu" id="dropdown-menu" role="menu"
	style:visibility={isDropdownOpen ? 'visible' : 'hidden'}>
		<div class="dropdown-content">
			{#each options as o}
		  		<button class={o==variable ? "dropdown-item is-active": "dropdown-item"} 
					on:click={() => {
							variable = o;
							isDropdownOpen = false;
						}}>
						{o}
					</button>
		  	{/each}
		</div>
	</div>
</div>