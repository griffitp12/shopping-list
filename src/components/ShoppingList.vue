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
      <button for="itemInput" class="input-button" @click="addItem">
        Add Item
      </button>
    </form>
    <div
      v-for="(item, index) in items"
      :key="item.id"
      :class="inCartTest ? 'in-cart' : ''"
      class="shopping-item" 
    >
      <p @click="putItemInCart(index)" >
        {{ item.title }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingList",

  data: function () {
    return {
      newItem: "",
      idForItem: 4,
      inCartTest: true,
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

      if (this.newItem.trim() === "") {
        this.newItem = "";
        return;
      }

      const itemToAdd = {
        id: this.idForItem,
        title: this.newItem,
        inCart: "false",
      };
      this.items.push(itemToAdd);

      this.newItem = "";

      this.idForItem++;
    },

    putItemInCart(index) {
      if (this.items[index].inCartTest === false){
        this.items[index].inCartTest = true
      } else {
        this.items[index].inCartTest = false
      }
      console.log(this.items[index].inCartTest)
    },
  },
};
</script>


<style lang="scss">
.item-input {
  width: 100%;
  padding: 10px 18px;
  font-size: 18px;
  margin-bottom: 16px;

  &:focus {
    outline: 0;
  }
}

.shopping-item {
  font-size: 24px;
  text-align: left;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.red {
  background-color: red;
}

.in-cart {
    text-decoration: line-through;
}


</style>
