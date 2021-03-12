import { TodoService } from "../../services/todo.service";

const todoService = new TodoService();

export default {
  name: 'src-components-todo-form',
  components: {},
  props: [],
  data() {
    return {
      todo: {
        id: 0,
        todo: ""
      }
    }
  },
  computed: {

  },
  mounted() {
    if (this.$route.query.id && this.$route.query.mode) {
      this.getTodoDetails(this.$route.query.id)
    }
  },
  methods: {
    getTodoDetails(id) {
      todoService.getTodoDetails(id).then(res => {
        this.todo = res.data;
      })
    },

    saveTodo() {
      todoService.saveTodo(JSON.parse(JSON.stringify(this.todo)), this.$route.query.mode).then(res => {
        if (res.status === 200) {
          this.$router.go(-1);
        }
      });
    }
  },
  watch: {
    '$route.query.id': {
      handler: function (id) {
        this.getTodoDetails(id);
      }
    }
  }
}


