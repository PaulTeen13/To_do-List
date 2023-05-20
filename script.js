const unorderedList = document.querySelector("#items");
const input = document.querySelector("input");
const addBtn = document.querySelector(".footer__button");

function createListItem(itemText) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");

  const item = document.createElement("div");
  item.setAttribute("class", "item");

  const spanElement = document.createElement("span");
  spanElement.setAttribute("class", "item__name");
  spanElement.innerText = itemText;

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "item__delete");
  deleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;

  deleteBtn.addEventListener("click", () => {
    itemRow.remove();
  });

  item.appendChild(spanElement);
  item.appendChild(deleteBtn);

  const itemDivider = document.createElement("div");
  itemDivider.setAttribute("class", "item__divider");

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);

  return itemRow;
}

function onAdd() {
  const item = createListItem(input.value);
  unorderedList.appendChild(item);
  item.scrollIntoView({ blox: "end" });
  input.value = "";
  input.focus();
}

input.addEventListener("keypress", (e) => {
  if (e.key !== "Enter" || input.value === "") return;
  onAdd();
});

addBtn.addEventListener("click", () => {
  if (input.value === "") return;
  onAdd();
});
