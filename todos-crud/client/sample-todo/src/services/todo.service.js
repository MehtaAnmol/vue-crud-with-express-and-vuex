import http from "./axios";

export class TodoService {
    getTodos() {
        return http.get("todos");
    }

    getTodoDetails(id) {
        return http.get("todos/" + id);
    }

    saveTodo(todo, mode = "add") {
        if (mode === "add") {
            return http.post("todos", todo);
        } else {
            return http.put("todos", todo);
        }
    }
}