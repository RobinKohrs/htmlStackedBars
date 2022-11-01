<script>
  import { current_component, each } from "svelte/internal";

  export let data;
  export let percentages;
  export let valueKey = "value";
  export let width = 400;

  let colors = [
    "#009392",
    "#72aaa1",
    "#b1c7b3",
    "#f1eac8",
    "#e5b9ad",
    "#d98994",
    "#d0587e",
  ];

  let sumAllVals;
  function calcSum(data) {
    console.log(`here`);
    sumAllVals = data
      .map((e) => e[valueKey])
      .reduce((curr, val) => curr + val, 0);
  }

  calcSum(data);
</script>

{#if data && sumAllVals}
  <div class="outer-container relative mx-auto" style:width="100vw">
    <div
      class="slider"
      style="margin: 2rem 50%; transform: translateX(-50%); display: inline-block; width: 400px; background-color: gold; padding: 1rem; border-radius: 1rem;"
    >
      Width
      <input type="range" bind:value={width} min="100" max="800" />
    </div>
    <br />
    <div class="flexbox-outer relative mx-auto" style:width="{width}px">
      <span class="font-bold"
        >Flexbox
        <div class="container flex ">
          {#each data as d, i}
            <div
              style:width="{(d[valueKey] / sumAllVals) * 100}%"
              style:height="100px"
              style:background-color={colors[i]}
            />
          {/each}
        </div>
      </span>
    </div>
    <br />
    <div class="inline-blocks-outer relative mx-auto" style:width="{width}px">
      <span class="font-bold">Inline-block</span>
      <div class="container-inline-divs">
        {#each data as d, i}
          <div
            style="display: inline-block; height: 100px"
            style:width="{(d[valueKey] / sumAllVals) * 100}%"
            style:background-color={Object.assign(colors).pop(1)}
          />
        {/each}
      </div>
    </div>
    <div class="span-outer mx-auto" style:width="{width}px">
      <span class="font-bold">Spans</span>
      <div class="container-spans">
        {#each data as d, i}
          <span
            style="display: inline-block; height: 100px"
            style:width="{(d[valueKey] / sumAllVals) * 100}%"
            style:background-color={Object.assign(colors).pop(2)}
          />
        {/each}
      </div>
    </div>
  </div>
{:else}
  waiting
{/if}

<style lang="scss">
  .container {
    display: flex;
  }
</style>
