<template>
  <div>
    <span class="icon">
      <img src="https://cashforce.com.br/wp-content/themes/cashforce/assets/images/logo-cashforce.svg" alt="cashforce logo">
    </span>
    <nav class="navigation">
      <ul>
        <li>
          <a href="#">
            <img class="hand" src="../assets/handshake.png" />
            <span >Notas Fiscais</span>
          </a>
        </li>
    </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
  display: flex;
  flex-direction: row;
}

.hand {
  width: 25px;
  height: 25px;
  margin-right: 15px;
  margin-left: 10px;
}

.navigation {
  padding: 15px;
  width: 50vh;
  height: 100vh;

}

.icon {
  padding: 4vh;
  display: flex;
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

.border {
  width: 5px;
  background: #00AA89;
}

</style>
