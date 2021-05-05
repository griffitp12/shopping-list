<template>
  <div class="sidebar">
    <transition name="slide">
      <div class="sidebar-panel">
        <section class="menu-item not-yet">
          <slot>Login (coming soon)</slot>
        </section>
        <section class="menu-item not-yet">
          <slot @click="sendClearSignal">Clear inCart Items (coming soon)</slot>
        </section>
        <section class="menu-item not-yet">
          <slot>FAQ (coming later)</slot>
        </section>
      </div>
    </transition>
    <div class="sidebar-backdrop" @click="closeSidebarPanel"></div>
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
      this.$emit("closeSidebarPlease");
    },
    sendClearSignal() {
      this.$emit("clearInCartItemsPlease");
    },
  },
};
</script>

<style>
.menu-item {
  color: white;
  font-size: 24px;
  text-align: left;
  height: 35px;
  align-items: center;
  padding: 20px;
  margin: 10px;
  margin-bottom: 40px;
}

.not-yet {
  color: red;
}

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
  background-color: #443730;
  width: 70vw;
  overflow-y: auto;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 999;
  width: 300px;
}
</style>


.sidebar-backdrop {
        background-color: rgba(0,0,0,.5);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        cursor: pointer;
    }

    .sidebar-panel {
        overflow-y: auto;
        background-color: #130f40;
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        z-index: 999;
        padding: 3rem 20px 2rem 20px;
        width: 300px;
    }