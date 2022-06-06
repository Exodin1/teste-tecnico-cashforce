<template>
<div>
    <span class="icon">
      <img src="https://cashforce.com.br/wp-content/themes/cashforce/assets/images/logo-cashforce.svg" alt="cashforce logo">
    </span>

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
      <div class="title">
          <div class="title-table">
            <img class="handTable" src="../assets/handshake2.png" />
            <h5 >Notas Fiscais</h5>
          </div>
          <div class="subtitle">Visualize as notas fiscais que você tem.</div>
          </div>
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
          <tr class="table-tr" v-for="data of orders" :key="data.id">
            <td>{{data.orderNfId}}</td>
            <td>SACADO 001</td>
            <td>CEDENTE 002</td>
            <td>{{new Date(data.emissionDate).toLocaleDateString('pt-BR')}}</td>
            <td class="value-td">R$ {{data.value}}</td>
            <td>{{data.orderStatusBuyer}}</td>
            <td><button class="waves-effect waves-teal btn-flat">Dados do Cedente</button></td>
          </tr>        
        </tbody>
      </table>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from '../services/api.js'

export default {

  name: 'MainComponent',
  data() {
    return {
      buyers: [],
      providers: [],
      orders: [],
    }
  },
  mounted(){
    api.get('/cashforce').then(response => {
      this.buyers = response.data.buyers
      this.providers = response.data.providers
      this.orders = response.data.orders

    })
  }

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

.value-td {
  color: #00AA89;
}

.table-tr {
  border-radius: 8px;
  box-shadow: #E7E9F0 0px 0px 0px 1px;
}

.subtitle {
  color: #727D94;
}

.title-table {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: #021b51;
}

.title {
  padding-bottom: 30px
}


.div-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.div-table {
  width: 75%;
  height: 70vh;
  padding-left: 10vh;
}

.hand {
  width: 25px;
  height: 25px;
  margin-right: 15px;
  margin-left: 10px;
}

.handTable {
  width: 35px;
  height: 30px;
  margin-right: 10px;
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
