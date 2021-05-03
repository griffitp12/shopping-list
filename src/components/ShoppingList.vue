<template>
  <div>
    <input
      type="text"
      class="item-input"
      placeholder="Add new items here"
      v-model="newItem"
      @keyup.enter="addItem"
    />
    <div v-for="item in items" :key="item.id" class="shopping-item">
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingList',
  data () {
    return {
      newItem: '',
      idForItem: 4,
      items: [
        {
          id: 1, 
          title: 'Bananas',
          inCart: 'false',
        },
        {
          id: 2, 
          title: 'Apples',
          inCart: 'false',
        },
        {
          id: 3, 
          title: 'Milk',
          inCart: 'false',
        }
      ]
    }
  },

  methods: {
    addItem: () => {
      console.log(this.newItem)
      /* const itemToAdd = {
        id: this.idForItem,
        title: this.newItem,
        inCart: 'false'
      }; */
      /* this.items.push(itemToAdd); */
    },
  }
}
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
