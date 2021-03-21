<template>
  <div>
    <h1>新規タスクの追加</h1>
    <input type="text" v-model="addcomment" />
    <input
      type="button"
      value="追加"
      class="button"
      @click="UpdateTodos(addcomment)"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      addcomment: "",
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
  methods: {
    UpdateTodos(comment) {
      this.$store.dispatch("UpdateTodos", { comment: comment });
      this.addcomment = "";
    },
  },
};
</script>

<style scoped>
.button {
  margin-left: 4px;
}
</style>