import "./css/style.css";
import FullList from "./model/FullList";
import ListItem from "./model/ListItem";
import ListTemplate from "./templates/ListTemplate";

const initApp = () => {
  const fullList = FullList.instance;
  const template = ListTemplate.instance;
  fullList.load();
  template.render(fullList);

  const newEntryForm = document.getElementById(
    "itemEntryForm"
  ) as HTMLFormElement;
  newEntryForm.addEventListener("submit", (event: SubmitEvent) => {
    event.preventDefault();

    const input = document.getElementById("newItem") as HTMLInputElement;
    const newEntryText = input.value.trim();
    if (newEntryText.length === 0) return;

    const itemId =
      fullList.list.length > 0
        ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
        : 1;

    const newList = new ListItem(itemId.toString(), newEntryText);
    fullList.addItem(newList);
    template.render(fullList);
  });

  // add event listener to button
  const button = document.getElementById(
    "clearItemsButton"
  ) as HTMLButtonElement;
  button.addEventListener("click", () => {
    fullList.clearList();
    template.render(fullList);
  });
};

document.addEventListener("DOMContentLoaded", initApp);
