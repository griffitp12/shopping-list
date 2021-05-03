<template>
  <div id="app" class="container">
    <Navbar/>
    <ShoppingList/>
  </div>
</template>

<script>
import ShoppingList from './components/ShoppingList.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    ShoppingList
  },

  data: function() {
    return {
      listItems: []
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

.container {
  margin: 0 auto;
  background-color: rgb(172, 172, 80)
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
