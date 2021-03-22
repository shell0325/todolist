<template>
  <div>
    <h1>ToDoリスト</h1>
    <input
      type="radio"
      value="all"
      id="radio1"
      name="status"
      @click="filterTodos()"
      v-model="picked"
    />
    <label>全て</label>
    <input
      type="radio"
      id="radio2"
      value="doing"
      name="status"
      @click="filterTodos()"
      v-model="picked"
    />
    <label>作業中</label>
    <input
      type="radio"
      id="radio3"
      value="done"
      name="status"
      @click="filterTodos()"
      v-model="picked"
    />
    <label>完了</label>
    <table-task></table-task>
  </div>
</template>

<script>
import TableTask from './TableTask.vue';
import { mapActions } from 'vuex';
export default {
  components: {
    TableTask,
  },
  computed: {
    comment() {
      return this.$store.state.comment;
    },
    filterData() {
      return this.$store.state.filterData;
    },
    status: {
      get() {
        return this.$store.state.status;
      },
      set(status) {
        this.$store.commit('changeTodos', status);
      },
    },
    picked: {
      get() {
        return this.$store.state.picked;
      },
      set(value) {
        this.$store.commit('setPicked', value);
      },
    },
  },
  methods: {
    ...mapActions(['filterTodos']),
  },
};
</script>

<style scoped>
.button {
  margin-right: 4px;
}
</style>
