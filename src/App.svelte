<script>
  import Barchart from "./components/barchart.svelte";

  let dataRaw = [
    {
      label: "Pizza",
      value: 150,
    },
    {
      label: "Tiramisu",
      value: 100,
    },
    {
      label: "Giotto",
      value: 80,
    },
  ];

  $: data = prepareData(dataRaw);

  function prepareData(data) {
    return data;
  }
</script>

<Barchart {data} percentages={false} />
