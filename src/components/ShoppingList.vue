<template>
  <div>
    <form>
      <input
        type="text"
        name="itemInput"
        class="item-input"
        placeholder="Add new items here"
        v-model="newItem"
      />
      <button for="itemInput" class="input-button" @click="addItem">Add Item</button>
    </form>
    <div v-for="item in items" :key="item.id" class="shopping-item">
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingList",

  data: function () {
    return {
      newItem: "fafwa",
      idForItem: 4,
      items: [
        {
          id: 1,
          title: "Bananas",
          inCart: "false",
        },
        {
          id: 2,
          title: "Apples",
          inCart: "false",
        },
        {
          id: 3,
          title: "Milk",
          inCart: "false",
        },
      ],
    };
  },

  methods: {
    addItem(e) {
      e.preventDefault();
      console.log("addin")
      const itemToAdd = {
        id: this.idForItem,
        title: this.newItem,
        inCart: "false",
      };
      this.items.push(itemToAdd);
      this.newItem = "";
      this.idForItem++;
    },
  },
};
</script>


<style >
.item-input {
  width: 100%;
  padding: 10px 18px;
  font-size: 18px;
  margin-bottom: 16px;
}

.item-input:focus {
  outline: 0;
}

.shopping-item {
  font-size: 22px;
  text-align: left;
}
</style>
