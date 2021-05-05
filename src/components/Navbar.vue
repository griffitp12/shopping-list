<template>
  <div class="navbar">
    <SideMenu v-show="isHamburgerClicked" />
    <div class="hamburger-menu" @click="showSidebar">
      <div class="bun1"></div>
      <div class="patty"></div>
      <div class="bun2"></div>
    </div>
    <p class="title">Meg's List</p>
  </div>
</template>

<script>
import SideMenu from "./SideMenu.vue";

export default {
  name: "Navbar",
  components: {
    SideMenu,
  },
  data: function () {
    return {
      isHamburgerClicked: false,
    };
  },

  methods: {
    showSidebar() {
        console.log("hamburger clicked", this.isHamburgerVisible)
      this.isHamburgerVisible = true;
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: blue;
  overflow: hidden;
  width: 100%;
  top: 0;
  position: fixed;
}

.hamburger-menu {
  color: white;
  display: inline-block;
  cursor: pointer;
  left: 5px;
}

.bun1,
.patty,
.bun2 {
  width: 35px;
  height: 4px;
  background-color: white;
  margin: 6px 0;
  transition: 0.4s;
}

.title {
  display: inline-block;
  text-align: center;
  color: white;
  font-size: 20px;
}
</style>