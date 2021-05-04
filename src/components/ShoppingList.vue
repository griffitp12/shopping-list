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
      <p @click="putItemInCart(index)">
        {{ item.name }}
      </p>
      <div class="change-icon">≜</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingList",

  data: function () {
    return {
      newItem: "",
      items: [],
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
              allItemNames 
              }`,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            return res.data.allItemNames;
          });
        this.items = this.addItemsFromInitList(initItems)
      } catch (err) {
        console.error(err);
      }
    },

    addItemsFromInitList(arr) {
      const result = []
      for (let i = 0; i < arr.length; i++) {
        let itemObj = {
          id: i,
          name: arr[i],
          inCart: false,
        }
        result.push(itemObj);
      }
      return result
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
            query: `mutation{
              addItem(name: ${this.newItem})
              }`,
          }),
        })
      } catch (err) {
        console.error(err);
      }
      const itemToAdd = {
        id: this.items.length,
        name: this.newItem,
        inCart: false,
      };
      this.items.push(itemToAdd);
      this.newItem = "";
      this.idForItem ++;
    },

    putItemInCart(index) {
      if (this.items[index].inCart === false) {
        this.items[index].inCart = true;
      } else {
        this.items[index].inCart = false;
      }
    },
  },
};
</script>


<style lang="scss">
.main {
  margin-top: 60px;
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
}

.change-icon {
  background-color: red;
}

.in-cart {
  text-decoration: line-through;
}
</style>
