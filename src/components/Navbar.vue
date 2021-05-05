<template>
  <div class="navbar">
    <p class="title">Shopping List</p>
    <div class="hamburger-menu" @click="emitHamburgerClicked">
      <div class="bun1"></div>
      <div class="patty"></div>
      <div class="bun2"></div>
    </div>
  </div>
</template>

<script>
/* import SideMenu from "./SideMenu.vue"; */

export default {
  name: "Navbar",
  components: {},
  data: function () {
    return {};
  },

  methods: {
    emitHamburgerClicked() {
      this.$emit("hamburgerClicked");
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #550c18;
  overflow: hidden;
  width: 100%;
  top: 0;
  position: fixed;
}

.hamburger-menu {
  color: white;
  cursor: pointer;
  float: right;
  margin-top: 10px;
  margin-right: 10px;
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
  font-size: 30px;
  margin: 12px
}
</style>