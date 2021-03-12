import { mapGetters, mapActions } from "vuex";

export default {
  name: 'todo-list',
  components: {},
  props: [],
  data() {
    return {
      headers: [
        { text: "ID", value: "id" },
        { text: "Todo", value: "todo" },
        { text: "Actions", value: "actions", sortable: false },
      ]
    }
  },
  computed: {
    ...mapGetters({
      todos: "GET_TODOS"
    })
  },
  mounted() {
    this.getTodos();
  },
  methods: {

    ...mapActions({
      getTodos: "getTodos",
      deleteTodo: "deleteTodo"
    }),

    gotoTodoDetails(id) {
      this.$router.push({
        name: "TodoDetails",
        query: {
          id,
          mode: "edit"
        }
      });
    },

    addTodo() {
      this.$router.push({
        name: "TodoDetails",
        query: {
          mode: "add"
        }
      });
    }
  }
}


