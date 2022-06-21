const form = document.querySelector("form");
const input = document.getElementById("input");
const todo = document.querySelector(".todo-display");

// Keep the submit button disabled by default or until there is no value being entered
form.submit.disabled = true;

//Event listner for any input changes and then the callback function triggers to make the button disabled or enabled
input.addEventListener("input", () => {
  if (input.value === "") {
    form.submit.disabled = true;
  } else {
    form.submit.disabled = false;
  }
});

// Function to make creating different elements with different content easier
const createItem = (ele, content) => {
  let item = document.createElement(ele);
  item.textContent = content;
  return item;
};
// Submit event on the form
form.addEventListener("submit", (e) => {
  form.submit.disabled = true;
  e.preventDefault();
  const li = createItem("li", input.value);
  const addingLi = todo.appendChild(li);
  const deleteBtn = li.appendChild(createItem("button", "Delete"));
  deleteBtn.addEventListener("click", () => {
    addingLi.remove();
  });
  input.value = "";
});
