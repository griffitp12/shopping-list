<template>
  <div class="main">
    <form>
      <input
        type="text"
        name="itemInput"
        class="item-input"
        placeholder="Add new items here"
        v-model="newItem"
      />
      <button for="itemInput" class="input-button" @click="addItem">
        Add Item
      </button>
    </form>
    <div
      v-for="(item, index) in items"
      :key="item.id"
      :class="item.inCart ? 'in-cart' : ''"
      class="shopping-item"
    >
      <p @click="putItemInCart(index, item.name)">
        {{ item.name }}
      </p>
      <div class="change-icon" @click="showModal(item.id, item.name)">
        &times;
      </div>
      <DeleteModal
        :selectedItem="selectedItem"
        v-show="isModalVisible"
        @close="closeModal()"
        @deleteClose="closeModalAndDelete(index, index.item)"
      />
    </div>
  </div>
</template>

<script>
import DeleteModal from "./DeleteModal.vue";

export default {
  name: "ShoppingList",
  components: {
    DeleteModal,
  },
  data: function () {
    return {
      newItem: "",
      items: [],
      isModalVisible: false,
      selectedItem: {},
    };
  },

  mounted() {
    this.loadItems();
  },

  methods: {
    async loadItems() {
      try {
        const initItems = await fetch("/graphql?", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `{
              allItems {
                name
                id
              } 
              }`,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            return res.data.allItems;
          });
        this.items = this.addItemsFromInitList(initItems);
      } catch (err) {
        console.error(err);
      }
    },

    addItemsFromInitList(arr) {
      const result = [];
      for (let item of arr) {
        let itemObj = {
          id: item.id,
          name: item.name,
          inCart: false,
        };
        result.push(itemObj);
      }
      return result;
    },

    async addItem(e) {
      e.preventDefault();
      if (this.newItem.trim() === "") {
        this.newItem = "";
        return;
      }

      try {
        await fetch("/graphql?", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `mutation {
              addItem(name: "${this.newItem}")
              }`,
          }),
        });
      } catch (err) {
        console.error(err);
      }
      this.loadItems();
      this.newItem = "";
      this.idForItem++;
    },

    putItemInCart(index) {
      if (this.items[index].inCart === false) {
        this.items[index].inCart = true;
      } else {
        this.items[index].inCart = false;
      }
    },

    showModal(id, item) {
      this.selectedItem.name = item;
      this.selectedItem.id = id;
      this.isModalVisible = true;
    },

    closeModal() {
      this.isModalVisible = false;
      this.selectedItem = {};
    },

    async closeModalAndDelete() {
      this.isModalVisible = false;
      try {
        await fetch("/graphql?", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `mutation {
              removeItem(id: ${this.selectedItem.id} name: "${this.selectedItem.name}")
              }`,
          }),
        });
      } catch (err) {
        console.error(err);
      }
      this.loadItems();
      this.selectedItem = {};
    },
  },
};
</script>


<style lang="scss">
.main {
  margin-top: 70px;
}
.item-input {
  width: 75%;
  height: 45px;
  padding: 0px auto 0pc auto;
  font-size: 18px;
  /* margin-bottom: 16px; */

  &:focus {
    outline: 0;
  }
}

.input-button {
  border-top: 2px;
  width: 25%;
  height: 45px;
  padding: 0px auto 0pc auto;
}

.shopping-item {
  font-size: 24px;
  text-align: left;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid red;
  padding-inline: 10px;
}

.in-cart {
  text-decoration: line-through;
}
</style>
