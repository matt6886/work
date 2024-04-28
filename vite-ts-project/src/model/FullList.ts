import ListItem from "./ListItem";

interface List {
  list: ListItem[];
  load(): void;
  save(): void;
  addItem(item: ListItem): void;
  clearList(): void;
  removeItem(id: string): void;
}
export default class FullList implements List {
  // SingleTon
  static instance = new FullList();

  private constructor(private _list: ListItem[] = []) {}

  get list() {
    return this._list;
  }

  save(): void {
    localStorage.setItem("myList", JSON.stringify(this._list));
  }

  addItem(item: ListItem): void {
    this._list.push(item);
    this.save();
  }

  removeItem(id: string): void {
    this._list = this._list.filter((list: ListItem) => list.id !== id);
    this.save();
  }

  clearList(): void {
    this._list = [];
  }

  load(): void {
    const storeList: string | null = localStorage.getItem("myList");
    if (typeof storeList !== "string") return;

    const parseList: { _id: string; _item: string; _checked: boolean }[] =
      JSON.parse(storeList);

    parseList.forEach((item) => {
      const newListItem = new ListItem(item._id, item._item, item._checked);
      FullList.instance.addItem(newListItem);
    });
  }
}
