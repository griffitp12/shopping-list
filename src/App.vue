<template>
  <div id="app" class="container">
    <Navbar @hamburgerClicked="toggleIsHamburgerClicked" />
    <div class="sidebar" :class="this.isHamburgerClicked ? 'sidebar-slid' : ''">
      <transition name="slide">
        <div class="sidebar-panel">
          <slot></slot>
        </div>
      </transition>
      <div
        class="sidebar-backdrop"
        @click="closeSidebarPanel"
        v-if="isPanelOpen"
      ></div>
    </div>
    <ShoppingList />
  </div>
</template>

<script>
import ShoppingList from "./components/ShoppingList.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
    ShoppingList,
  },

  data: function () {
    return {
      listItems: [],
      isHamburgerClicked: false,
    };
  },

  methods: {
      toggleIsHamburgerClicked() {
        console.log("isHamburgerClicked?")
        this.isHamburgerClicked = true
      }
    }
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: rgb(172, 172, 80);
}

.sidebar {
  background-color: black;
  left: -70%;
  width: 70vw;
  height: 100vh;
  position: absolute;
  top: 0;
  transition: ease-in-out 1s
}

.sidebar-slid {
  left: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
