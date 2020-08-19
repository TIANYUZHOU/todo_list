<template>
  <div :class="['todo-item', todo.completed ? 'completed':'']">
    <input type="checkbox" v-model="todo.completed" />
    <label>{{todo.content}}</label>
    <button @click="delItem"></button>
  </div>
</template>

<script>
  //点击选中value为true' v-model双向绑定'completed也变为true（这条为模板处注释）
  export default {
    name: 'TodoItem',
    //接收父组件传递的值(对象)
    props: {
      todo: Object
    },
    methods: {
      delItem() {
        this.$emit('del',this.todo.id)  //传值回父组件（第一个为参数名称，第二个为传回的参数值）
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/theme.styl'
  @import '~styles/mixins.styl'

  .todo-item
    display: flex
    justify-content: space-between
    padding: 10px
    font-size: 24px
    border-top: 1px solid raba(0, 0, 0, 0.1)

    &.completed
      label
        color: #d9d9d9
        text-decoration: line-through

    &:hover
      button:after
        content: 'x'
        font-size: 24px
        color: $lightred
        cursor: pointer

  input
    width: 50px
    height: 30px
    cleanDefaultStyle()

    // &为父元素选择器
    &:after
      content: url('~images/unChecked.svg')

    &:checked:after
      content: url('~images/Checked.svg')

  label
    flex: 1
    transition: color 0.4s

  button
    cleanDefaultStyle()
    width: 40px
    background-color: transparent
</style>