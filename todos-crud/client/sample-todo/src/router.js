import Vue from "vue";
import VueRouter from "vue-router";
import TodoList from "@/components/todo-list/index.vue";
import TodoForm from "@/components/todo-form/index.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/todos",
        name: "TodoList",
        component: TodoList
    },
    {
        path: "/todos/todo",
        name: "TodoDetails",
        component: TodoForm
    },
    {
        path: "*",
        component: TodoList,
        redirectTo: "/todos"
    }
]

export const router = new VueRouter({
    mode: "history",
    routes
});