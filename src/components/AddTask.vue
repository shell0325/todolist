<template>
  <div>
    <h1>新規タスクの追加</h1>
    <input type="text" v-model="comment" />
    <input
      type="button"
      value="追加"
      class="button"
      @click="updateTodos(comment)"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      comment: '',
    };
  },
  computed: {
    todos() {
      return this.$store.getters.todos;
    },
  },
  methods: {
    updateTodos(comment) {
      this.$store.dispatch('updateTodos', { comment: comment });
      this.comment = '';
    },
  },
};
</script>

<style scoped>
.button {
  margin-left: 4px;
}
</style>
