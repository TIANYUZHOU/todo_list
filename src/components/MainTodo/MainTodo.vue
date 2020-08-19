<template>
  <div class="main-todo">
    <input
      type="text"
      class="add-todo"
      placeholder="What to do？"
      autofocus
      @keyup.enter="addTodo"
      v-model="content"
    />
    <todo-item v-for="(item,index) in filterData" :key="index" :todo="item" @del="handleDeleteItem"></todo-item>
    <todo-info :total="total" @toggleState="handleToggleState" @clearCompleted="handleClear"></todo-info>
  </div>
</template>


<script>
  import TodoItem from './coms/TodoItem.vue'
  import TodoInfo from './coms/TodoInfo.vue'

  let id = 0

  export default {
    name: 'MainTodo',
    data() {
      return {
        todoData: [],
        content: '',
        total: 0,
        filter: 'all'
      }
    },
    methods: {
      addTodo() {
        if (this.content == '') return
        //在数组（列表）的头部添加一个对象
        this.todoData.unshift({
          id: id++,
          content: this.content,
          completed: false
        })
        this.content = ''
      },
      handleDeleteItem(id) {
        this.todoData.splice(
          this.todoData.findIndex(item => item.id == id),
          1
        )
      },
      handleToggleState(state) {
        this.filter = state
      },
      handleClear() {
        this.todoData = this.todoData.filter(item => item.completed == false)
      }
    },
    //事件监听器
    watch: {
      todoData: {
        deep: true,
        handler() {
          this.total = this.todoData.filter(
            item => item.completed == false
          ).length //filter过滤已完成的元素，返回未完成元素的个数
        } //filter()把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素。
      }
    },
    //属性监听器
    computed: {
      filterData() {
        switch (this.filter) {
          case 'all':
            return this.todoData
            break
          case 'active':
            return this.todoData.filter(item => item.completed == false)
            break
          case 'completed':
            return this.todoData.filter(item => item.completed == true)
            break
        }
      }
    },
    components: {
      TodoItem,
      TodoInfo
    }
  }
</script>


<style lang="stylus" scoped>
  .main-todo
    margin: 0 auto
    width: 600px
    background-color: #fff
    box-shadow: 0 0 5px #666

  .add-todo
    width: 100%
    padding: 16px 16px 16px 36px
    box-sizing: border-box
    font-size: 24px
    font-weight: inherit
    font-family: inhvert
    color: inhert
    border: none
    outline: none
</style>