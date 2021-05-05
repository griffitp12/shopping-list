<template>
  <div class="main">
      <form class="input-button-field">
        <input
          type="text"
          name="itemInput"
          class="item-input"
          placeholder="Add new items here"
          v-model="newItem"
        />
        <button for="itemInput" class="input-button" @click="addNewItem">
          Add Item
        </button>
      </form>
    <div v-for="(item, index) in items" :key="item.id" class="shopping-item">
      <p
        :class="item.inCart ? 'in-cart' : ''"
        @click="putItemInCart(index, item.name)"
      >
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

    async addNewItem(e) {
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

.input-button-field {
  font-size: 1em;
  padding: 0.1em;
}

.item-input, .input-button {
    font-size: inherit;
    padding: 2px auto 2px auto;
    margin: 0.1em auto 0.1em auto;
    height: 35px;
    /* the following ensures they're all using the same box-model for rendering */
    -moz-box-sizing: content-box; /* or `border-box` */
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
}

.item-input {
  width: 65%;
  /* height: 45px;
  padding: 0px auto 0pc auto; */
  /* font-size: 18px; */
  /* margin-bottom: 16px; */

  &:focus {
    outline: 0;
  }
}

.input-button {
  border-radius: 0;
  border: 0;
  width: 25%;
  padding: 0px auto 0pc auto;
}

.shopping-item {
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid red;
  padding-inline: 20px;
}

.in-cart {
  text-decoration: line-through;
}
</style>
