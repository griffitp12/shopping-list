<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <header class="modal-header">
          <slot name="header"> Delete this item? </slot>
        </header>

        <section class="modal-body">
          <slot name="body">{{this.selectedItem.name}}</slot>
        </section>

        <footer class="modal-footer">
          <button type="button" class="btn-red" @click="deleteClose">
            Yah
          </button>
          <button type="button" class="btn-gray" @click="close">Nah</button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "DeleteModal",
  data: function () {
    return {
      itemName: ""
    };
  }, 
  created() {
    this.itemName = this.selectedItem.name
  },
  props: ["selectedItem"],
  methods: {
    close() {
      this.$emit("close");
    },
    deleteClose() {
      this.$emit("deleteClose");
    },
  },
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #550C18;
  justify-content: space-between;
}

.modal-body {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #550C18;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-red {
  color: white;
  width: 45%;
  float: left;
  background: #550C18;
  border: 2px solid black;
  border-radius: 2px;
}

.btn-gray {
  color: white;
  width: 45%;
  margin-left: auto;
  background: #443730;
  border: 2px solid black;
  border-radius: 2px;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .5s ease;
}
</style>