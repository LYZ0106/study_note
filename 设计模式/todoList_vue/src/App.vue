<template>
    <div id="app">
        <ul v-for="(item, index) in todoList">
            <li @click="remove(index)">{{item.text}}</li>
        </ul
        <input type="text" v-model="text">
        <button @click="add">确认</button>
    </div>
</template>

<script>
  import store from './data_store.js'

  const TODO_LIST = '__todoList__'
  export default {
    data() {
      return {
        text: '',
        todoList: store.get(TODO_LIST, [])
      }
    },

    methods: {
      add() {
        let val = this.todoList.push({
          id: Number(new Date()),
          text: this.text && this.text.trim()
        })
        this.text = ''
      },
      remove(index) {
        this.todoList.splice(index, 1)
      }
    },
    watch: {
      todoList() {
        store.set(TODO_LIST, this.todoList)
      }
    }
  }
</script>
