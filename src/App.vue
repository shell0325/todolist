<template>
  <div id="app">
    <task-view></task-view>
    <add-task></add-task>
  </div>
</template>

<script>
import TaskView from './components/TaskView.vue'
import AddTask from './components/AddTask.vue'

export default {
  components:{
    TaskView,
    AddTask
  }
}
</script>

<style>
</style>
