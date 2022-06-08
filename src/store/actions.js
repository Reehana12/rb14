export function addTodo(task) {
  return { type: "ADDTODO", payload: task };
}
export function deleteTodo(index) {
  return { type: "DELETETODO", payload: index };
}
