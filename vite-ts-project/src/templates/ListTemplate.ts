import FullList from "../model/FullList";
import ListItem from "../model/ListItem";

interface DOMList {
  ul: HTMLUListElement;
  clear(): void;
  render(fullList: FullList): void;
}

export default class ListTemplate implements DOMList {
  ul: HTMLUListElement;

  static instance = new ListTemplate();

  private constructor() {
    this.ul = document.getElementById("listItems") as HTMLUListElement;
  }

  clear(): void {
    this.ul.innerHTML = "";
  }

  render(fullList: FullList): void {
    this.clear();
    fullList.list.forEach((item: ListItem) => {
      const li = document.createElement("li");
      li.className = "item";
      const input = document.createElement("input");
      input.type = "checkbox";
      input.id = item.id;
      input.tabIndex = 0;
      input.checked = item.checked;
      li.appendChild(input);
      input.addEventListener("change", () => {
        item.checked = !item.checked;
        fullList.save();
      });

      const label = document.createElement("label");
      label.htmlFor = item.id;
      label.innerText = item.item;
      li.appendChild(label);

      const button = document.createElement("button");
      button.className = "button";
      button.textContent = "X";
      li.appendChild(button);
      button.addEventListener("click", () => {
        fullList.removeItem(item.id);
        this.render(fullList);
      });

      this.ul.appendChild(li);
    });
  }
}
