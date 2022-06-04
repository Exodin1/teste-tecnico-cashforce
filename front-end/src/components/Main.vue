<template>
<div>
    <span class="icon">
      <img src="https://cashforce.com.br/wp-content/themes/cashforce/assets/images/logo-cashforce.svg" alt="cashforce logo">
    </span>
</div>
<div class="div-nav">
    <nav class="navigation">
      <ul>
        <li>
          <a>
            <img class="hand" src="../assets/handshake.png" />
            <span >Notas Fiscais</span>
          </a>
        </li>
    </ul>
    </nav>
    <div class="div-table">
          <table>
        <thead>
          <tr>
              <th>NOTA FISCAL</th>
              <th>SACADO</th>
              <th>CEDENTE</th>
              <th>EMISSÃO</th>
              <th>VALOR</th>
              <th>STATUS</th>
          </tr>
        </thead>

        <tbody>
          <tr class="table-tr">
            <td>123</td>
            <td>SACADO 001</td>
            <td>CEDENTE 002</td>
            <td>01/01/2019</td>
            <td>R$ 1.000,00</td>
            <td>RECEBIDO</td>
            <td><button class="waves-effect waves-teal btn-flat">Dados do Cedente</button></td>
          </tr>
          <tr class="table-tr">
            <td>123</td>
            <td>SACADO 001</td>
            <td>CEDENTE 002</td>
            <td>01/01/2019</td>
            <td>R$ 1.000,00</td>
            <td>RECEBIDO</td>
            <td><button class="waves-effect waves-teal btn-flat">Dados do Cedente</button></td>
          </tr>
          <tr class="table-tr">
            <td>123</td>
            <td>SACADO 001</td>
            <td>CEDENTE 002</td>
            <td>01/01/2019</td>
            <td>R$ 1.000,00</td>
            <td>RECEBIDO</td>
            <td><button class="waves-effect waves-teal btn-flat">Dados do Cedente</button></td>
          </tr>
          
        </tbody>
      </table>
      </div>
    </div>
</template>

<script>
export default {
  name: 'MainComponent',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
  display: flex;
  flex-direction: row;
}

table {
  width: 100%;
}

button {
  color: #00AA89;
}

a {
  color: #00AA89;
  height: 5vh;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
}

th {
  color: #A0A7B7;
  font-weight: normal;
  font: 100%/.5 sans-serif;
}

.table-tr {
  border-radius: 8px;
  box-shadow: #A0A7B7 0px 0px 0px 1px;
}

.div-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.div-table {
  width: 60%;
  height: 50vh;
  padding-left: 10vh;
}

.hand {
  width: 25px;
  height: 25px;
  margin-right: 15px;
  margin-left: 10px;
}

.navigation {
  background-color: #FBFDFE;
  padding: 15px;
  width: 50vh;
  height: 100vh;

}

.icon {
  width: 100%;
  height: 15vh;
  box-shadow: 0px 0px 3px #cecece;
  padding: 4vh;
  display: flex;
}

</style>
