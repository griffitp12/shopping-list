<template>
  <div>
    <input type="text" class="item-input" placeholder="Add new items here" v-model="newItem">
    Shopping List goes here
  </div>
   
</template>

<script>
export default {
  name: 'ShoppingList',
  data () {
    return {
      newItem: '',
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

</style>
