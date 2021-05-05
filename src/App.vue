<template>
  <div id="app" class="container">
    <Navbar @hamburgerClicked="toggleIsHamburgerClicked" />
    <SideMenu
      v-show="isHamburgerClicked"
      :isHamburgerClicked="isHamburgerClicked"
      @closeSidebarPlease="toggleIsHamburgerClicked"
      @clearInCartItemsPlease="clearInCartItems"
    />
    <ShoppingList :clearSignal="sentClearSignal" />
  </div>
</template>

<script>
import ShoppingList from "./components/ShoppingList.vue";
import Navbar from "./components/Navbar.vue";
import SideMenu from "./components/SideMenu.vue";

export default {
  name: "App",
  components: {
    Navbar,
    ShoppingList,
    SideMenu,
  },

  data: function () {
    return {
      isHamburgerClicked: false,
      sentClearSignal: false
    };
  },

  methods: {
    toggleIsHamburgerClicked() {
      if (this.isHamburgerClicked === true) {
        this.isHamburgerClicked = false;
      } else {
        this.isHamburgerClicked = true;
      }
    },
    clearInCartItems() {
      this.sentClearSignal = true
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: #A5907E;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
