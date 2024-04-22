<script lang="ts">
  let rates: any;
  let fromCur: string = 'USD';
  let toCur: string = 'RUB';
  let fromPrice: number = 0;
  let toPrice: number = 0;
  const getData = async () => {
    const response = await fetch('https://v6.exchangerate-api.com/v6/33885dfc6108ae643a7ea638/latest/USD');
    const data = await response.json();
    rates = data.conversion_rates
  }
  getData()

  const onChangeSelectFrom = (e: any) => {
    fromCur = e.currentTarget.value
    //
    let price =  fromPrice / rates[fromCur]
    toPrice = (price * rates[toCur]).toFixed(2)
  }

  const onChangeSelect = (e: any) => {
    toCur = e.currentTarget.value
    //
    let price = toPrice / rates[toCur]
    fromPrice = (price * rates[fromCur]).toFixed(2)
  }

  const onChangeInputFrom = (e: any) => {
    fromPrice = +e.currentTarget.value
    let price =  +e.currentTarget.value / rates[fromCur]
    toPrice = (price * rates[toCur]).toFixed(2)
  }

  const onChangeInputTo = (e: any) => {
    toPrice = +e.currentTarget.value
    let price =  +e.currentTarget.value / rates[toCur]
    fromPrice = (price * rates[fromCur]).toFixed(2)
  }

</script>

<main class="main">
  <span>Конвертер валют</span>
  <div class="convert">
    <div class="block">
      <select value={fromCur} on:change={(e) => onChangeSelectFrom(e)}>
        <option>USD</option>
        <option>RUB</option>
        <option>EUR</option>
      </select>
      <input min={0} value={fromPrice} on:change={(e)=>onChangeInputFrom(e)} class="input" type="number"/>
    </div>
    <div class="block">
      <select value={toCur} on:change={(e) => onChangeSelect(e)}>
        <option>RUB</option>
        <option>USD</option>
        <option>EUR</option>
      </select>
      <input min={0} value={toPrice} on:change={(e) => onChangeInputTo(e)} class="input" type="number"/>
    </div>
  </div>
</main>

<style>
  .block {
    display: flex;
    flex-direction: column;
    background: #535bf2;
    padding: 10px 10px 10px;
  }

  .convert {
    display: flex;
    background: #535bf2;
  }

  .main {
    display: flex;
    flex-direction: column;
    background: #535bf2;
  }

  .input {
    margin-top: 10px;
  }
</style>
