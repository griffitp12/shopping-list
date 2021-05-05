<template>
  <div class="sidebar">
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
</template>

<script>
export default {
  props: ["isHamburgerClicked"],
  data: () => ({
    isPanelOpen: true,
  }),
  methods: {
    closeSidebarPanel() {
      /* this.isPanelOpen = false */
      this.$emit("sidebarClosed");
    },
  },
};
</script>

<style>
.sidebar-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}

.sidebar-panel {
  height: 100vh;
  position: absolute;
  top: 50%;
  background-color: pink;
  width: 70vw;
}
</style>


/* .sidebar-panel {
  overflow-y: auto;
  background-color: #130f40;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 999;
  padding: 3rem 20px 2rem 20px;
  width: 300px; */