<template>
  <div>
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>コメント</td>
          <td>状態</td>
        </tr>
      </thead>
      <tbody v-if="picked === 'all'">
        <tr v-for="(todo, index) in todos" :key="index">
          <td>
            {{ todo.id }}
          </td>
          <td>
            {{ todo.comment }}
          </td>
          <td>
            {{ todo.status }}
          </td>
          <td>
            <button
              :value="todo.id"
              class="button"
              @click="(e) => statustodos(e)"
            >
              {{ todo.todoStatus }}
            </button>
            <button
              :value="todo.id"
              class="button"
              @click="(e) => removetodos(e, todo)"
            >
              削除
            </button>
          </td>
        </tr>
      </tbody>
      <tbody v-else-if="picked === 'doing' || picked === 'done'">
        <tr v-for="(todo, index) in filterData" :key="index">
          <td>
            {{ todo.id }}
          </td>
          <td>
            {{ todo.comment }}
          </td>
          <td>
            {{ todo.status }}
          </td>
          <td>
            <button
              :value="todo.id"
              class="button"
              @click="(e) => statustodos(e)"
            >
              {{ todo.todoStatus }}
            </button>
            <button
              :value="todo.id"
              class="button"
              @click="(e) => removetodos(e, todo)"
            >
              削除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  computed: {
    picked: {
      get() {
        return this.$store.state.picked;
      },
      set(value) {
        this.$store.commit("setPicked", value);
      },
    },
    todos() {
      return this.$store.state.todos;
    },
    filterData() {
      return this.$store.state.filterData;
    },
  },
  methods: {
    ...mapActions(["removetodos", "statustodos", "filterTodos"]),
  },
};
</script>