<template>
  <div class="todo-info">
    <span class="total">{{total}} item left</span>
    <div class="tabs">
      <a
        :class="['btn','primary','boder', state == item ? 'actived':'']"
        v-for="(item,index) in states"
        :key="index"
        @click="toggleState(item)"
      >{{item}}</a>
    </div>
    <button class="btn info" @click="clearCompleted">Clear Completed</button>
  </div>
</template>


<script>
  export default {
    name: 'TodoInfo',
    props: {
      total: Number
    },
    data() {
      return {
        states: ['all', 'active', 'completed'],
        state: 'all'
      }
    },
    methods: {
      toggleState(state) {
        this.state = state
        this.$emit('toggleState', state)
      },
      clearCompleted() {
        this.$emit('clearCompleted')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/theme.styl'
  @import '~styles/mixins.styl'

  .todo-info
    display: flex
    justify-content: space-between
    font-weight: 400
    padding: 5px 10px
    line-height: 30px
    border-top: 1px solid rgba(0, 0, 0, 0.1)

    .total
      color: $red

    .tabs
      display: flex
      justify-content: space-between
      width: 200px

    .btn.primary.boder // 类选择器连在一起表示同时符合
      primaryBorderBtn()

      &.actived
        primaryBtn()

    .btn.info
      infoBtn()
</style>