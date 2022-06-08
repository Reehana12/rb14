export function addTodo(task) {
  return { type: "ADDTODO", payload: task };
}
export function deleteTodo(index) {
  return { type: "DELETETODO", payload: index };
}
export function getCountries() {
  return function (dispatch) {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "INIT_COUNTRIES", payload: data });
      });
  };
}
